import express from "express";
import foodRouter from "./foodRouter.js";
import userRouter from "./userRouter.js";

const rootRouter = express.Router();

rootRouter.use("/food", foodRouter);

rootRouter.use("/user", userRouter);

export default rootRouter;

//yarn sequelize-auto -h localhost -d food_app -u root -x 20102002 -p 3307 --dialect mysql -o ./src/models -l esm
