import express, { Application, Request, Response } from "express"
import log from './logger/logger'
import config from "./config/default";

const app: Application = express();

app.use(express.json())
app.use(express.urlencoded({extended: false}))

const add = (a: number, b: number): number => a + b


app.get('/', (req: Request, res: Response) => {
    res.send('Hello')
})

app.listen(config.port, () => log.info(`Server listening at http://${config.host}:${config.port}`))
