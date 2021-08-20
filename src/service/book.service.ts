import { Book, BookModel } from "../model/book.model";
import log from "../logger/logger";

/**
 * Get all books from DB
 */
export function getBooks() {
    return BookModel.find()
}

/**
 * Get book from DB by ID
 * @param id book ID
 */
export function getBook(id: string) {
    return BookModel.findById(id)
}

/**
 * Insert new book into DB
 * @param book book to be inserted
 */
export function createBook(book: Book) {
    return BookModel.create(book)
}

/**
 * Update existing book in DB
 * @param bookId book ID
 * @param updatedBook new values
 */
export async function updateBook(bookId: string, updatedBook: Book){
    await BookModel.findByIdAndUpdate(bookId, updatedBook)
    return BookModel.findById(bookId)
}

/**
 * Delete book from DB
 * @param id book ID
 */
export function deleteBook(id: string) {
    return BookModel.findByIdAndRemove(id)
}
