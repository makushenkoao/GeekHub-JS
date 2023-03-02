import express, {NextFunction, Request, Response} from 'express'
import bodyParser from "body-parser";
import {postController, userController} from "./controllers";
import morgan from "morgan";
import cors from 'cors-ts';
import helmet from "helmet";
import mongoose from "mongoose";
import {exceptionFilter} from "./common/error/exception.filter";

export class App {
    app = express()
    PORT = process.env.PORT || 5000;

    useRoutes() {
        this.app.use('/users', userController.router)
        this.app.use('/posts', postController.router)
    }

    useMiddlewares() {
        this.app.use(helmet())
        this.app.use(cors())
        this.app.use(
            morgan(':date[iso] :"method :url" :status  :res[content-length]')
        )
        this.app.use(bodyParser.urlencoded({extended: true}))
    }

    async initDb() {
        await mongoose.connect('mongodb://localhost:27017/homework17')
    }

    async init() {
        this.useMiddlewares()
        await this.initDb()
        this.useRoutes()
        this.app.use(exceptionFilter.catch.bind(exceptionFilter))

        this.app.listen(this.PORT, () => console.log(`Sever started on PORT ${this.PORT}`))

        process.on('uncaughtException', (err: Error) => {
            console.error('Uncaught error: ', err.message)
        })

        process.on('unhandledRejection', (err: Error) => {
            console.error('Uncaught async error: ', err.message)
        })
    }
}

(async () => {
    const app = new App()
    await app.init()
})()
