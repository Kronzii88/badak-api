const repositoryOrder = require("../repository/order");

async function getAll() {
  let data = await repositoryOrder.findAll();
  return data;
}

async function create(data) {
  let newData = await repositoryOrder.save(data);
  return newData;
}

module.exports = {
  getAll,
  create,
};
