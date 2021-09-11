const config = require("./application/config");
const app = require("./application/index");

app.start();

process.on("SIGINT", async () => {
  await app.stop();
});
