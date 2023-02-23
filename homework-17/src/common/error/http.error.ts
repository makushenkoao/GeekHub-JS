import {StatusCodes} from "http-status-codes";

export class HttpError extends Error{
    statusCode: number
    message: string
    context?: string

    constructor(statusCode: StatusCodes, message: string, context?: string) {
        super(message)
        this.message = message
        this.statusCode = statusCode
        this.context = context
    }
}