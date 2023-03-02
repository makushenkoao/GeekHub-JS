import {NextFunction, Request, Response, Router} from "express";
import {IControllerRoute, ValidationType} from "../types-and-interfaces";
import {Logger} from "tslog";
import {ValidationError} from "../error";

export abstract class BaseController {
    private readonly _router = Router()
    readonly logger = new Logger()

    get router(): Router {
        return this._router
    }

    protected bindRoutes(routes: IControllerRoute[]) {
        for (const route of routes) {
            this.logger.info(`Route attached [${route.method}] ${route.path}`)
            const handler = this.catchErrorHandler(route.handler)
            const pipeLine = []
            if (route.validators) {
                pipeLine.push(this.createValidators(route.validators))
            }
            this.router[route.method](route.path, pipeLine, handler)
        }
    }

    catchErrorHandler(handler: any) {
        return async (req: Request, res: Response, next: NextFunction) => {
            try {
                await handler.bind(this)(req, res, next)
            } catch (e) {
                next(e)
            }
        }
    }

    createValidators(validators: ValidationType) {
        return (req: Request, res: Response, next: NextFunction) => {
            let errors: any[] = []
            const joinOptions = {
                abortEarly: false,
                allowUnknown: true,
                stripUnknown: true
            }

            for (const validatorName of Object.keys(validators)) {
                const result = validators[validatorName as keyof ValidationType].validate(
                    req[validatorName as keyof Request],
                    joinOptions
                )

                if (result.value) {
                    req[
                        validatorName as keyof Pick<
                            Request,
                            'body' | 'query' | 'params' | 'header' | 'cookies'
                            >
                    ] = result.value
                }

                if (result.error) {
                    errors = errors.concat(result.error.details)
                }
            }

            if (errors.length) {
               throw new ValidationError(errors)
            }

            next()
        }
    }


}