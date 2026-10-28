const express = require("express");
const app = express();

app.use(express.urlencoded({extended:true}))
app.use(express.json())
const logger = (req, res, next) => {
    console.log(`You accessed Method: ${req.method} URL: ${req.url} at ${new Date().toISOString()}`);
    next();
}

app.get("/", (req, res)=>{
    res.send("Welcome to node js!")
})

app.get("/product", (req, res)=>{
    const {pid, pname} = req.query;
    res.status(200).json({pid, pname})
})

const PORT = 8080;

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});