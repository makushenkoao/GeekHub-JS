import {IExceptionFilter} from "../types-and-interfaces";
import {HttpError} from "./http.error";
import {NextFunction, Request, Response} from "express";
import {ValidationError} from ".";
import {Logger} from "tslog";

export class ExceptionFilter implements IExceptionFilter {
    readonly logger = new Logger()
    catch(
        err: Error | HttpError,
        req: Request,
        res: Response,
        next: NextFunction
    ) : void {
        if (err instanceof HttpError) {
            this.logger.warn(`[${err.context}] Error ${err.statusCode} : ${err.message}`)

            res.status(err.statusCode).send({
                    err: err.message
            })
        } else if (err instanceof ValidationError) {
            this.logger.warn(`[Validation] Error`)

            res.status(422).send({
                err: [...err.validationErrors]
            })
        } else {
            res.status(500).send({
                err: err.message
            })
        }
    }
}

export const exceptionFilter = new ExceptionFilter()
