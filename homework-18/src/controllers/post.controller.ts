import express, {NextFunction, Response, Request} from "express";
import {postService} from "../services";
import {BaseController} from "../common/abstract/base.controller";
import {
    paginationValidationSchema,
    postInfoValidationSchema,
    postValidationSchema,
    userIdValidationSchema,
    postIdValidationSchema
} from "../common/validations";

export class PostController extends BaseController{
    constructor() {
        super()
        this.bindRoutes([
            {
                path: '/',
                method: 'post',
                handler: this.create,
                validators: {
                    body: postValidationSchema
                }
            },
            {
                path: '/:userId',
                method: 'get',
                handler: this.get,
                validators: {
                    params: userIdValidationSchema,
                    query: paginationValidationSchema
                }
            },
            {
                path: '/:postId',
                method: 'put',
                handler: this.put,
                validators: {
                    body: postInfoValidationSchema,
                    params: postIdValidationSchema
                }
            },
            {
                path: '/:postId',
                method: 'delete',
                handler: this.delete,
                validators: {
                    params: postIdValidationSchema
                }
            },
        ])
    }

    create = async (req: Request, res: Response, next: NextFunction) => {
        const { topic, text, userId } = req.body
        const post = await postService.create(topic, text, userId)
        res.send(post)
    }

    get = async (req: Request, res: Response, next: NextFunction) => {
        const { userId } = req.params
        const { skip, take } = req.query
        const post = await postService.get(String(userId), Number(skip), Number(take))
        res.send(post)
    }

    put = async (req: Request, res: Response, next: NextFunction) => {
        const { topic, text } = req.body
        const { postId } = req.params
        const post = await postService.put(topic, text, postId)
        res.send(post)
    }

    delete = async (req: Request, res: Response, next: NextFunction) => {
        const { postId } = req.params
        await postService.delete(postId)
        res.send('post deleted')
    }
}

export const postController = new PostController()