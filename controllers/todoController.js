const todo = require("../model/todo");
const newTodo=require("../tests/mock-data/newTodo.json");

const todoController = {
  createTodo: (req, res) => {
    todo.create(); // not reaal crate
    res.status(201).json(newTodo)
  }
}
module.exports = todoController;
