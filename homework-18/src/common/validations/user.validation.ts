import Joi from 'joi'

export const userLoginValidationSchema = Joi.object({
    password: Joi
        .string()
        .min(8)
        .max(255)
        .pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+])\S*$/)
        .required(),
    login: Joi
        .string()
        .min(3)
        .max(255)
        .required(),
})

export const userValidationSchema =  Joi.object({
    email: Joi
        .string()
        .min(3)
        .max(255)
        .email()
        .required(),
    firstName: Joi
        .string()
        .min(3)
        .max(255),
    lastName: Joi
        .string()
        .min(3)
        .max(255),
    avatar: Joi
        .string()
        .min(3)
        .max(255),
    age: Joi
        .number()
        .integer()
        .min(18)
        .max(150)
        .required(),
    interests: Joi
        .array()
        .items(Joi.string()),
    address1: Joi
        .string()
        .min(10)
        .max(255)
        .required(),
    address2: Joi
        .string()
        .min(10)
        .max(255),
    postIndex: Joi
        .string()
        .regex(/^\d{6}$/)
        .required(),
    socials: Joi
        .object({
            facebook: Joi.string().min(3).max(255),
            instagram: Joi.string().min(3).max(255),
            twitter: Joi.string().min(3).max(255)
        }),
    password: Joi
        .string()
        .min(8)
        .max(255)
        .pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+])\S*$/)
        .required(),
    login: Joi
        .string()
        .min(3)
        .max(255)
        .required(),
})



