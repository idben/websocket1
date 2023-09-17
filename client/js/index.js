const button = document.querySelector("button");
const chatInput = document.querySelector("[name=chatInput]");
const chatBox = document.querySelector("#chat-box");
const ws = new WebSocket("ws://localhost:8080");

button.addEventListener("click", ()=>{
  let message = chatInput.value;
  ws.send(message);
  chatInput.value = "";
});

ws.addEventListener("open", () => {
  console.log("Connected to the WebSocket");
});

ws.addEventListener("message", async (event) => {
  const text = await event.data.text();
  chatBox.innerHTML += `<div>${text}</div>`;
});
