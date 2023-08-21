import { Router } from 'express';
import { getStaticWeatherHandler } from 'controllers/v1/static';
import validate from 'middleware/validate';
import { citySchema } from 'validation-schemas/cityName.schema';

export default function initialize(router: Router) {
  router.get('/', validate(citySchema), getStaticWeatherHandler);
}
