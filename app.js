const express = require("express");
const app = express();
const todoRoutes = require("./routes/todoRoutes");


app.use("/todos", todoRoutes);
app.get("/", (req, res) => {
  res.json("Hello world!");
});

app.listen(3000, () => {
  console.log("Server is now running!");
});


module.exports=app;