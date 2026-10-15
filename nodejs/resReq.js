const http = require("http");
const url = require("url");

const main = (req, res) => {
  const urlPath = url.parse(req.url, true);
  const path = urlPath.pathname;
  const productMatch = path.match(/^\/product\/([^/]+)$/);
  if (productMatch) {
    const pid = productMatch[1];
    res.writeHead(200, { "content-type": "text/html" });
    res.end("<h2> Product ID = " + pid + "</h2>");
  } else if (path === "/product" && urlPath.query.pid) {
    const pid = urlPath.query.pid;
    res.writeHead(200, { "content-type": "text/html" });
    res.end("<h2> Product ID = " + pid + "</h2>");
  } else {
    res.writeHead(404, { "content-type": "text/html" });
    res.end("<h2> Page not found!</h2>");
  }
};

const server = http.createServer(main);

server.listen(3000, () => {
  console.log("Server running at http://localhost:3000");
});
