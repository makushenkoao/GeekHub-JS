import {Post} from "../common";

export class UserService {
    private dbPost: Post[] = []
    private postId: number = 1

    async create(
        topic: string, text: string, userId: number
    ): Promise<Post> {
        const post: Post = {
            id: this.postId,
            userId,
            text,
            topic
        }

        this.dbPost.push(post)
        this.postId++
        return post
    }

    async get(userId: number, skip: number, take: number) {
        skip = skip || 0
        take = take || 10
        let allPosts: Post[] = []
        this.dbPost.forEach(post => {
            if (post.userId === userId) {
                allPosts.push(post)
            }
        })
        const selectedPosts = allPosts.slice(skip).slice(0, take)
        return {
            total: allPosts.length,
            data: selectedPosts
        }
    }


    async put(topic: string, text: string, id: number) {
        let editedPost ;
        this.dbPost.forEach(post => {
            if (post.id === id) {
                editedPost = post ;
                if (topic) editedPost.topic = topic ;
                if (text) editedPost.text = text ;
            }
        })
        return editedPost
    }

    async delete(id: number) {
        const filterPosts = this.dbPost.filter(post => post.id !== id)
        this.dbPost = filterPosts
        return filterPosts
    }
}

export const postService = new UserService()