import WebSocket, { WebSocketServer } from "ws";

const wss = new WebSocketServer({port: 8080});

wss.on("connection", (connection) => {
  console.log("新的使用者已連線");

  connection.on("message", (message) => {
    console.log(`收到訊息 => ${message}`);

    wss.clients.forEach((client) => {
      if (client.readyState === WebSocket.OPEN) {
        client.send(message);
      }
    });
  });

  connection.on("close", () => {
    console.log("使用者已斷開連線");
  });
});