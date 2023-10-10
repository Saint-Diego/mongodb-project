require("dotenv").config();
const { MongoClient } = require("mongodb");
const { mongo_uri, mongo_db_name } = require("./config/index");

const client = new MongoClient(mongo_uri);

const conectDB = async () => {
  await client.connect();
  return client.db(mongo_db_name);
};

module.exports = conectDB;
