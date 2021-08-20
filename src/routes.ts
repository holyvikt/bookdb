import { Application, Request, Response } from 'express'
import { getBooksHandler, getBookHandler, createBookHandler, deleteBookHandler, updateBookHandler } from './controller/book.controller'
import { createBook } from './service/book.service'
import bookSchema from './schema/book.schema'
import validateRequest from './middleware/validator'

export default function (app: Application) {

    // Get books
    app.get('/api/v1/books', (req: Request, res: Response) => {
        getBooksHandler(req, res)
    })

    // Get book
    app.get('/api/v1/books/:book', (req: Request, res: Response) => {
        getBookHandler(req, res)
     })

    // Create book
    app.post('/api/v1/books', validateRequest(bookSchema), createBookHandler)

    // Update book
    app.put('/api/v1/books/:book', validateRequest(bookSchema), updateBookHandler)

    // Delete book
    app.delete('/api/v1/books/:book', (req: Request, res: Response) => {
        deleteBookHandler(req, res)
    })
}