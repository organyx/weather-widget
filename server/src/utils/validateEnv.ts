import dotenv from 'dotenv-flow';
import { cleanEnv, port, str } from 'envalid';

const envFound = dotenv.config();
if (envFound.error) {
  throw new Error("Couldn't find .env file");
}

const env = cleanEnv(process.env, {
  PORT: port(),
  NODE_ENV: str(),
  WEATHER_API_KEY: str()
});

export default env;
