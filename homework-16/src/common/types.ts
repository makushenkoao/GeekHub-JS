export type User = {
    id: number,
    login: string,
    password: string,
    isAdmin: boolean
}

export type Post = {
    id: number,
    userId: number,
    topic: string,
    text: string,
}