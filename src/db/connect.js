const mongoose = require("mongoose");
let connectionString = process.env.MONGODB_URI;

connectionString = connectionString.replace(
  "password",
  process.env.MONGODB_PASSWORD
);
connectionString = connectionString.replace(
  "user_name",
  process.env.MONGODB_USERNAME
);

const connect = async () => {
  try {
    await mongoose.connect(connectionString, {
      dbName: process.env.MONGODB_DBNAME,
    });
    console.log("Connected to MongoDB Via Docker");
  } catch (error) {
    console.log(error);
  }
};

module.exports = { connect };
