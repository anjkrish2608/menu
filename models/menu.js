const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const menuSchema = new Schema({
  user_ID: { 
    type: String, 
    required: true 
  },
  menuName: { 
    type: String, 
    required: true 
  },
  date: { 
    type: Date, 
    default: Date.now 
  }
});

const Menu = mongoose.model("Menu", menuSchema);

module.exports = Menu;
