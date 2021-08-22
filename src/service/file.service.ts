import fs from 'fs'
import log from '../logger/logger';

/**
 * Deletes the file in filesystem
 * @param path
 */
export function deleteFile(path: string) {
    fs.unlink(path, (err) => {
        if (err)
            log.error(`Deleting file ${path} failed`)
        else
            log.info(`Deleted ${path}`)
    });
}