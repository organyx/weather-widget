import { NextFunction, Request, Response } from 'express';
import { getStaticWeather } from 'services/weather.service';

const getStaticWeatherHandler = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { city } = req.query as { city: string };
    const weather = await getStaticWeather(city);
    if (weather instanceof Error) {
      throw weather;
    }
    res.send(weather);
  } catch (error) {
    next(error);
  }
};

export { getStaticWeatherHandler };
