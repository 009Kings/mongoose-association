const express = require('express')
const router = express.Router()

// Index
router.get('/', (req, res) => {
  res.send('COUNTREIS ARE COOL')
})

// Show/Detail
router.get('/:id', (req, res) => {
  res.send('GETING COUNTRY AT')
})

// Create
router.post('/', (req, res) => {
  res.send('ADDING A COUNTRY')
})

// Update
router.put('/:id', (req, res) => {
  res.send('updating a country')
})

// Destroy
router.delete('/:id', (req, res) => {
  res.send('DELETING A COUNTRY')
})


module.exports = router