import dotenv from 'dotenv';
import path from 'path';
const envFilePath = path.resolve(__dirname, '../../.env.example');
const config = dotenv.config({ path: envFilePath }); // to capture LOGGING_LEVEL from envs and all other configs

import { debug, info, warn } from '../log';
debug(`envFilePath ==> ${envFilePath}`);
if (config.error) {
  warn('could not find configurations from local file. Please make sure to passed them as env vars');
} else {
  info(`loaded configs from .env file`);
}
