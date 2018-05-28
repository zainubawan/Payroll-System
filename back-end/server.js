const express = require('express')
const server = express()

// Model imports
const Timesheet = require('./models/timesheet')
const Employee = require('./models/employee')

// Route imports
const timesheetRouter = require('./routes/timesheet_routes')
const employeeRouter = require('./routes/employee_routes')

// Middleware
server.use(timesheetRouter);
server.use(employeeRouter);

const port = process.env.PORT || 7000;

server.listen(port, () => {
  console.log(`Server listening on port ${port}`)
})
