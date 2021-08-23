import { Book, BookModel } from "../model/book.model";
import { deleteFile } from "./file.service";

/**
 * Gets all books from DB
 */
export function getBooks() {
    return BookModel.find()
}

/**
 * Gets book from DB by ID
 * @param id book ID
 */
export function getBook(id: string) {
    return BookModel.findById(id)
}

/**
 * Inserts new book into DB
 * @param book book to be inserted
 */
export function createBook(book: Book, image: string) {
    book.image = image
    return BookModel.create(book)
}

/**
 * Updates existing book in DB
 * @param bookId book ID
 * @param updatedBook new values
 */
export async function updateBook(bookId: string, updatedBook: Book, image: string) {
    try {
        const oldBook = await BookModel.findById(bookId)
        if (oldBook) {
            updatedBook.image = image ? image : oldBook.image
            if (oldBook.image && image) {
                deleteFile(oldBook.image)
            }
            await BookModel.updateOne({_id: oldBook._id}, updatedBook)
        }else{
            return Promise.resolve(null)
        }
    }catch(e){
        return Promise.reject(e.message)
    }
    return BookModel.findById(bookId)
}

/**
 * Deletes book from DB
 * @param id book ID
 */
export function deleteBook(id: string) {
    return BookModel.findByIdAndRemove(id)
}
