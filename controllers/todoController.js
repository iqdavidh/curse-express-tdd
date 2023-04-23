const todo = require("../model/todo");
const newTodo = require("../tests/mock-data/newTodo.json");


const todoController = {
  createTodo: (req, res, next) => {
    try{
      const isValid = req?.body?.title && req?.body?.done !== undefined;
      if (!isValid) {
        throw new Error("body not found");
      }
      todo.create(req.body); // not reaal crate
      res.status(201).json(newTodo)
    }catch (error){
      next(error);
    }
    
  
  },
  getTodo: (req, res,next) => {
    try {
      todo.create(); // not reaal crate
      const allTodo = todo.get();
      res.status(200).json(allTodo)
    }catch (error){
      next(error)
    }
   
  }
}
module.exports = todoController;
