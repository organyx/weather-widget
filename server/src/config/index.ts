import env from 'utils/validateEnv';

const CONFIG = {
  port: env.PORT,
  nodeEnv: env.NODE_ENV,
  weatherApiKey: env.WEATHER_API_KEY,
  api: {
    prefix: '/api'
  },
  isProduction: env.isProduction
};

export default CONFIG;
