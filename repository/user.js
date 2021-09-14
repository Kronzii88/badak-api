const { userModel } = require("../datastore/mongo/model/badak");
const uuid = require("uuid");

function registerCustomer(data) {
  console.log(data);
  data["user_id"] = uuid.v4();
  data["user_type"] = "customer";
  return userModel.create(data);
}

function registerOrganizer(data) {
  console.log(data);
  data["user_id"] = uuid.v4();
  data["user_type"] = "organizer";
  return userModel.create(data);
}

function login(email) {
  return userModel.findOne({ email }).lean();
}

module.exports = {
  registerCustomer,
  registerOrganizer,
  login,
};
