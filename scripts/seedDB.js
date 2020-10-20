const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Books collection and inserts the books below

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/reactcms");
var seed1 = {
  username: "Anjini",
  email: "anjini.krishnan@hotmail.com",
  password: "abc1234"
}
var seed2 = {
  username: "Ben",
  email: "ben@hotmail.com",
  password: "builder"
}

db.User.remove({})
  .then(() => {
    db.User.create(seed1)
    .then(()=> db.User.create(seed2))
    .then(()=>process.exit(0))
  })
    .catch(err=>{
      console.error(err);
      process.exit(1);
    });
