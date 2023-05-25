const express = require("express");
const app = express();
const port = 5000;

const { chats } = require("./data/data");

app.get("/", (req, res) => {
   res.send("Chatting server is running.");
});

// chats data get request ---
app.get("/api/chat", (req, res) => {
   res.send(chats);
});

// get chat data by id ---
app.get("/api/chat/:id", (req, res) => {
   const id = req.params.id;
   const chatData = chats.find((chatData) => chatData._id === id);
   res.send(chatData);
});

app.listen(port, () => {
   console.log(`Example app listening on http://localhost:${port}`);
});
