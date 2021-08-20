import { Application, Request, Response } from 'express'
import { getBooksHandler, getBookHandler, createBookHandler, deleteBookHandler } from './controller/book.controller'
import { createBook } from './service/book.service'
import bookSchema from './validator/schemas/bookSchema'
import validateRequest from './validator/validator'

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

    // Delete book
    app.delete('/api/v1/books/:book', (req: Request, res: Response) => {
        deleteBookHandler(req, res)
    })
}