import express from 'express';

import initStaticWeatherRouter from './weather.router';

const router = express.Router();

initStaticWeatherRouter(router);

export default router;
