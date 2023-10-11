require("dotenv").config();
const mongoose = require("mongoose");
const { mongo_uri, mongo_db_name } = require("./config/index");

mongoose.connect(`${mongo_uri}${mongo_db_name}`);
const database = mongoose.connection;

database.on("error", (error) => {
  console.log(error);
});

database.once("connected", () => {
  console.log("Database connected");
});
