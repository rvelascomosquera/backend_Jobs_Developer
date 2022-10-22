import express from 'express';
import morgan from 'morgan';
import cors from 'cors';

class server {
  public app: express.Application = express();
  private port: number = 3000;

  constructor() {
    this.app.use(express.json());
    this.app.use(express.urlencoded({extended: true}));
    this.app.use(morgan('dev'));
    this.app.use(cors());

    this.app.get("/api", (req, res) => {
      res.status(200).json({
        message: "Estudiantes Larnu"
      });
    });
    this.listen();
  }

  public listen() {
    this.app.listen(this.port, () => {
      console.log(`server run en http://localhost:`+this.port);
    });
  }
}

new server();