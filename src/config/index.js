module.exports = {
  host: process.env.HOST || "localhost",
  port: process.env.PORT || 3000,
  mongo_uri: process.env.MONGO_URI || "mongodb+srv://saint-diego:diego89@cluster0.yvshasw.mongodb.net/",
  mongo_db_name: process.env.MONGO_DB_NAME || "db_task_list",
};
