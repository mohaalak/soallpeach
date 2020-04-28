const http = require("http");

const array = [];
const getRawBody = (request) =>
  new Promise((resolve) => {
    let body = [];
    request
      .on("data", (chunk) => {
        body.push(chunk);
      })
      .on("end", () => {
        body = Buffer.concat(body).toString();
        resolve(body);
      });
  });

const server = http.createServer(function(req, res) {
  if (req.method === "GET") {
    const result = array.reduce((x, y) => x + parseInt(y), 0);
    res.end(result + "");
  } else {
    getRawBody(req)
      .then((string) => array.push(string))
      .catch((err) => console.log(err));
    res.end("ok\n");
  }
});

module.exports = { app: server };
