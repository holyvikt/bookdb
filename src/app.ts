import express, { Application, Request, Response } from "express"
import log from './logger/logger'
import config from "./config/default";
import connect from './database/database'
import routes from './routes'

const app: Application = express();

app.use(express.json())
app.use(express.urlencoded({extended: false}))


app.get('/', (req: Request, res: Response) => {
    res.send()
})

connect()
app.listen(config.port, () => log.info(`Server listening at http://${config.host}:${config.port}`))
routes(app)
