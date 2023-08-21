import './App.css'
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Badge from 'react-bootstrap/Badge';
import { LoaderFunctionArgs, useLoaderData, useSubmit } from 'react-router-dom';
import { useEffect } from 'react';
import { getWeather } from './utils/weather';

type WeatherData = {
  weatherData: {
    city: string;
    temperature: number;
    humidity: number;
    wind: {
      speed: number;
      direction: string;
    }
    error?: string;
  },
  city: string;
}

function App() {
  const { weatherData, city } = useLoaderData() as WeatherData;
  const submit = useSubmit();

  useEffect(() => {
    if (!weatherData.error)
      (document.getElementById("city") as HTMLFormElement).value = city;
  }, [city, weatherData.error]);

  return (
    <>
      <div className="widget" style={{ margin: '10px', width: '300px' }}>
        <div className="panel panel-info">
          <div className="panel-heading">Weather in <b>{city}</b></div>
          {!weatherData.error && <ListGroup>
            <ListGroup.Item>Temperature: <b>{weatherData.temperature} °C</b></ListGroup.Item>
            <ListGroup.Item>Humidity: <b>{weatherData.humidity}</b></ListGroup.Item>
            <ListGroup.Item>Wind: <b>{weatherData.wind.speed} m/s {weatherData.wind.direction}</b></ListGroup.Item>
            <ListGroup.Item>
              <Form id='weather-form' role='form' onChange={(event) => {
                const isFirstSearch = city === null;
                submit(event.currentTarget.form, {
                  replace: !isFirstSearch,
                });
              }}>
                <Form.Group controlId="city" >
                  <Form.Control type="text" placeholder="City" defaultValue={city} name='city' />
                </Form.Group>
                <Button variant="primary" type="submit">
                  Search
                </Button>
              </Form>
            </ListGroup.Item>
          </ListGroup>}

          {weatherData.error &&
            <Badge bg="danger">{weatherData.error}</Badge>}

        </div>
      </div>
    </>
  )
}

export async function loader({ request }: LoaderFunctionArgs) {
  const url = new URL(request.url);
  let city = url.searchParams.get("city");
  if (!city) {
    city = 'Copenhagen';
  }
  const cityWeather = await getWeather(city);
  const weatherData = await cityWeather.json();
  return { weatherData, city };
}

export default App
