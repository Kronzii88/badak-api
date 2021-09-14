const repositoryEvent = require("../repository/event");

async function create(data) {
  let newData = await repositoryEvent.save(data);
  return newData;
}

async function getAll() {
  let data = await repositoryEvent.findAll();
  return data;
}

async function getPublished() {
  let data = await repositoryEvent.findPublished();
  return data;
}

async function getDrafted() {
  let data = await repositoryEvent.findDrafted();
  return data;
}

module.exports = {
  create,
  getAll,
  getPublished,
  getDrafted,
};
