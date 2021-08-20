import { Book, BookModel } from "../model/book.model";
import log from "../logger/logger";

export function getBooks() {
    return BookModel.find()
}

export function getBook(id: string) {
    return BookModel.findById(id)
}

export function createBook(book: Book) {
    return BookModel.create(book)
}

export function deleteBook(id: string) {
    return BookModel.findByIdAndRemove(id)
}