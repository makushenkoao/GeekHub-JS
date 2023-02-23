import {HttpError} from "./error";
import {NextFunction, Request, Response} from "express";

export interface IExceptionFilter {
    catch (
        err: Error | HttpError,
        req: Request,
        res: Response,
        next: NextFunction
    ): void
}