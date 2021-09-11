const repositoryUser = require("../repository/user");

async function register(data) {
  let newData = await repositoryUser.register(data);
  return newData;
}

module.exports = {
  register,
};
