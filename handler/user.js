const serviceUser = require("../service/user");
// const bcrypt = require('bcrypt');

/**
 *
 * @param {*} req
 * @param {*} res
 *
 * for registering the user
 */
async function register(req, res) {
  const { username, email, password } = req.body;

  if (!username || typeof username !== "string") {
    return res.status(400).jso({
      message: "Invalid username",
    });
  }

  if (!email || typeof email !== "string") {
    return res.status(400).jso({
      message: "Invalid email",
    });
  }

  if (!password || typeof password !== "string") {
    return res.status(400).jso({
      message: "Invalid password",
    });
  }

  console.log(req.body);

  let data = await serviceUser.register(req.body);
  res.status(200).json(data);
}

module.exports = {
  register,
};
