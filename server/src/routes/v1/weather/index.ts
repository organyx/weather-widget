import express from 'express';

import initWeatherRouter from './weather.router';

const router = express.Router();

initWeatherRouter(router);

export default router;
