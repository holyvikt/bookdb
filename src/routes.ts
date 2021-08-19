import { Application, Request, Response } from 'express'
import { getBooksHandler, createBookHandler } from './controller/book.controller'

export default function (app: Application) {

    // Get books
    app.get('/api/v1/books', (req: Request, res: Response) => {
        getBooksHandler(req, res)
    })

    // Get book

    // Create book
    app.post('/api/v1/books', (req: Request, res: Response) => {
        createBookHandler(req, res)
    })

    // Update book

    // Delte book
}