const todoController = require("../../controllers/todoController");
const todoModel = require("../../model/todo");
const httpMocks=require("node-mocks-http");
const newTodo=require("../mock-data/newTodo.json")

todoModel.create = jest.fn();

let req, res;
beforeEach(()=>{
  req=httpMocks.createRequest();
  res= httpMocks.createResponse()
})
describe("TodoController.createTodo", () => {
  it("should have a createTodo function", () => {
    expect(typeof todoController.createTodo).toBe("function");
  });
  
  it("should call todoModel create", () => {
    todoController.createTodo(req, res);
    expect(todoModel.create).toBeCalled();
  });
  
  it("should return  201 response code", () => {
    req.body=newTodo;
    todoController.createTodo(req, res);
    expect(res.statusCode).toBe(201);
  });
});