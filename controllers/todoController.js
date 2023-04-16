const todo = require("../model/todo");
const todoController = {
  createTodo: (req, res) => {
    todo.create(); // not reaal crate
    res.status(201).send();
    
    
  }
}
module.exports = todoController;
