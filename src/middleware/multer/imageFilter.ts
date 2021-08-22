import {FileFilterCallback} from 'multer'
import {Request} from 'express'

const imageFilter = (req: Request, file: Express.Multer.File, callback: FileFilterCallback) => {
    const allowedTypes = ['image/jpeg', 'image/jpg', 'image/png']

    if (allowedTypes.includes(file.mimetype)) {
        callback(null, true)
    } else {
        const error = new Error('Illegal file type')
        error.name = 'file-type'
        return callback(error)
    }
}

export default imageFilter