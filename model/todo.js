const allTodo=require("../tests/mock-data/allTodo.json");
const todo = {
  create: () => {
 
  },
  get:()=>{
    return allTodo;
  }
}

module.exports = todo;