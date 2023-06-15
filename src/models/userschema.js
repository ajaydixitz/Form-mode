const mongoose = require('mongoose');

const userschema = new mongoose.Schema({
  Firstname: {
    type: String
  },
  Lastname: {
    type: String,
  },
  email: {
    type: String,
    
    
  },
  country: {
    type: String,
    
  },
  state: {
    type: String,
  },
  city: {
    type: String,
    
  },
  gender: {
    type: String,
    required: true
  },
  dob: {
    type: Date
  },
  age: {
    type: Number,
  
  }
});

const User = mongoose.model('User', userschema);

module.exports = User;