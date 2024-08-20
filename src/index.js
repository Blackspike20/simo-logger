const winston = require('winston');
const {format} = require('winston');

const logger = winston.createLogger({
    level: process.env.LOG_LEVEL,
    format: format.combine(
        format.timestamp(),
        format.printf(i => `${i.timestamp} [${i.level}] ${i.message}`)
    ),
    transports: [
        new winston.transports.Console()
    ]
});

module.exports = {
    logger
};