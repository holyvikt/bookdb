import Joi, { object } from 'joi'

const bookIdSchema = object({
    params: object({
        book: Joi.string().length(24).regex(/^[a-f0-9]/)
    })
})

export default bookUrlSchema