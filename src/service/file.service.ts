import fs from 'fs'
import log from '../logger/logger';

export function deleteFile(path: string) {
    fs.unlink(path, (err) => {
        if (err)
            log.error(`Deleting file ${path} failed`)
        else
            log.info(`Deleted ${path}`)
    });
}