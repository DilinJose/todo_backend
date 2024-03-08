//depandency
const express = require("express");

const cors = require("cors");

//import
const dbConnection = require("./dbConnection/dbConnection");
const Todo = require("./models/todoModel");
const {
  fetchTodo,
  fetchTodos,
  createTodo,
  updateTodo,
  deleteTodo,
} = require("./todoController/todoController");

//create express app
const app = express();

//config express app
app.use(express.json());
app.use(cors());

//database connection
dbConnection();

app.get("/todo", fetchTodos);

app.get("/todo/:id", fetchTodo);

app.post("/todo", createTodo);

app.put("/todo/:id", updateTodo);

app.delete("/todo/:id", deleteTodo);

app.listen(8050, () => {
  console.log("Server is running on port 8050");
});
