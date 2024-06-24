import sequelize from "../models/connect.js";
import initModels from "../models/init-models.js";

let model = initModels(sequelize);

const getFood = async (req, res) => {
  let data = await model.food.findOne({
    where: {
      food_id: 2,
    },
    include: ["type"],
  });
  let data1 = await model.food.findByPk(2);
  res.send(data);
};

export { getFood };
