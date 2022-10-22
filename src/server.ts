import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import { UserRouter } from './router/user.router';

class server {
  public app: express.Application = express();
  private port: number = Number(process.env.PORT) || 3000;

  constructor() {
    this.app.use(express.json());
    this.app.use(express.urlencoded({extended: true}));
    this.app.use(morgan('dev'));
    this.app.use(cors());

    /* Router */
    this.app.use('/auth', this.routers())
    this.listen();
  }

  routers(): Array<express.Router> {
    return[new UserRouter().router];
  }

  public listen() {
    this.app.listen(this.port, () => {
      console.log(`server run en http://localhost:`+this.port);
    });
  }
}

new server();