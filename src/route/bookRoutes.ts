import { Application, Request, Response } from 'express'
import { getBooksHandler, getBookHandler, createBookHandler, deleteBookHandler, updateBookHandler } from '../controller/book.controller'
import { createBookSchema, getBookSchema, updateBookSchema, deleteBookSchema } from '../schema/book.schema'
import validateRequest from '../middleware/validator'

export default function (app: Application) {
    // Get books
    app.get('/api/v1/books', getBooksHandler)

    // Get book
    app.get('/api/v1/books/:book', validateRequest(getBookSchema), getBookHandler)

    // Create book
    app.post('/api/v1/books', validateRequest(createBookSchema), createBookHandler)

    // Update book
    app.put('/api/v1/books/:book', validateRequest(updateBookSchema), updateBookHandler)

    // Delete book
    app.delete('/api/v1/books/:book', validateRequest(deleteBookSchema),deleteBookHandler)
}