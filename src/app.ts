import express, { Application, Request, Response } from "express"
import log from './logger/logger'
import config from "./config/default";
import connect from './database/database'
import bookRoutes from './route/book.routes'

const cors = require('cors')
const app: Application = express();

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended: false}))

connect()
app.listen(config.port, () => log.info(`Server listening at http://${config.host}:${config.port}`))
bookRoutes(app)
