const { rawListeners } = require("../app");
const { Artist } = require("../models");

exports.create = (req, res) => {
  Artist.create(req.body).then((artist) => res.status(201).json(artist));
};

exports.list = (req, res) => {
  Artist.findAll({}).then((artist) => {
    res.status(200).json(artist);
  });
};

exports.findArtistByID = (req, res) => {
  const { artistId } = req.params;
  Artist.findByPk(artistId).then((artist) => {
    if (!artist) {
      res.status(404).json({ error: "the artist could not be found." });
    } else {
      res.status(200).json(artist);
    }
  });
};

exports.updateArtist = (req, res) => {
  const { id } = req.params;
  Artist.update(req.body, { where: { id } }).then(([genreUpdate]) => {
    if (!genreUpdate) {
      res.status(404).json({ error: "the artist could not be found." });
    } else {
      res.status(200).json(genreUpdate);
    }
  });
};

//findAll is a method to get all contained in the database object

//exports.list;

//const postArtist = (req, res) => {
//  res.sendStatus(201);
//};

//module.exports = postArtist;
