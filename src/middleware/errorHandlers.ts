import { Request, Response, NextFunction } from "express"
import { deleteFile } from "../service/file.service"

/**
 * Error handler
 * Sends responses according to the type of error
 * @param err 
 * @param req 
 * @param res 
 * @param next 
 */
export const errorHandler = function (err: Error, req: Request, res: Response, next: NextFunction) {
    if (err.name === 'file-type')
        res.status(415).send('Illegal file type')
    else if (err.name === 'form-validation')
        res.status(400).send(err.message)
    else
        next(err)
}

/**
 * Deletes the file if the transaction failed
 * @param err 
 * @param req 
 * @param res 
 * @param next 
 */
export const fileCleanup = function (err: Error, req: Request, res: Response, next: NextFunction) {
    if (req.file) {
        deleteFile(req.file.path)
    }
    next(err)
}