const mongoose = require("mongoose");
const db = require("../models");
var user1ID;
var user2ID;
var menu1ID;
var menu2ID;
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

//populate userdb
const removeAndPopulateUser = function () {
  db.User.remove({})
    .then(() => {
      console.log("user db emptied");
      db.User.create(userSeed1)
        .then((data) => {
          console.log('user seed 1')
          console.log(JSON.stringify(data));
           user1ID = data._id;
          console.log("user 1 id: "+user1ID);
          db.User.create(userSeed2)
        .then((data) => {
          
          console.log(JSON.stringify(data));
           user2ID = data._id;
           console.log("user 1 id: "+user1ID);
          console.log("user 2 id: "+user2ID);
         removeAndPopulateMenu(user1ID,user2ID);
        })
      })
    })
    .catch(err => {
      console.error(err);
      process.exit(1);
    });
}


//populate menudb
const removeAndPopulateMenu = function (user1ID,user2ID) {
  console.log("user 1 id: "+user1ID);
 console.log("user 2 id: "+user2ID);
  db.Menu.remove({})
    .then(() => {
      console.log('menu db removed');
      db.Menu.create({
        user_ID: user1ID,
        menuName: "Anjs Brunch Menu"
      })
        .then((data) => {
      console.log('menu seeded 1');
           menu1ID = data._id;
          console.log("menu id1: "+menu1ID);
          db.Menu.create({
            user_ID: user2ID,
            menuName: "Bens BBQ Feast"
          })
        .then((data) => {
           menu2ID = data._id;
          console.log("menu id2: "+menu2ID);
          removeAndPopulateItem(menu1ID,menu2ID);
        })
      })
    })
    .catch(err => {
      console.error(err);
      process.exit(1);
    });
    return true;
}



//populate itemdb
const removeAndPopulateItem = function (menu1ID,menu2ID) {
  
  console.log("user 1 id: "+menu1ID);
  console.log("user 2 id: "+menu2ID);
  db.Item.remove({})
    .then(() => {
      db.Item.create({
        menu_ID: menu1ID,
        sectionName: "Drinks",
        items: [{ item: "Apple Juice", price: 6 }, { item: "Coffee", price: 5 }]
      })
        .then(() => db.Item.create({
          menu_ID: menu2ID,
          sectionName: "Meats",
          items: [{ item: "Pork ribs", price: 18 }, { item: "4hr Beef rib tacos", price: 15 }]
        }))
        .then(() => process.exit(0))
    })
    .catch(err => {
      console.error(err);
      process.exit(1);
    });
    return true;
}



removeAndPopulateUser();