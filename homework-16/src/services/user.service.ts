import {User} from "../common";

export class UserService {
    private dbUser: User[] = []
    private userId: number = 1

    async addUser(
        login: string, password: string, isAdmin: boolean = false
    ): Promise<User> {
        const user: User = {
            id: this.userId,
            isAdmin,
            login,
            password
        }

        this.dbUser.push(user)
        this.userId++
        return user
    }

    async login (
        login: string, password: string
    )  {
        let foundUser: User | null = null
        this.dbUser.forEach(user => {
            if (user.login === login && user.password === password) {
                foundUser = user
            }
        })
        return foundUser
    }
}

export const userService = new UserService()