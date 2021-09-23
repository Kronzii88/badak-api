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

async function updateOrganizer(data) {
  let newData = await userModel.findOne({ user_id: data.user_id });
  if (!newData) return null;

  newData["organizer"] = {
    organization_name: data.organization_name,
    logo: data.logo,
    organization_address: data.organization_address,
    organization_phone: data.organization_phone,
  };

  // console.log(newData);
  // console.log(newData);
  return newData.save();
}

module.exports = {
  registerCustomer,
  registerOrganizer,
  login,
  updateOrganizer,
};
