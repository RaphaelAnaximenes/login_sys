import express from "express";
import { loginController } from "./controllers/loginController";
import * as middlewares from './middlewares/';

const app = express();
app.use(express.json());
app.use(middlewares.requestLogger)


app.get("/login", loginController);
app.post("/login", loginController);

app.use(middlewares.notFoundException)

export default app;
