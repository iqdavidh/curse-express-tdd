const todoController = require("../../controllers/todoController");
const todoModel = require("../../model/todo");
const httpMocks=require("node-mocks-http");

todoModel.get = jest.fn();

let req, res;
beforeEach(()=>{
  req=httpMocks.createRequest();
  res= httpMocks.createResponse()
})
describe("TodoController.get", () => {
  it("should have a createTodo function", () => {
    expect(typeof todoController.getTodo).toBe("function");
  });
  
  it("should call todoModel create", () => {
    todoController.getTodo(req, res);
    expect(todoModel.get).toBeCalled();
  });
  
  it("should return  20 response code", () => {
    todoController.getTodo(req, res);
    expect(res.statusCode).toBe(200);
    
  });
  
  
});
