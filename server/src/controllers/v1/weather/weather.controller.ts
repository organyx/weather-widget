import { NextFunction, Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import { getWeather } from 'services/weather.service';

const getWeatherHandler = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { city } = req.query as { city: string };
    const weather = await getWeather(city);
    if (weather instanceof Error) {
      throw weather;
    }
    res.status(StatusCodes.OK).json(weather);
  } catch (error) {
    next(error);
  }
};

export { getWeatherHandler };
