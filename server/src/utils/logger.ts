import logger, { Logger } from 'pino';

const log: Logger = logger({
    transport: {
        target: 'pino-pretty',
        options: {
            translateTime: 'SYS: HH:MM:ss.l'
        }
    },
});

export default log;