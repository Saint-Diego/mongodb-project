module.exports = {
  host: process.env.HOST || "localhost",
  port: process.env.PORT || 3000,
  mongo_uri: process.env.MONGO_URI || "mongodb+srv://saint-diego:diego89@cluster0.yvshasw.mongodb.net/db_tasks_list?retryWrites=true&w=majority",
};
