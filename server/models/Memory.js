const mongoose = require('mongoose');
const memorySchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  mood: {
    type: String,
    required: true
  },
  tags: {
    type: [String],
    deafault: [] 
 },
 date: {
    type: Date,
    required: true
  }
}, {
  timestamps: true
});
module.exports = mongoose.model('Memory', memorySchema);
mongoose.model