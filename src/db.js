require("dotenv").config();
const mongoose = require("mongoose");
const { mongo_uri } = require("./config/index");

const connectDB = async () => {
  try {
    await mongoose.connect(mongo_uri);
    console.log("Database connected");
    return mongoose.connection;
  } catch (error) {
    console.log(error);
  }
}

module.exports = connectDB;
