import Joi from 'joi'

const bookSchema = Joi.object({
    name: Joi.string().required(),
    author: Joi.string().required(),
    publication: Joi.number().required(),
    image: Joi.string()
})

export default bookSchema