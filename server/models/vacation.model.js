const mongoose = require('mongoose')

const VacationGemSchema = new mongoose.Schema({
  vacationLocation: {
    type: String,
    required: [true, '{PATH} cannot be empty'],
    minlength: [3, '{PATH} must be at least {MINLENGTH} characters long']
  },
  image: {
    type: String,
    required: [true, '{PATH} cannot be empty'],
    minlength: [3, '{PATH} must be at least {MINLENGTH} characters long']
  },
  description: {
    type: String,
    minlength: [3, '{PATH} must be at least {MINLENGTH} characters long']
  },
  activities: {
    type: String,
    minlength: [3, '{PATH} must be at least {MINLENGTH} characters long']
  },
}, {timestamps: true})

module.exports.VacationGem = mongoose.model('VacationGem', VacationGemSchema)