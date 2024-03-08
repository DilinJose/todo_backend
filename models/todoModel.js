const mongoose = require("mongoose");

const todoSchema = new mongoose.Schema({
  title: String,
  desc: String,
});
const todo = mongoose.model("todo", todoSchema);

module.exports = todo;
