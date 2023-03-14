const mongoose = require('mongoose');
const { Schema } = mongoose;

const showSchema = new Schema({
  title: {
    type: String,
    required: true
  },  
  creator: {
    type: String,
    required: true
  },
  launched: Number,
  genre: {
    type: String,
    required: true
  },
  image: {
    type: String,
    default: 'https://www.genius100visions.com/wp-content/uploads/2017/09/placeholder-vertical.jpg'
  },
  description: {
    type: String
  }
})

const Show = mongoose.model('Show', showSchema);

module.exports = Show;