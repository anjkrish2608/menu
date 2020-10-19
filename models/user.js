const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const bcrypt=require("bcryptjs");

const userSchema = new Schema({
  username: { 
    type: String, 
    required: true
   },
  email: { 
    type: String, 
    trim:true, 
    unique: true, 
    required: true,
     match:[/.+@.+\..+/,"Please enter valid email address."] 
  },
  password: { 
    type: String, 
    required: true,
    validate:[({length})=>length>=6,"Password must be at least 6 characters."] 
  },
   date: { 
     type: Date, 
     default: Date.now
   },
   versionKey:false
});

//userSchema.plugin(require("mongoose-bcrypt"));

// Creating a custom method for our User model. This will check if an unhashed password entered by the user can be compared to the hashed password stored in our database
// userSchema.validPassword = function(password) {
//   console.log("valid password");
//   console.log(user.password);
//   return bcrypt.compareSync(password, this.password);
// };
// // Hooks are automatic methods that run during various phases of the User Model lifecycle
// // In this case, before a User is created, we will automatically hash their password

// userSchema.pre("save", function(user) {
//   console.log("pre save");
//   console.log(user);
//   user.password = bcrypt.hashSync(user.password, bcrypt.genSaltSync(10), null);
//   console.log(user.password);
//});


const User = mongoose.model("User", userSchema);


module.exports = User;
