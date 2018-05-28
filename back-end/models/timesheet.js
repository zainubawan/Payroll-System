const mongoose = require('mongoose')
// require('./init')

const timesheetSchema = mongoose.Schema({
  hours_worked: {
    type: Number,
    required: true,
    default: 0
  },
  day_worked: {
    type: Date
  },
  location: {
    type: String,
    required: true
  },
  created_at: {
    type: Date,
    default: Date.now
  },
  updated_at: {
    type: Date,
    default: Date.now
  }
})

const Timesheet = mongoose.model('Timesheet', timesheetSchema)

module.exports = Timesheet