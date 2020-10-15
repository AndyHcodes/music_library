const express = require("express");
const artistControllers = require("../src/controllers/artist");

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.status(200);
  res.send("Hello World!");
});

//app.post("/artists", postArtist);

app.post("/artists", artistControllers.create);
app.get("/artists", artistControllers.list);
app.get("/artists/:artistId", artistControllers.findArtistByID);
app.patch("/artists/:artistId", artistControllers.updateArtist);

module.exports = app;
