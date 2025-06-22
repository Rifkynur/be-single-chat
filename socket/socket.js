import { Server } from "socket.io";
import express from "express";
import http from "http";

const app = express();

const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: "http://localhost:5173",
    credentials: true,
  },
});

io.on("connection", (socket) => {
  console.log(`user connection ${socket.id}`);

  socket.on("disconnect", () => {
    console.log(`user disconnect ${socket.id}`);
  });
});

export { app, io, server };
