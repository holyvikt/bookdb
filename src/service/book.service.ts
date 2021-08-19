import { Book, BookModel } from "../model/book.model";
import log from "../logger/logger";

export function getBooks() {
    return BookModel.find()
}

export function createBook(book: Book) {
    return BookModel.create(book)
}

export function updateBook(book: Book){
    
}