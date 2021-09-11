const repositoryUser = require("../repository/user");

async function register(data) {
  let newData = await repositoryUser.register(data);
  return newData;
}

async function login(email) {
  let data = await repositoryUser.login(email);
  return data;
}

module.exports = {
  register,
  login,
};
