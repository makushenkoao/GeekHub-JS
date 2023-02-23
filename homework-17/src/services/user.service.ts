import {User, UserModel} from "../models";
import {HttpError} from "../common";
import {StatusCodes} from "http-status-codes";

export class UserService {
    async addUser(
        login: string, password: string, isAdmin: boolean = false
    ): Promise<User> {
        const oldUser: User | null = await UserModel.findOne({login})

        if (oldUser) {
            throw new HttpError(StatusCodes.CONFLICT, `Username ${login} already exist`, 'UserService')
        }

        return UserModel.create({
            login,
            password,
            isAdmin
        })
    }

    async login(
        login: string, password: string
    ): Promise<User> {
        const user = await UserModel.findOne({
            login,
            password
        });

        if (!user) {
            throw new HttpError(StatusCodes.NOT_FOUND, 'Username or password is incorrect', 'UserService')
        }

        return user
    }
}

export const userService = new UserService()