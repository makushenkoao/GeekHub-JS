import express, {NextFunction, Response, Request} from "express";
import {userService} from "../services";

export class UserController {
    router = express.Router()

    constructor() {
        this.router.post('/registration', this.registration)
        this.router.post('/login', this.login)
    }

    registration = async (req: Request, res: Response, next: NextFunction) => {
        const { login, password } = req.body
        const user = await userService.addUser(login, password)
        res.send(user)
    }

    login = async (req: Request, res: Response, next: NextFunction) => {
        const { login, password } = req.body
        const user = await userService.login(login, password)
        res.send(user)
    }
}

export const userController = new UserController()