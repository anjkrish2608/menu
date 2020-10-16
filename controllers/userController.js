var passport = require("passport");
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
    db.User
      .findById(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  create: function (req, res) {
    db.User
      .create(req.body)
      .then(() => {
        res.redirect(307, "/home");
      })
      .catch(err => res.status(422).json(err));
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
      .find({ email: req.params.email })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  authenticateUser: function (req, res) {
    passport.authenticate("local", {
      successRedirect: '/home',
      failureRedirect: '/signin',
      failureFlash: 'Invalid username or password.'
    });
  }
};
