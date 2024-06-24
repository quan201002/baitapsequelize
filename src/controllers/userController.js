import { where } from "sequelize";
import sequelize from "../models/connect.js";
import initModels from "../models/init-models.js";

let model = initModels(sequelize);

const likeRestaurant = async (req, res) => {
  let { user_id, res_id } = req.body;
  let date_like = new Date();
  await model.like_res.create({
    user_id,
    res_id,
    date_like,
  });
  res.status(200).send("liked");
};

const unlikeRestaurant = async (req, res) => {
  let { like_id } = req.body;
  await model.like_res.destroy({
    where: {
      like_id,
    },
  });
  res.status(200).send("unliked");
};

const getLikeList = async (req, res) => {
  let likeList = await model.like_res.findAll({
    attributes: [
      ["user_id", "user"],
      ["res_id", "restaurant"],
    ],
  });
  res.send(likeList);
};

const addRate = async (req, res) => {
  let date_rate = new Date();
  let { user_id, res_id, amount } = req.body;
  await model.rate_res.create({
    user_id,
    res_id,
    amount,
    date_rate,
  });
  res.send("rated");
};

const getRateList = async (req, res) => {
  let rateList = await model.rate_res.findAll({
    attributes: [
      ["user_id", "user"],
      ["res_id", "restaurant"],
    ],
  });
  res.send(rateList);
};

const createOrder = async (req, res) => {
  let { user_id, food_id, amount, code, arr_sub_id } = req.body;
  await model.orders.create({
    user_id,
    food_id,
    amount,
    code,
    arr_sub_id,
  });
  let date = new Date();
  res.send("successfully order date:" + date);
};

export {
  likeRestaurant,
  unlikeRestaurant,
  getLikeList,
  addRate,
  getRateList,
  createOrder,
};
