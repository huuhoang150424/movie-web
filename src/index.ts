import express from 'express';
import cors from 'cors';
import body_parser from 'body-parser';
import morgan from 'morgan';
import { db } from './config/database';
import { swaggerDoc } from './api_doc/swagger';
import swaggerUi from "swagger-ui-express";



const app = express();
const port = 3000;

app.use(
  cors({
    origin: '*',
  }),
);
app.use(body_parser.json({ limit: '50mb' }));
app.use(morgan('combined'));


app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDoc))

app.listen(port,  () => {
  console.log(`Server đang chạy tại: http://localhost:${port}`);
});
