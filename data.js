const mongoose = require("mongoose");

const dotenv = require("dotenv");
dotenv.config();

const connection = async () => {
  try {
    await mongoose.connect(process.env.MONGO_DB_URL);
    console.log("database is connected");
  } catch (error) {
    console.log("database is not established", error);
  }
};
module.exports = connection;
