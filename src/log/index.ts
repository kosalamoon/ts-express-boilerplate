import { createLogger, format, transports } from 'winston';
import 'winston-daily-rotate-file';
import prettyFormat from 'pretty-format';

const customFormat = format.combine(
  format.timestamp(),
  format.printf(({ level, message, timestamp }) => {
    return `[${timestamp}][${level}]: ${message}`;
  }),
);

const level = process.env.LOGGING_LEVEL || 'info';

const Log = createLogger({
  level,
  exitOnError: false,
  transports: [
    new transports.Console({ format: format.combine(format.colorize(), customFormat) }),
    new transports.DailyRotateFile({
      frequency: '1d',
      datePattern: 'YYYY-MM-DD',
      filename: '%DATE%.log',
      dirname: `${__dirname}/logs`,
      zippedArchive: true,
      format: customFormat,
    }),
  ],
});

// eslint-disable-next-line @typescript-eslint/ban-types
export const info = (message: string | any): void => {
  if (typeof message === 'string') {
    Log.info(message);
  } else {
    message = prettyFormat(message);
    Log.info(message);
  }
};

// eslint-disable-next-line @typescript-eslint/ban-types
export const error = (message: string | any): void => {
  if (typeof message === 'string') {
    Log.error(message);
  } else {
    message = prettyFormat(message);
    Log.error(message);
  }
};

// eslint-disable-next-line @typescript-eslint/ban-types
export const debug = (message: string | any): void => {
  if (typeof message === 'string') {
    Log.debug(message);
  } else {
    message = prettyFormat(message);
    Log.debug(message);
  }
};

// eslint-disable-next-line @typescript-eslint/ban-types
export const warn = (message: string | any): void => {
  if (typeof message === 'string') {
    Log.warn(message);
  } else {
    message = prettyFormat(message);
    Log.warn(message);
  }
};

export const multipleArgs = (...params: any[]): void => {
  let message = '';
  for (let param of params) {
    if (typeof param === 'string') {
      message = `${message} ${param}\n`;
    } else {
      param = prettyFormat(param);
      message = `${message} ${param}\n`;
    }
  }
  Log.info(message);
};

export default Log;
