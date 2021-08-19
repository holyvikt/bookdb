import { Request, Response } from 'express'
import log from '../logger/logger'
import { Book, BookModel } from '../model/book.model'
import { getBooks, createBook } from '../service/book.service'

export function getBooksHandler(req: Request, res: Response) {
    getBooks()
        .then((books) => res.send(books))
        .catch(() => res.sendStatus(409))
}

export function createBookHandler(req: Request, res: Response) {
    createBook(req.body)
        .then((book) => res.send(book))
        .catch((error) => res.status(409).send(error))
}

export function updateBookHandleer(req: Request, res: Response){
    
}

