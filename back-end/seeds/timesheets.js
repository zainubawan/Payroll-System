const Timesheet = require('../models/timesheet');

Timesheet.create([
  {
    name: 'Kratos',
    hours_worked: 5,
    location: 'Sydney',
    status: 'unsubmitted'
  },
  {
    name: 'Velma',
    hours_worked: 8,
    location: 'Sydney',
    status: 'approved'
  },
  {
    name: 'Marco',
    location: 'Melbourne',
    status: 'unsubmitted'
  },
  {
    name: 'Sirius',
    hours_worked: 5,
    location: 'Sydney',
    status: 'pending approval'
  }
])

