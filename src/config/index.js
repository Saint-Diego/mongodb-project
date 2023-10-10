module.exports = {
  host: process.env.HOST || "localhost",
  port: process.env.PORT || 3000,
  mongo_uri: process.env.MONGO_URI || "mongodb://127.0.0.1:27017",
  mongo_db_name: process.env.MONGO_DB_NAME || "db_task_list",
  mongo_collection: process.env.MONGO_COLLECTION || "tasks",
};
