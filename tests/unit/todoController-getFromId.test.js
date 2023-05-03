const todoController = require("../../controllers/todoController");
const todoModel = require("../../model/todo");
const httpMocks=require("node-mocks-http");



todoModel.getFromId = jest.fn();
todoModel.getFromId.mockReturnValue({id:1})

let req, res, next;
beforeEach(()=>{
  req=httpMocks.createRequest();
  res= httpMocks.createResponse();
  next= httpMocks.createResponse();
})
describe("TodoController.getFromID", () => {
  it("should have a getTodoFromId function", () => {
    expect(typeof todoController.getTodoFromId).toBe("function");
  });
  
  it("should call  getTodoFromId",  async() => {
    req.params.id=666;
    await todoController.getTodoFromId(req, res, next);
    expect(todoModel.getFromId).toBeCalledWith(req.params.id);
  });
  
  it("should return  200 response code", async() => {
    req.params.id=666;
    await todoController.getTodoFromId(req, res);
    expect(res.statusCode).toBe(200);
    
    const body=res._getJSONData();
    expect(body).toBeTruthy();
    
    
  });
  
  
});
