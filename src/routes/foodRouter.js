import express from "express";
import { getFood } from "../controllers/foodController.js";

const foodRouter = express.Router();
foodRouter.get("/get-food", getFood);

export default foodRouter;


