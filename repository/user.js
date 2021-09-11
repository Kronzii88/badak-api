const { userModel } = require("../datastore/mongo/model/badak");
const uuid = require("uuid");

function register(data) {
  console.log(data);
  data["user_id"] = uuid.v4();
  data["user_type"] = "customer";
  return userModel.create(data);
}

module.exports = {
  register,
};
