const { func } = require("joi");
const { orderModel } = require("../datastore/mongo/model/badak");

function save(data) {}

function findAll() {
  return orderModel.find();
}

module.exports = {
  save,
  findAll,
};
