import { Request, NextFunction, Response } from 'express'
import Joi, { Schema } from 'joi';

/**
 * Validator options
 */
const options = {
    abortEarly: false, // include all errors
    allowUnknown: true, // ignore unknown props
    stripUnknown: true // remove unknown props
};

/**
 * Request validation middleware
 * @param schema the scheme according to which the validation should be done
 * @returns 
 */
const validateRequest = (schema: Schema) =>
    (req: Request, res: Response, next: NextFunction) => {
        const validationResult = schema.validate(req, options)
        if (validationResult.error) {
            res.status(400).send(validationResult.error.message)
        } else {
            next()
        }
    }

export default validateRequest