const express = require("express");
const path = require("node:path");


const app = express();
const router = express.Router();

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

router.use(express.static(path.join(__dirname, "public")));

router.get("/upper", upper, (req, res) => {
  res.send("This text is converted to uppercase by the upper middleware.");
});

router.get("/middle", middle, (req, res) => {
  res.send("This route is handled after the middle middleware.");
});

router.get("/lower", lower);

router.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});
router.post("/", (req, res) => {
  res.send("Welcome to post request in  express js");
});
router.put("/", (req, res) => {
  res.send("Welcome to put request in  express js");
});
router.delete("/", (req, res) => {
  res.send("Welcome to delete request in  express js");
});

module.exports = router;
