import logger from 'pino'
import dayjs from 'dayjs'

const log = logger({
    prettyPrint: true,
    base: {
        pid: false
    },
    timestamp: () => `time":"${dayjs().format('HH:mm:ss.SSS')}"`
})

export default log