// /pages/api/socket.js
import { Server } from "socket.io";

export default function handler(req, res) {
  if (res.socket.server.io) {
    console.log(" Socket.IO sudah ada.");
    res.end();
    return;
  }

  const io = new Server(res.socket.server, {
    path: "/api/socket_io",
  });

  res.socket.server.io = io;

  io.ion("connection", async (socket) => {
    const userId = socket.handshake.query.userId;

    if (!userId) {
      console.log("Koneksi tanpa userId, ditolak");
      socket.disconnect();
      return;
    }

    await User.updateOne({ _id: userId }, { $set: { socketId: socket.id } });

    socket.on("");
  });

  res.end();
}
