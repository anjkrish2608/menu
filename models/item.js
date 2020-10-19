const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const itemSchema = new Schema({
  menu_ID: { 
    type: Number, 
    required: true 
  },
  sectionName: { 
    type: String, 
    required: true 
  },
  itemName: { 
    type: String, 
    required: true 
  },
  price: { 
    type: Number, 
    required: true 
  },
  date: { 
    type: Date, 
    default: Date.now 
  }
});

const Item = mongoose.model("Item", itemSchema);

module.exports = Item;
