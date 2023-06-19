const express = require("express");
const mongoose = require("mongoose");
const app = express();
const port = 3000;
require("dotenv").config();

// Connect to MongoDB
mongoose.set("strictQuery", true);
const conectDB = async () => {
  try {
    await mongoose.connect(process.env.DB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      dbName: "vaccine",
    });
  } catch (error) {
    console.log("mongoconet faild : ", error);
  }
};
conectDB();

mongoose.connection.once("open", () => {
  console.log("connection open");
});

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
