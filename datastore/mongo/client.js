const mongoose = require("mongoose");
const config = require("../../application/config");

function createClient() {
  return mongoose.connect(`${config.mongo.uri}/${config.mongo.dbName}`, {
    authSource: config.mongo.authSource,
    useNewUrlParser: true,
    useUnifiedTopology: true,
    autoCreate: true,
  });
}

function close() {
  return mongoose.disconnect();
}

module.exports = {
  createClient,
  close,
};
