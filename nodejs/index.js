const express = require("express");
const path = require("node:path");

const app = express();

function upper(req, res, next) {
  const originalSend = res.send.bind(res);

  res.send = (body) => {
    originalSend(typeof body === "string" ? body.toUpperCase() : body);
  };
  next();
}

function middle(req, res, next) {
  console.log(`Middle middleware handled ${req.method} ${req.path}`);
  next();
}

function lower(req, res, next) {
  res.send("This response was finished by the lower middleware.");
}

app.use(express.static(path.join(__dirname, "public")));

app.get("/upper", upper, (req, res) => {
  res.send("This text is converted to uppercase by the upper middleware.");
});

app.get("/middle", middle, (req, res) => {
  res.send("This route is handled after the middle middleware.");
});

app.get("/lower", lower);

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});
app.post("/", (req, res) => {
  res.send("Welcome to post request in  express js");
});
app.put("/", (req, res) => {
  res.send("Welcome to put request in  express js");
});
app.delete("/", (req, res) => {
  res.send("Welcome to delete request in  express js");
});

app.listen(3000, (error) => {
  if (error) {
    console.log(error.message);
  }
  console.log("Running express on http://127.0.0.1:3000");
});