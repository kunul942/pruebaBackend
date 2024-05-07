


import express, { Application } from 'express';
import cors from 'cors';


import userRoute from '../routes/usuario';


export class Server {

  private app: Application;
  private port: string;
  private apiPaths = {
    usuarios: '/api/usuarios'
  }

  constructor() {
    this.app = express();
    this.port = process.env.PORT || '4000';
    this.apiPaths

    //*Methods
    this.middlewares()
    this.routes()
  }


  middlewares() {
    this.app.use(cors())
    this.app.use(express.json())
    this.app.use(express.static('public'))
  }

  routes() {
    this.app.use(this.apiPaths.usuarios, userRoute);
  }


  listen() {
    this.app.listen(this.port, () => {
      console.log('Server on port', this.port);
    });
  }




}



export default Server