"use strict";

const http = require("http");
const respond = require("./helper.js");

/* `createServer` MUST return an instance of `http.Server` otherwise the tests
 * will fail.
 */

function createServer(port) {
  let state = 10;

  const server = http.createServer((request, response) => {
    // TODO: Write your homework code here
    switch (request.url) {
      case "/state":
        respond(response, state);
        break;
      case "/add":
        state++;
        respond(response, state);
        break;
      case "/subtract":
        state--;
        respond(response, state);
        break;
      case "/reset":
        state = 10;
        respond(response, state);
        break;
      default:
        response.writeHead(404, { "Content-Type": "application/json" });
        response.end(JSON.stringify({ error: "Not found" }));
    }
  });

  return server;
}

module.exports = {
  createServer
};
