import { Request, Response } from 'express'
import log from '../logger/logger'
import { Book, BookModel } from '../model/book.model'
import { getBooks, getBook, createBook, deleteBook } from '../service/book.service'

export function getBooksHandler(req: Request, res: Response) {
    getBooks()
        .then((books) => res.send(books))
        .catch((reason) => res.status(500).send(reason.message))
}

export function createBookHandler(req: Request, res: Response) {
    createBook(req.body)
        .then((book) => res.status(201).send(book))
        .catch((reason) => res.status(500).send(reason.message))
}

export function getBookHandler(req: Request, res: Response) {
    getBook(req.params.book)
        .then((book) => {
            if (book)
                res.send(book)
            else
                res.status(404).send('Book not found')
        })
        .catch((reason) => res.status(500).send(reason.message))
}

export function deleteBookHandler(req: Request, res: Response) {
    deleteBook(req.params.book)
        .then((book) => {
            if (book)
                res.status(200).send("Book deleted")
            else
                res.status(404).send("Nothing to delete")
        })
        .catch((reason) => res.status(500).send(reason.message))
}

