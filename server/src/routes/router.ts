import express from 'express';
import CONFIG from 'config';
import { StatusCodes } from 'http-status-codes';

import weatherRouter from './v1/weather';
// import staticRouter from './v1/static';

export default function initializeRouter(app: express.Application) {
  app.get('/', (req, res) => {
    res.json({ message: 'Ok', uptime: process.uptime(), date: new Date() });
  });

  app.use(`${CONFIG.api.prefix}/v1/weather`, weatherRouter);

  // app.use('/', staticRouter);

  app.use((err: Error, req: express.Request, res: express.Response, next: express.NextFunction) => {
    next(err);
  });

  app.use((err: Error, req: express.Request, res: express.Response, next: express.NextFunction) => {
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ error: err, stack: err?.stack });
  });
}
