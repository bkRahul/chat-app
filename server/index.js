const express = require("express");
const http = require("http");
const socketio = require("socket.io");

const PORT = process.env.PORT || 5000;
const app = express();

const route = require("./routes/route");
const {
  addUser,
  getUser,
  removeUser,
  getUsersInRoom,
} = require("./users/users");

//route middleware
app.use(route);

//start a server
const server = http.createServer(app);

//pass the server to socketio
const io = socketio(server);

//start a connection
io.on("connection", (socket) => {
  console.log("Client connected");

  //wait for emitted join event
  socket.on("join", ({ name, room }, callback) => {
    const { user, error } = addUser({ id: socket.id, name, room });
    if (error) {
      return callback(error);
    }

    //emit an event
    socket.emit("message", {
      user: "admin",
      text: `Welcome to the room ${user.name}`,
    });
    socket.broadcast.to(room).emit("message", {
      user: "admin",
      text: `${user.name} has joined`,
    });
    socket.join(user.room);
    io.to(user.room).emit("roomData", {
      room: user.room,
      users: getUsersInRoom(user.room),
    });
    callback();
  });

  socket.on("sendMessage", (message, callback) => {
    const user = getUser(socket.id);
    console.log("user=>>>", user);
    io.to(user.room).emit("message", { user: user.name, text: message });

    callback();
  });

  //wait for disconnect event
  socket.on("disconnect", () => {
    const user = removeUser(socket.id);
    if (user) {
      io.to(user.room).emit("message", {
        user: "admin",
        text: `${user.name} has left the chat`,
      });
      io.to(user.room).emit("roomData", {
        room: user.room,
        users: getUsersInRoom(user.room),
      });
    }
    console.log("client disconnected");
  });
});

server.listen(PORT, () => {
  console.log("server is running on port " + PORT);
});
