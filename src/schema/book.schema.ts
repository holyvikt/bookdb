import Joi, { object } from 'joi'

const params = {
    params: object({
        book: Joi.string().regex(/^[0-9a-fA-F]{24}$/, "Book ID must be 12 B hexadecimal value")
    })
}

const body = {
    body: object({
        name: Joi.string().required(),
        author: Joi.string().required(),
        publication: Joi.number().required(),
        image: Joi.string()
    })
}


const createBookSchema = Joi.object({
    ...params,
    ...body
})

const getBookSchema = Joi.object({
    ...params,
})

const updateBookSchema = Joi.object({
    ...params,
    ...body
})

const deleteBookSchema = Joi.object({
    ...params
})

export {createBookSchema, updateBookSchema, getBookSchema, deleteBookSchema}