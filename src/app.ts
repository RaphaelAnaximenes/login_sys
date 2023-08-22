import express from "express";
import * as controllers from './controllers/';
import * as middlewares from './middlewares/';

const app = express();
app.use(express.json());
app.use(middlewares.requestLogger)


app.get("/login", controllers.loginController);
app.post("/login", controllers.loginController);

app.use(middlewares.notFoundException)

export default app;
