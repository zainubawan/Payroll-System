const mongoose = require('mongoose')
require('./db_config')

const timesheetSchema = mongoose.Schema({
  // todo: employee's name
  name: {
    type: String,
    required: true
  },
  hours_worked: {
    type: Number,
    required: true,
    default: 0
  },
  date_worked: {
    type: Date
  },
  location: {
    type: String,
    required: true
  },
  status: {
    type: String,
    required: true,
    default: "Not submitted"  // pending approval, approved
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