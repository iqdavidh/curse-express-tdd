const todo = require("../model/todo");
const newTodo=require("../tests/mock-data/newTodo.json");


const todoController = {
  createTodo: (req, res) => {
     if(!req.body){
       throw new  Error("body not found");
     }
    todo.create(req.body); // not reaal crate
    res.status(201).json(newTodo)
  },
  getTodo: (req, res) => {
    todo.create(); // not reaal crate
    const allTodo=todo.get();
    res.status(200).json(allTodo)
  }
}
module.exports = todoController;
