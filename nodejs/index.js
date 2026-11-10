const express = require("express");
const path = require("node:path");
const app = express();
const router = require("./routes/myroutes.js");
app.use("/", router);




app.listen(3001, (error) => {
  if (error) {
    console.log(error.message);
  }
  console.log("Running express on http://127.0.0.1:3001");
});