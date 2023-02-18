import express, {NextFunction, Response, Request} from "express";
import {postService} from "../services/post.service";

export class PostController {
    router = express.Router()

    constructor() {
        this.router.post('/', this.create)
        this.router.get('/', this.get)
        this.router.put('/:postId', this.put)
        this.router.delete('/:postId', this.delete)
    }

    create = async (req: Request, res: Response, next: NextFunction) => {
        const { topic, text, userId } = req.body
        const post = await postService.create(topic, text, userId)
        res.send(post)
    }

    get = async (req: Request, res: Response, next: NextFunction) => {
        const { userId, skip, take } = req.body
        const post = await postService.get(userId, skip, take)
        res.send(post)
    }

    put = async (req: Request, res: Response, next: NextFunction) => {
        const { topic, text } = req.body
        const { postId } = req.params
        const post = await postService.put(topic, text, Number(postId))
        res.send(post)
    }

    delete = async (req: Request, res: Response, next: NextFunction) => {
        const { postId } = req.params
        await postService.delete(Number(postId))
        res.send('post deleted')
    }
}

export const postController = new PostController()