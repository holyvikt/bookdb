import express, { Application } from "express"
import log from './logger/logger'
import config from "./config/default";
import databaseConnect from './database/database'
import bookRouter from './routes/book.routes'

const cors = require('cors')
const app: Application = express();

app.use(cors())
app.use(express.json())
//app.use(express.urlencoded({ extended: false }))

databaseConnect()

app.listen(config.port, () => log.info(`Server listening at http://${config.host}:${config.port}`))

app.use('/api/v1/books', bookRouter)
