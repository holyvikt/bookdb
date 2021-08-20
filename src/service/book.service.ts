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

export async function updateBook(bookId: string, updatedBook: Book){
    await BookModel.findByIdAndUpdate(bookId, updatedBook)
    return BookModel.findById(bookId)
}

export function deleteBook(id: string) {
    return BookModel.findByIdAndRemove(id)
}