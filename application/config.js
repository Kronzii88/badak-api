const dotenv = require("dotenv");
dotenv.config();

module.exports = {
  application: {
    port: process.env.PORT,
    env: process.env.NODE_ENV,
  },
  mongo: {
    uri: process.env.MONGODB_CONNECTION_STRING,
    authSource: process.env.MONGODB_AUTHSOURCE,
  },
};
