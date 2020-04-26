const express = require("express");
const getRawBody = require("raw-body");
const app = express();

let sum = 0;
app.post("/", (req, res) => {
  getRawBody(
    req,
    { limit: "1mb", length: req.headers["content-length"] },
    (err, string) => {
      if (err) {
        return res.sendStatus(400);
      }

      const number = parseInt(string, 10);
      if (isNaN(number)) {
        return res.sendStatus(400);
      }

      sum += number;

      res.sendStatus(200);
    }
  );
});

app.get("/count", (_req, res) => res.status(200).send(`${sum}`));
module.exports = { app };
