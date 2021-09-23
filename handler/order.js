const { assert } = require("joi");
const serviceOrder = require("../service/order");

async function getAllOrder(req, res) {
  let data = await serviceOrder.getAll();
  if (!data) {
    res.status(404).json({
      message: "Data not found",
    });
  }
  res.status(200).json(data);
}

async function createOrder(req, res) {
  console.log(req.body);
}

module.exports = {
  getAllOrder,
  createOrder,
};
