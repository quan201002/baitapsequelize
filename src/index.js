import express from "express";
const app = express();

app.listen(8080);

app.use(express.json());

import rootRouter from "./routes/rootRouter.js";

app.use(rootRouter);
