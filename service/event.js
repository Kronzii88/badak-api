const repositoryEvent = require("../repository/event");

async function create(data) {
  let newData = await repositoryEvent.save(data);
  return newData;
}

async function publishEvent(data) {
  let newData = await repositoryEvent.publishEvent(data);
  return newData;
}

async function getAll() {
  let data = await repositoryEvent.findAll();
  return data;
}

async function getPublished() {
  await repositoryEvent.findPublished();
}

async function getDrafted() {
  let data = await repositoryEvent.findDrafted();
  return data;
}

async function getById(event_id) {
  let data = await repositoryEvent.findById(event_id);
  return data;
}

module.exports = {
  create,
  getAll,
  getPublished,
  getDrafted,
  getById,
  publishEvent,
};
