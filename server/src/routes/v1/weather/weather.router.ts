import { Router } from 'express';
import { getWeatherHandler } from 'controllers/v1/weather';
import validate from 'middleware/validate';
import { citySchema } from 'validation-schemas/cityName.schema';

export default function initialize(router: Router) {
  router.get('/', validate(citySchema), getWeatherHandler);
}
