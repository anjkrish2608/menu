const mongoose = require("mongoose");
const db = require("../models");

// This file empties the users collection and inserts the users below

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/menU',
{
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false
}
);
//userdb seeds
var userSeed1 = {
  username: "Anjini",
  email: "anjini.krishnan@hotmail.com",
  password: "abc1234"
}
var userSeed2 = {
  username: "Ben",
  email: "ben@hotmail.com",
  password: "builder"
}
var user1ID;
var user2ID;
var menu1ID;
var menu2ID;
//populate user db
db.User.remove({})
  .then(() => {
    db.User.create(userSeed1)
    .then((data)=>{ 
      user1ID=data.data._id;
      db.User.create(userSeed2);
    })
    .then((data)=>{
      user2ID=data.data._id;
      process.exit(0);
    })
  })
    .catch(err=>{
      console.error(err);
      process.exit(1);
    });

    //menudb seed
    var menuSeed1 = {
      user_ID: user1ID,
      menuName: "Anjs Brunch Menu"
    }
    var menuSeed2 = {
      user_ID: user2ID,
      menuName: "Bens BBQ Feast"
    }
//populate menudb
    db.Menu.remove({})
  .then(() => {
    db.Menu.create(menuSeed1)
    .then((data)=>{ 
      menu1ID=data.data._id;
      db.Menu.create(menuSeed2);
    })
    .then((data)=>{
      menu2ID=data.data._id;
      process.exit(0);
    })
  })
    .catch(err=>{
      console.error(err);
      process.exit(1);
    });

    //itemdb seeds
    var itemSeed1 = {
      menu_ID: "Anjini",
      sectionName: "anjini.krishnan@hotmail.com",
      items: ["abc1234"]
    }
    var itemSeed2 = {
      username: "Anjini",
      email: "anjini.krishnan@hotmail.com",
      password: "abc1234"
    }
    //populate itemdb
    db.Menu.remove({})
    .then(() => {
      db.Menu.create(menuSeed1)
      .then((data)=>{ 
        menu1ID=data.data._id;
        db.Menu.create(menuSeed2);
      })
      .then((data)=>{
        menu2ID=data.data._id;
        process.exit(0);
      })
    })
      .catch(err=>{
        console.error(err);
        process.exit(1);
      });