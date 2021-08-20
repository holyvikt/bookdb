import Joi, { object } from 'joi'

// Validation rules for url parameters
const params = object({
    book: Joi.string().regex(/^[0-9a-fA-F]{24}$/, "Book ID must be 12 B hexadecimal value")
})

// Validation rulus for body attributes
const body = object({
    name: Joi.string().required(),
    author: Joi.string().required(),
    publication: Joi.number().required(),
    image: Joi.string()
})


// Validation schema for create book request
const createBookSchema = Joi.object({
    params: params,
    body: body
})

// Validation schema for get book request
const getBookSchema = Joi.object({
    params: params,
})

// Validation schema for update book request
const updateBookSchema = Joi.object({
    params: params,
    body: body
})

// Validation schema for delete book request
const deleteBookSchema = Joi.object({
    params: params
})

export { createBookSchema, updateBookSchema, getBookSchema, deleteBookSchema }