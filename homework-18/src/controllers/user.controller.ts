import express, {NextFunction, Response, Request} from "express";
import {userService} from "../services";
import {BaseController} from "../common/abstract/base.controller";
import {userLoginValidationSchema, userValidationSchema} from "../common/validations";

export class UserController extends BaseController{
    constructor() {
        super()
        this.bindRoutes([
            {
                path: '/registration',
                method: 'post',
                handler: this.registration,
                validators: {
                    body: userValidationSchema
                }
            },
            {
                path: '/login',
                method: 'post',
                handler: this.login,
                validators: {
                    body: userLoginValidationSchema
                }
            },
        ])
    }

    registration = async (req: Request, res: Response, next: NextFunction) => {
        const user = await userService.addUser(req.body)
        res.send(user)
    }

    login = async (req: Request, res: Response, next: NextFunction) => {
        const { login, password } = req.body
        const user = await userService.login(login, password)
        res.send(user)
    }
}

export const userController = new UserController()