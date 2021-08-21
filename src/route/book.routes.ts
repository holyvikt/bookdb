import { Application } from 'express'
import { getBooksHandler, getBookHandler, createBookHandler, deleteBookHandler, updateBookHandler, getBookImage } from '../controller/book.controller'
import { createBookSchema, getBookSchema, updateBookSchema, deleteBookSchema } from '../schema/book.schema'
import validateRequest from '../middleware/validator'
import config from '../config/default'
import { FileFilterCallback } from 'multer'

const fileFilter = (req: Request, file: Express.Multer.File, callback: FileFilterCallback) => {
    const allowedTypes = ['image/jpeg', 'image/png']

    if (allowedTypes.includes(file.mimetype)) {
        return callback(null, true)
    } else {
        const error = new Error('Illegal file type')
        error.name = 'file-type'
        return callback(new Error())
    }
}

const multer = require('multer')

const upload = multer({
    dest: `${config.storagePath}/`,
    fileFilter: fileFilter
})



export default function (app: Application) {

    app.post('/upload', upload.single('file'), (req, res) => res.send(req.body))

    // Get books
    app.get('/api/v1/books', getBooksHandler)

    // Get book
    app.get('/api/v1/books/:book', validateRequest(getBookSchema), getBookHandler)

    // Create book
    app.post('/api/v1/books', [upload.single('file'), validateRequest(createBookSchema)], createBookHandler)

    // Update book
    app.put('/api/v1/books/:book', validateRequest(updateBookSchema), updateBookHandler)

    // Delete book
    app.delete('/api/v1/books/:book', validateRequest(deleteBookSchema), deleteBookHandler)

    // Get book image
    app.get('/api/v1/books/:book/image', validateRequest(getBookSchema), getBookImage)
}