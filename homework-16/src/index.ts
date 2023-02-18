import express from 'express'
import bodyParser from "body-parser";
import {postController, userController} from "./controllers";
import morgan from "morgan";
import cors from 'cors-ts';
import helmet from "helmet";

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

    async init() {
        this.useMiddlewares()
        this.useRoutes()
        this.app.listen(this.PORT, () => console.log(`Sever started on PORT ${this.PORT}`))
    }
}

(async () => {
    const app = new App()
    await app.init()
})()
