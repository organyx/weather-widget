import express from 'express';
import CONFIG from 'config';
import initializeRouter from 'routes/router';
import cors from 'cors';
// import { getRootRelativePath } from 'utils/rootRelativePath';

const app = express();

const start = async () => {
  try {
    initializeApp(app);
    initializeRouter(app);

    app.listen(CONFIG.port, () => {
      console.log(`Server started on port ${CONFIG.port}`);
    });

    process.on('uncaughtException', err => {
      console.log(err);
      process.exit(1);
    });
  } catch (err) {
    console.log(err);
  }
};

const initializeApp = (app: express.Application) => {
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
  app.use(cors());
  // app.set('view engine', 'ejs');
  // app.use(express.static(getRootRelativePath('public')));
  // app.set('public', getRootRelativePath('public'));
};

start();
