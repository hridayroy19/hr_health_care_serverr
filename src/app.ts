import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import router from './app/routes';
import globalErrorHandler from './app/middlewares/globalErrorHandler';
import { NotFoundPage } from './app/middlewares/not-found';
import cookieParser from "cookie-parser"


const app: Application = express();

//middleware
app.use(cors());
app.use(cookieParser())
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.get('/', (req: Request, res: Response) => {
    res.send({
        Message: "Ph health care server.."
    })
});


app.use('/api/v1', router);

app.use(globalErrorHandler)
app.use(NotFoundPage)

export default app;