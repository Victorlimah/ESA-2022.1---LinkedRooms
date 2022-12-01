import express, { json } from "express";
import "express-async-errors";

import cors from "cors";
import dotenv from "dotenv";

import routes from "./routes/index.js";
import { errorHandler } from "./middlewares/errorHandler.js";

const app = express();
dotenv.config();

app.use(json());
app.use(cors());

app.use(routes);

app.use(errorHandler);

export default app;
