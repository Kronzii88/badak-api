const dotenv = require("dotenv");
dotenv.config();

module.exports = {
  application: {
    port: process.env.APP_PORT,
    env: process.env.NODE_ENV,
  },
  mongo: {
    uri: process.env.MONGODB_URI,
    dbName: process.env.MONGODB_NAME,
    authSource: process.env.MONGODB_AUTHSOURCE,
  },
};
