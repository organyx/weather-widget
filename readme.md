# Weather Widget

## Client

Project started using vite starter.

Packages used:

- [axios](https://www.npmjs.com/package/axios)
- [bootstrap](https://www.npmjs.com/package/bootstrap)
- [react-bootstrap](https://www.npmjs.com/package/react-bootstrap)
- [react-router-dom](https://www.npmjs.com/package/react-router-dom)

## Server

Project is a simple NodeJs project

Packages used:

- [dotenv-flow](https://www.npmjs.com/package/dotenv-flow)
- [envalid](https://www.npmjs.com/package/envalid)
- [http-status-codes](https://www.npmjs.com/package/http-status-codes)
- [node-fetch](https://www.npmjs.com/package/node-fetch)
- [zod](https://www.npmjs.com/package/zod)
- [vitest](https://www.npmjs.com/package/vitest)

## Running the project

### Environment variables

  Create .env file in `/server` folder

  ```bash
    PORT=3000
    NODE_ENV=development
    WEATHER_API_KEY=YOUR-API-KEY
  ```

### With Docker

In the project directory run `docker compose up -d`

### Standalone

#### 1. Server

1. Start a new terminal
2. Navigate to `/server`
3. Run `pnpm run dev`

#### 2. Client

1. Start a new terminal
2. Navigate to `/client`
3. Run `pnpm run dev`
