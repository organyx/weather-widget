export async function getWeather(query: string) {
  const weatherData = await fetch(`http://localhost:5174/api/v1/weather${query ? `?city=${query}` : ''}`);
  return weatherData;
}