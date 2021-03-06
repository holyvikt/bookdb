import { Request, Response } from 'express'
import path from 'path'
import { getBooks, getBook, createBook, deleteBook, updateBook } from '../service/book.service'
import { deleteFile } from '../service/file.service'

/**
 * Returns all books
 * @param req 
 * @param res 
 */
export function getBooksHandler(req: Request, res: Response) {
    getBooks()
        .then((books) => res.send(books))
        .catch((reason) => res.status(500).send(reason.message))
}

/**
 * Returns book by ID
 * @param req
 * @param res 
 */
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

/**
 * Creates new book
 * @param req 
 * @param res 
 */
export function createBookHandler(req: any, res: Response) {
    createBook(req.body, req.file?.path as string)
        .then((book) => res.status(201).send(book))
        .catch((reason) => res.status(500).send(reason.message))
}

/**
 * Updates book by ID
 * @param req 
 * @param res 
 */
export function updateBookHandler(req: Request, res: Response) {
    updateBook(req.params.book, req.body, req.file?.path as string)
        .then((book) => {
            if (book)
                res.send(book)
            else
                res.status(404).send("Book not found")
        })
        .catch((reason) => res.status(500).send(reason.message))

}

/**
 * Deletes req 
 * @param res 
 */
export function deleteBookHandler(req: Request, res: Response) {
    deleteBook(req.params.book)
        .then((book) => {
            if (book) {
                if(book.image)
                    deleteFile(book.image)
                res.status(200).send("Book deleted")
            } else {
                res.status(404).send("Nothing to delete")
            }
        })
        .catch((reason) => res.status(500).send(reason.message))
}

/**
 * Returns book image by book ID
 * @param req 
 * @param res 
 */
export function getBookImage(req: Request, res: Response) {
    getBook(req.params.book)
        .then((book) => {
            if (book) {
                if (book.image)
                    res.sendFile(path.resolve(`${book.image}`))
                else
                    res.sendStatus(204)
            } else {
                res.sendStatus(404)
            }
        })
}

