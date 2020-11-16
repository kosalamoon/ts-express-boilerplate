import app from './app';
import { info } from './log';

const port = process.env.API_PORT || 3000;
const apiName = process.env.API_NAME || 'ts-express-boilerplate';
const env = process.env.API_ENV || 'local';

app.listen(+port, async () => {
  info(`${apiName} server started with the port ${port} in ${env} environment`);
});
