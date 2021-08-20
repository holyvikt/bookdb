import { Request, Response } from 'express'
import log from '../logger/logger'
import { Book, BookModel } from '../model/book.model'
import { getBooks, getBook, createBook, deleteBook } from '../service/book.service'

export function getBooksHandler(req: Request, res: Response) {
    getBooks()
        .then((books) => res.send(books))
        .catch(() => res.sendStatus(409))
}

export function createBookHandler(req: Request, res: Response) {
    createBook(req.body)
        .then((book) => res.send(book))
        .catch((reason) => res.status(409).send(reason.message))
}

export function getBookHandler(req: Request, res: Response) {
    getBook(req.params.book)
        .then((book) => res.send(book))
        .catch((reason) => res.send(reason.message))
}

export function deleteBookHandler(req: Request, res: Response) {
    deleteBook(req.params.book)
        .then(() => res.sendStatus(200))
        .catch((reason) => res.status(409).send(reason.message))
}

