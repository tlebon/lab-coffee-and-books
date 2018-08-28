const mongoose = require('mongoose')
const Schema = mongoose.Schema

const placeSchema = new Schema({
    name: String,
    // password: String,
    type: {
      type: String,
      enum : ['Coffee Place', 'Bookstore'],
      location: { type: { type: String }, coordinates: [Number,Number] },}
});
placeSchema.index({ location: '2dsphere' });


module.exports = mongoose.model('Place', placeSchema)
