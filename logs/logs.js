const winston = require('winston');
require('winston-daily-rotate-file');

const { combine, timestamp, errors, json } = winston.format;

const timedTransport = new winston.transports.DailyRotateFile({
  filename: './logs/application-%DATE%.log',
  datePattern: 'YYYY-MM-DD-HH',
  maxFiles: '14d',
});

const logger = winston.createLogger({
  level: 'info',
  format: combine(errors({ stack: true }), timestamp(), json()),
  transports: [timedTransport],
  exceptionHandlers: [
    new winston.transports.File({
      filename: './logs/exceptions.log',
    }),
  ],

  // log unhandled rejections.
  rejectionHandlers: [
    new winston.transports.File({
      filename: './logs/rejections.log',
    }),
  ],
});

if (process.env.NODE_ENV !== 'production') {
  logger.add(
    new winston.transports.Console({
      format: winston.format.simple(),
    }),
  );
}
module.exports = logger;
