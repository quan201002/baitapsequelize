import express from "express";
import {
  addRate,
  createOrder,
  getLikeList,
  getRateList,
  likeRestaurant,
  unlikeRestaurant,
} from "../controllers/userController.js";

const userRouter = express.Router();
userRouter.post("/unlike", unlikeRestaurant);
userRouter.post("/like", likeRestaurant);
userRouter.get("/like-list", getLikeList);
userRouter.post("/add-rate", addRate);
userRouter.get("/rate-list", getRateList);
userRouter.post("/order", createOrder);

export default userRouter;
