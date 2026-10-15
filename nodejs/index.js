const express = require("express");
const { error } = require("node:console");

const app = express();
app.get("/", (req, res)=>{
  res.send("Welcome to get request in express js")
})
app.post("/", (req, res)=>{
  res.send("Welcome to post request in  express js")
})
app.put("/", (req, res)=>{
  res.send("Welcome to put request in  express js")
})
app.delete("/", (req, res)=>{
  res.send("Welcome to delete request in  express js")
})



app.listen(3000, (error)=>{
  if(error){
    console.log(error.message)
  }
  console.log("Running express on http://127.0.0.1:3000")
})