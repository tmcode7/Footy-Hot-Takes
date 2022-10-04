const mongoose = require('mongoose')

const takesSchema = new mongoose.Schema({
  takeContent: {
    type: String,
    required: true,

    
  },
  likes: {
    type: Number
    
  }
})

module.exports = mongoose.model('Takes', takesSchema)
