import { describe, it, expect, vi, afterEach, beforeAll } from 'vitest';
// import vi from 'vitest/lib/vitest';
import { getWeather } from './weather.service';

beforeAll(() => {
  vi.mock('config', () => {
    return {
      default: {
        weatherApiKey: '123'
      }
    };
  });
  vi.mock('utils/kelvinToCelsius', () => {
    return {
      kelvinToCelsius: (kelvin: number) => {
        return kelvin - 273.15;
      }
    };
  });
  vi.mock('utils/degreesToDirection', () => {
    return {
      degreesToDirection: (degrees: number) => {
        return 'S';
      }
    };
  });
});

afterEach(() => {
  vi.clearAllMocks();
  vi.resetAllMocks();
  vi.restoreAllMocks();
});
// vi.mock('node-fetch', () => {
//   return {
//     default: () => {
//       return {
//         json: () => {
//           return {
//             name: 'Copenhagen',
//             main: {
//               temp: 279.15,
//               humidity: 87
//             },
//             wind: {
//               speed: 5.1,
//               deg: 180
//             }
//           };
//         }
//       };
//     }
//   };
// });

describe('Weather service', () => {
  it('should return default weather data', async () => {
    vi.mock('node-fetch', () => {
      return {
        default: () => {
          return {
            json: () => {
              return {
                name: 'Copenhagen',
                main: {
                  temp: 279.15,
                  humidity: 87
                },
                wind: {
                  speed: 5.1,
                  deg: 180
                }
              };
            }
          };
        }
      };
    });

    const weatherData = await getWeather();
    expect(weatherData).toEqual({
      city: 'Copenhagen',
      humidity: 87,
      temperature: 6,
      wind: {
        direction: 'S',
        speed: 5.1
      }
    });
  });
});
