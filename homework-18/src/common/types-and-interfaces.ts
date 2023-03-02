import {HttpError} from "./error";
import {NextFunction, Request, Response, Router} from "express";

export interface IExceptionFilter {
    catch (
        err: Error | HttpError,
        req: Request,
        res: Response,
        next: NextFunction
    ): void
}

export interface IControllerRoute {
    path: string,
    method: keyof Pick<Router, 'get' | 'post' | 'delete' | 'patch' | 'put'>,
    handler: (req: Request, res: Response, next: NextFunction) => void,
    validators?: ValidationType
}

export interface userSocials {
    facebook: string,
    instagram: string,
    twitter: string,
}

export type ValidationType = Record<string, any>