import express from 'express'
import config from '../config/default'
import { getBooksHandler, getBookHandler, createBookHandler, deleteBookHandler, updateBookHandler, getBookImage } from '../controller/book.controller'
import { createBookSchema, getBookSchema, updateBookSchema, deleteBookSchema } from '../middleware/validator/schemas/book.schema'
import validateRequest from '../middleware/validator/requestValidator'
import { createMulter } from '../middleware/multer/multer'
import imageFilter from '../middleware/multer/imageFilter'
import { errorHandler, fileCleanup } from '../middleware/errorHandlers'


const router = express.Router()
const uploadImageMulter = createMulter(`${config.storagePath}/`, imageFilter)

// Get books
router.get('/', getBooksHandler)

// Get book
router.get('/:book', validateRequest(getBookSchema), getBookHandler)

// Create book
router.post('/', [uploadImageMulter.single('file'), validateRequest(createBookSchema)], createBookHandler)

// Update book
router.put('/:book', [uploadImageMulter.single('file'), validateRequest(updateBookSchema)], updateBookHandler)

// Delete book
router.delete('/:book', validateRequest(deleteBookSchema), deleteBookHandler)

// Get book image
router.get('/:book/image', validateRequest(getBookSchema), getBookImage)

router.use(fileCleanup)
router.use(errorHandler)

export default router