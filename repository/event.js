const { eventModel } = require("../datastore/mongo/model/badak");
const uuid = require("uuid");

function save(data) {
  console.log(data);
  data["event_id"] = uuid.v4();
  data["event_status"] = "draft";
  data["ticketing.ticket_status"] = "on sale";
  return eventModel.create(data);
}

function findAll() {
  return eventModel.find();
}

function findPublished() {
  return eventModel.find({
    event_status: "published",
  });
}

function findDrafted() {
  return eventModel.find({
    event_status: "draft",
  });
}

module.exports = {
  save,
  findAll,
  findPublished,
  findDrafted,
};
