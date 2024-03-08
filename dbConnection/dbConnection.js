const mongoose = require("mongoose");

async function dbConnection() {
  try {
    await mongoose.connect("mongodb+srv://dilinjose:dilinjose@cluster0.alttykb.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0");
    console.log("Database Connected");
  } catch (err) {
    console.log("err :>> ", err);
  }
}

module.exports= dbConnection
