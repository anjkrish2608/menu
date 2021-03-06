var passport = require("../config/passport");
const db = require("../models");

// Defining methods for the booksController
module.exports = {
  findAll: function (req, res) {
    db.User
      .find(req.query)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findById: function (req, res) {
    console.log(req.params.id);
    db.User
      .findById(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => console.log(err));
  },
  create: function (req, res) {
    db.User
      .create(req.body)
      .then((dbModel) => {
        res.json(dbModel);
      })
      .catch(err => console.log(err));
  },
  update: function (req, res) {
    db.User
      .findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  remove: function (req, res) {
    db.User
      .findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  checkDB: function (req, res) {
    db.User
      .findOne({email:req.body})
      .then(dbModel => res.json(dbModel))
      .catch(err => console.log(err));
  }
};
