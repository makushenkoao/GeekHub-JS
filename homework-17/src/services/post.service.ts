import {PostModel, Post} from "../models";
import {HttpError} from "../common";
import {StatusCodes} from "http-status-codes";

export class UserService {

    async create(
        topic: string, text: string, userId: string
    ): Promise<Post> {
        return PostModel.create({
           topic,
           text,
           userId,
       })
    }

    async get(
        userId: string, skip: number, take: number
    ): Promise<{
        total: number,
        data: Post[]
    }> {
        const posts = PostModel
            .find({ userId })
            .skip(skip)
            .limit(take)

        const [data, total] = await Promise.all([posts, PostModel.countDocuments({ userId })]);

        return {
            total,
            data: data || [],
        };
    }


    async put(topic: string, text: string, id: string): Promise<Post> {
        const post = await PostModel.findById(id);

        if (!post) {
            throw new HttpError(StatusCodes.NOT_FOUND, 'Not found post', 'PostService')
        }
        if (topic) post.topic = topic
        if (text) post.text = text

        return post.save();
    }

    async delete(id: string): Promise<Post> {
        const post = await PostModel.findByIdAndDelete(id).exec();

        if (!post) {
            throw new HttpError(StatusCodes.NOT_FOUND, 'Not found post', 'PostService')
        }

        return post;
    }
}

export const postService = new UserService()