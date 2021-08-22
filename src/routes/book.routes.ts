import { Application } from 'express'
import config from '../config/default'
import { getBooksHandler, getBookHandler, createBookHandler, deleteBookHandler, updateBookHandler, getBookImage } from '../controller/book.controller'
import { createBookSchema, getBookSchema, updateBookSchema, deleteBookSchema } from '../middleware/validator/schemas/book.schema'
import validateRequest from '../middleware/validator/requestValidator'
import {createMulter} from '../middleware/multer/multer'
import imageFilter from '../middleware/multer/imageFilter'
import {errorHandler, fileCleanup} from '../middleware/errorHandlers'


export default function (app: Application) {
    const uploadImageMulter = createMulter(`${config.storagePath}/`, imageFilter)

    // Get books
    app.get('/api/v1/books', getBooksHandler)

    // Get book
    app.get('/api/v1/books/:book', validateRequest(getBookSchema), getBookHandler)

    // Create book
    app.post('/api/v1/books', [uploadImageMulter.single('file'),  validateRequest(createBookSchema)], createBookHandler)

    // Update book
    app.put('/api/v1/books/:book', validateRequest(updateBookSchema), updateBookHandler)

    // Delete book
    app.delete('/api/v1/books/:book', validateRequest(deleteBookSchema), deleteBookHandler)

    // Get book image
    app.get('/api/v1/books/:book/image', validateRequest(getBookSchema), getBookImage)

    app.use(fileCleanup)
    app.use(errorHandler)

}