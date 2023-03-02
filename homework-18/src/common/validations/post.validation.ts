import Joi from 'joi'

export const idValidationSchema = Joi.string().length(24).required()

export const userIdValidationSchema = Joi.object({
    userId: idValidationSchema
})

export const postIdValidationSchema = Joi.object({
    postId: idValidationSchema
})

export const postInfoValidationSchema = Joi.object({
    topic: Joi
        .string()
        .min(10)
        .max(64),
    text: Joi
        .string()
        .min(10)
        .max(1000)
})

export const paginationValidationSchema = Joi.object({
    skip: Joi.string(),
    take: Joi.string(),
})

export const postValidationSchema = Joi.object({
    topic: Joi
        .string()
        .min(10)
        .max(64)
        .required(),
    text: Joi
        .string()
        .min(10)
        .max(1000)
        .required(),
    userId: idValidationSchema
})
