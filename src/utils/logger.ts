// eslint-disable-next-line object-curly-newline
import { createLogger, transports, format } from 'winston';

// eslint-disable-next-line object-curly-newline
const { combine, timestamp, prettyPrint, splat, simple, printf } = format;

export default createLogger({
  // levels: config.syslog.levels,
  transports: [
    new transports.Console({
      level: 'debug',
      format: combine(splat(), simple()),
    }),
    new transports.File({
      level: 'debug',
      filename: 'logs/all-logs.log',
      format: combine(
        timestamp(),
        splat(),
        simple(),
        // eslint-disable-next-line arrow-body-style
        printf((info) => {
          return `${info.timestamp}: level:${info.level} message:${info.message}`;
        }),
      ),
    }),
    new transports.File({
      filename: 'logs/errors.log',
      level: 'error',
      format: combine(timestamp(), prettyPrint()),
    }),
  ],
});
