const express = require('express')
const Employee = require('../models/employee')
const router = express.Router()

/**
 * Employees routes (for admins)
 * TODO - Implement authorization for admins
 */

router.get('/employees', (req, res) => {
  Employee.find()
    .then(employees => {
      res.json(employees)
    })
    .catch((err) => {
      res.status(500).json({ error: err })
    })
})

router.get('/employees/:id', (req, res) => {
  const id = req.params.id
  Employee.findById(id)
    .then(employee => {
      res.json(employee)
    })
    .catch((err) => {
      res.status(404).json({ err: err })
    })
})

router.post('/employees', (req, res) => {
  const newEmployee = req.body
  Employee.create(newEmployee)
    .then(employee => {
      res.json(employee)
    })
    .catch((err) => {
      res.status(500).json({ error: err })
    })
})

router.put('/employees/:id', (req, res) => {
  const id = req.params.id
  const employee = req.body
  Employee.findByIdAndUpdate(id, employee)
    .then(employee => {
      res.json(employee)
    })
    .catch((err) => {
      res.status(500).json({ error: err })
    })
})

router.delete('/employees/:id', (req, res) => {
  const id = req.params.id
  Employee.findByIdAndRemove(id)
    .then(employee => {
      res.json(employee)
    })
    .catch((err) => {
      res.status(500).json({ error: err })
    })
})

module.exports = router;
