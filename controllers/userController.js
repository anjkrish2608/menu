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
    db.User
      .findById(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => console.log(err));
  },
  create: function (req, res) {
    console.log("request:");
    console.log(req.body);
    db.User
      .create(req.body)
      .then(() => {
        console.log("new user created");
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
    console.log("request: "+ req.params.email);
    db.User
      .find({email:req.params.email})
      .then(dbModel => res.json(dbModel))
      .catch(err => console.log(err));
  },
  authenticateUser: function (req, res) {
    console.log("inside authenticate User");
    passport.authenticate("local", {
      successRedirect: '/home',
      failureRedirect: '/signin',
      failureFlash: 'Invalid username or password.'
    },function(req, res) {
      res.redirect('/home');
    });
  }
};
