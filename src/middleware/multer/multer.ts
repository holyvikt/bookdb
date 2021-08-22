import { FileFilterCallback } from 'multer'
import { Request } from 'express'
import config from '../../config/default'
const multer = require('multer')

/**
 * Multer factory
 * @param fileFilter 
 * @returns 
 */
export const createMulter = (storagePath: string, fileFilter: (req: Request, file: Express.Multer.File, callback: FileFilterCallback) => void) => (multer({
    dest: storagePath,
    fileFilter: fileFilter
}))



