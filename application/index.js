const express = require("express");
const app = express();
const config = require("./config");
const morgan = require("morgan");
const mongoDB = require("../datastore/mongo/client");

const apiRoutes = require("../route/api");

async function start() {
  //connecting to mongoDB
  await mongoDB
    .createClient()
    .then(() => {
      console.log("Datastore => mongoDB connected");
    })
    .catch((error) => {
      console.log(error);
    });

  // body parser data
  app.use(express.json("*/*"));

  // logging api
  if (config.application.env == "production") app.use(morgan("common"));
  else {
    app.use(morgan("dev"));
  }

  // routing
  app.use("/api/v1", apiRoutes);

  //listening server port
  app.listen(config.application.port, () => {
    console.log("Application running on port: ", config.application.port);
  });
}

async function stop() {
  await mongoDB.close().then(() => {
    console.log("Datastore => database disconnected");
  });
  process.exit(1);
}

module.exports = {
  start,
  stop,
};
