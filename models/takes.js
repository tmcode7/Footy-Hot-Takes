const mongoose = require('mongoose')

const takesSchema = new mongoose.Schema({
  takes: {
    type: String,
    
  },
  likes: {
    type: Number,
    
  }
})

module.exports = mongoose.model('takes', takesSchema)
