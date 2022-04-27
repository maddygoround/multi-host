const { createServer } = require("http");
const { parse } = require("url");
const next = require("next");
const fs = require("fs");
const port = 3000;
const host = "fullstack";
const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();

// const httpsOptions = {
//   key: fs.readFileSync("./certificate/nginx-selfsigned.key.pem"),
//   cert: fs.readFileSync("./certificate/nginx-selfsigned.crt.pem"),
// };

app.prepare().then(() => {
  createServer({}, (req, res) => {
    const parsedUrl = parse(req.url, true);
    handle(req, res, parsedUrl);
  }).listen(port, host, (err) => {
    if (err) throw err;
    console.log("ready - started server on url: http://" + host + ":" + port);
  });
});
