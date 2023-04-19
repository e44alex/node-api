import express from "express";
import path from "path";
import cookieParser from "cookie-parser"
import logger from "morgan";
import swaggerUi from "swagger-ui-express";

import echo from './routes/echo';
import * as fs from "fs";

const app = express();
// @ts-ignore
const swaggerFile = JSON.parse(fs.readFileSync('./swagger/output.json'))

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/swagger', swaggerUi.serve, swaggerUi.setup(swaggerFile))

app.use('/echo', echo)

export default app;
