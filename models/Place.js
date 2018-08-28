const mongoose = require('mongoose')
const Schema = mongoose.Schema

const placeSchema = new Schema({
    name: String,
    // password: String,
    type: {
      type: String,
      enum : ['Coffee', 'Books'],}
})

module.exports = mongoose.model('User', userSchema)
