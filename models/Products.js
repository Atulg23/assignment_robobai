// AdUnit.js

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema for AdUnits
let Products = new Schema({
  prod_id : {
    type: Number,
    required: true,
    trim: true 
  },
  quantity: {
    type: Number,
    required: true,
    trim: true 
  },
  prod_name: {
    type: String,
    required: true,
    trim: true 
  },
  cost_price: {
    type: Number,
    required: true,
    trim: true 
  },
  selling_price: {
    type: Number,
    required: true,
    trim: true 
  }
},{
    collection: 'products'
});

module.exports = mongoose.model('Products', Products);