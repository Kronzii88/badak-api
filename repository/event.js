const { eventModel } = require("../datastore/mongo/model/badak");
const uuid = require("uuid");

function save(data) {
  console.log(data);
  data["event_id"] = uuid.v4();
  data["event_status"] = "draft";
  // data["ticketing.ticket_status"] = "on sale";
  return eventModel.create(data);
}

async function publishEvent(data) {
  const newData = await eventModel.findOne({ event_id: data.event_id });
  if (!newData) return null;

  newData.event_status = "published";

  return newData.save();
}

function findAll() {
  return eventModel.find();
}

function findPublished() {
  return eventModel
    .find({
      event_status: "published",
    })
    .exec();
}

function findDrafted() {
  return eventModel
    .find({
      event_status: "draft",
    })
    .exec();
}

function findById(event_id) {
  return eventModel.findOne({ event_id });
}

// console.log(findAll());
module.exports = {
  save,
  findAll,
  findPublished,
  findDrafted,
  findById,
  publishEvent,
};
