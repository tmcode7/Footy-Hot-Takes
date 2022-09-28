const mongoose = require('mongoose')

const takesSchema = new mongoose.Schema({
  takes: {
    type: String,
    required: true,
  }
})

module.exports = mongoose.model('Takes', takesSchema)
