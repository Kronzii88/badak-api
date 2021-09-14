const repositoryUser = require("../repository/user");

async function registerCustomer(data) {
  let newData = await repositoryUser.registerCustomer(data);
  return newData;
}

async function registerOrganizer(data) {
  let newData = await repositoryUser.registerOrganizer(data);
  return newData;
}

async function login(email) {
  let data = await repositoryUser.login(email);
  return data;
}

module.exports = {
  registerCustomer,
  registerOrganizer,
  login,
};
