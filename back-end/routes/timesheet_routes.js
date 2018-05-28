const express = require('express')
const Timesheet = require('../models/timesheet')
const router = express.Router()

/**
 * Timesheets routes
 */

const testData = [
  {
    date: "12-10-2015",
    hoursWorked: "8",
    employeeID: "5",
    status: "approved",
  },
  {
    date: "12-10-2015",
    hoursWorked: "8",
    employeeID: "5",
    status: "pending",
  },
  {
    date: "12-10-2015",
    hoursWorked: "8",
    employeeID: "5",
    status: "unsubmitted",
  },
  {
    date: "12-10-2015",
    hoursWorked: "8",
    employeeID: "5",
    status: "approved",
  }
];

router.get('/test', (req, res) => {
  res.json(testData);
})

router.get('/timesheets', (req, res) => {
  Timesheet.find()
    .then(timesheets => {
      res.json(timesheets)
    })
    .catch((err) => {
      res.status(500).json({ error: err })
    })
})

router.get('/timesheets/:id', (req, res) => {
  const id = req.params.id
  Timesheet.findById(id)
    .then(timesheet => {
      res.json(timesheet)
    })
    .catch((err) => {
      res.status(404).json({ err: err })
    })
})

router.post('/timesheets', (req, res) => {
  const newTimesheet = req.body
  Timesheet.create(newTimesheet)
    .then(timesheet => {
      res.json(timesheet)
    })
    .catch((err) => {
      res.status(500).json({ error: err })
    })
})

router.put('/timesheets/:id', (req, res) => {
  const id = req.params.id
  const timesheet = req.body
  Timesheet.findByIdAndUpdate(id, timesheet)
    .then(timesheet => {
      res.json(timesheet)
    })
    .catch((err) => {
      res.status(500).json({ error: err })
    })
})

router.delete('/timesheets/:id', (req, res) => {
  const id = req.params.id
  Timesheet.findByIdAndRemove(id)
    .then(timesheet => {
      res.json(timesheet)
    })
    .catch((err) => {
      res.status(500).json({ error: err })
    })
})

module.exports = router;
