// Node.js WebSocket server script
const oscHelpers = require("./osc/osc-helpers.js");
const osc = require("osc");
const http = require("http");
const WebSocket = require("ws");
const server = http.createServer();

server.listen(9898);
const wsServer = new WebSocket.Server({
  server: server,
});

let conn = null;

wsServer.on("connection", (connection) => {
  console.log("Connection");
  conn = connection;
  //   const connection = request.accept(null, request.origin);
  connection.on("message", function (message) {
    console.log("Received Message:", message);
    // setInterval(() => connection.send("counter=" + counter++), 5000);
    connection.send(JSON.stringify({ name: "Hi this is WebSocket server!" }));
  });
  connection.on("close", function (reasonCode, description) {
    console.log("Client has disconnected.");
  });
});
wsServer.on("request", function (request) {
  console.log("REQUEST");
});

var udpPort = new osc.UDPPort({
  localAddress: "127.0.0.1",
  localPort: 6250,
  metadata: true,
});

oscHelpers.callbackValues(callbackOsc);

// Listen for incoming OSC messages.
udpPort.on("message", function (oscMsg, timeTag, info) {
  //   console.log("An OSC message just arrived!", oscMsg);
  //   console.log("Remote info is: ", info);

  oscHelpers.parseOscMsg(oscMsg);
});

// Open the socket.
udpPort.open();

function callbackOsc(values) {
  console.log("values");
  console.log(values);
  if (conn) conn.send(JSON.stringify(values));
}
