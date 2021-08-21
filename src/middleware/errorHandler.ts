import { Request, Response, NextFunction } from "express"

const errorHandler = function(error: Error, req: Request, res: Response, next: NextFunction) {
    switch(error.name){
        case('file-type'):
            res.status(415).send('Illegal file type')
            break

    }
}