const dotenv = require("dotenv");
dotenv.config();

module.exports = {
  application: {
    port: process.env.PORT,
    env: process.env.NODE_ENV,
  },
  mongo: {
    uri: process.env.MONGODB_URI,
    authSource: process.env.MONGODB_AUTHSOURCE,
  },
};
