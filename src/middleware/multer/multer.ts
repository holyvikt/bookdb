import { FileFilterCallback } from 'multer'
import { Request } from 'express'
import config from '../../config/default'
const multer = require('multer')

export const createMulter = (fileFilter: (req: Request, file: Express.Multer.File, callback: FileFilterCallback) => void) => (multer({
    dest: `${config.storagePath}/`,
    fileFilter: fileFilter
}))



