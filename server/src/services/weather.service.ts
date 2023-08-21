import fetch from 'node-fetch';
import CONFIG from 'config';
import { kelvinToCelsius } from 'utils/kelvinToCelsius';
import { degreesToDirection } from 'utils/degreesToDirection';

const getWeather = async (city: string = 'Copenhagen') => {
  try {
    const weather = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city},dk&appid=${CONFIG.weatherApiKey}`
    );

    const weatherData = await weather.json();

    if (weatherData.cod === '404') {
      return { requiredData: null, error: weatherData.message };
    }

    const requiredData = {
      city: weatherData.name,
      temperature: kelvinToCelsius(weatherData.main.temp),
      humidity: weatherData.main.humidity,
      wind: {
        speed: weatherData.wind.speed,
        direction: degreesToDirection(weatherData.wind.deg)
      }
    };

    return requiredData;
  } catch (error) {
    return error;
  }
};

// const getStaticWeather = async (city: string = 'Copenhagen') => {
//   try {
//     const weather = await fetch(
//       `https://api.openweathermap.org/data/2.5/weather?q=${city},dk&appid=${CONFIG.weatherApiKey}`
//     );

//     const weatherData = await weather.json();

//     const requiredData = {
//       city: weatherData.name,
//       temperature: kelvinToCelsius(weatherData.main.temp),
//       humidity: weatherData.main.humidity,
//       wind: {
//         speed: weatherData.wind.speed,
//         direction: degreesToDirection(weatherData.wind.deg)
//       }
//     };

//     const renderedHTML = `
//       <h1>Weather in ${requiredData.city}</h1>
//       <p>Temperature: ${requiredData.temperature}°C</p>
//       <p>Humidity: ${requiredData.humidity}%</p>
//       <p>Wind: ${requiredData.wind.speed} m/s ${requiredData.wind.direction}</p>
//     `;

//     return renderedHTML;
//   } catch (error) {
//     return error;
//   }
// };

export { getWeather };
