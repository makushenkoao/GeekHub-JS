import {IExceptionFilter} from "../types-and-interfaces";
import {HttpError} from "./http.error";
import {NextFunction, Request, Response} from "express";

export class ExceptionFilter implements IExceptionFilter {
    catch(
        err: Error | HttpError,
        req: Request,
        res: Response,
        next: NextFunction
    ) : void {
        if (err instanceof HttpError) {
            console.log(`[${err.context} Error ${err.statusCode} : ${err.message}]`)

            res.status(err.statusCode).send({
                    err: err.message
            })
        } else {
            res.status(500).send({
                err: err.message
            })
        }
    }
}

export const exceptionFilter = new ExceptionFilter()
