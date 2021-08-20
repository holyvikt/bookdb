import mongoose from "mongoose";
import config from "../config/default";
import log from "../logger/logger";

// MongoDB connection
async function connect() {
    const url = `${config.dbUrl}:${config.dbPort}/${config.dbName}`
    return mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false })
        .then(() => log.info(`Connected to ${config.dbName} database`))
        .catch((error) => log.error(error, "Database connection error"))
}

export default connect
