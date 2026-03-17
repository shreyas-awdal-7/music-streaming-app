const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

const authRoutes = require("./routes/auth");
const trackRoutes = require("./routes/tracks");
const playlistRoutes = require("./routes/playlists");

app.use("/api/auth", authRoutes);
app.use("/api/tracks", trackRoutes);
app.use("/api/playlists", playlistRoutes);

app.get("/", (req, res) => {
  res.send("Music Streaming API Running");
});

app.listen(5000, () => {
  console.log("Server running on port 5000");
});