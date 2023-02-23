import express, {NextFunction, Response, Request} from "express";
import {userService} from "../services";
import {HttpError} from "../common";

export class UserController {
    router = express.Router()

    constructor() {
        this.router.post('/registration', this.registration)
        this.router.post('/login', this.login)
    }

    registration = async (req: Request, res: Response, next: NextFunction) => {
       try {
           const { login, password } = req.body
           const user = await userService.addUser(login, password)
           res.send(user)
       } catch (e) {
           next(e)
       }
    }

    login = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const { login, password } = req.body
            const user = await userService.login(login, password)
            res.send(user)
        } catch (e) {
            next(e)
        }
    }
}

export const userController = new UserController()