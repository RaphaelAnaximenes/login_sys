import express from "express";
import { loginController } from "./controllers/loginController";
import { requestLogger } from "./middlewares/requestLogger";
import { notFoundException } from "./middlewares/notFoundException";

const app = express();
app.use(express.json());


app.get("/login", loginController);
app.post("/login", loginController);

app.use(requestLogger)
app.use(notFoundException)

export default app;
