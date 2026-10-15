const http = require("http");
const fs = require("fs");
const path = require("path");
const { error } = require("console");

const main = (req, res) => {
  const urlPath = new URL(req.url, `http://${req.headers.host}`);
  const pathname = urlPath.pathname;
  const filename = urlPath.searchParams.get("fname");
  const content = urlPath.searchParams.get("content");
  const filDir = path.join(__dirname, "/files");
  if (!filename) {
    res.writeHead(400);
    return res.end("File name not pass!");
  }
  const filePath = path.join(filDir, filename);

  if (pathname === "/read" && req.method === "GET") {
    fs.readFile(filePath, "utf8", (error, data) => {
      if (error) {
        console.error(error);
        res.writeHead(404, { "Content-Type": "application/json" });
        res.end(JSON.stringify({ error: "File not found!" }));
        return;
      }
      res.writeHead(200, { "Content-Type": "text/html" });
      res.end("<pre>" + data + "</pre>");
    });
  }

  if (pathname === "/write" && req.method === "POST") {
    if (!content) {
      res.writeHead(204);
      return res.end("File content not pass!");
    }
    if (!fs.existsSync(filePath)) {
      fs.writeFile(filePath, content || "", (error) => {
        if (error) {
          res.writeHead(204);
          return res.end("Not able to write in file!");
        }
        res.end("File write successfully!");
      });
    } else {
      res.writeHead(200);
      return res.end("File already exists!");
    }
  }
};

const server = http.createServer(main);

server.listen(3000, () => {
  console.log("Server running at http://localhost:3000");
});
