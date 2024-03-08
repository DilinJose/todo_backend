const Todo = require("../models/todoModel");

const fetchTodos = async (req, res) => {
  const todo = await Todo.find();

  res.json({ todo });
};

const fetchTodo = async (req, res) => {
  const { id } = req.params;

  const todo = await Todo.findById(id);

  res.json({ todo });
};

const updateTodo = async (req, res) => {
  const { id } = req.params;

  const { title, desc } = req.body;

  await Todo.findByIdAndUpdate(id, { title, desc });

  const todo = await Todo.findById(id);

  res.json({ todo });
};

const createTodo = async (req, res) => {
  const { title, desc } = req.body;

  const todo = await Todo.create({
    title,
    desc,
  });

  res.json({ todo });
};

const deleteTodo = async (req, res) => {
  const { id } = req.params;

  const todo = await Todo.deleteOne({ _id: id });

  res.json({ todo });
};

module.exports = {
  fetchTodos,
  fetchTodo,
  createTodo,
  updateTodo,
  deleteTodo,
};
