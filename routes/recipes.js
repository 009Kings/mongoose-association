const express = require('express')
const router = express.Router()

// Index
router.get('/', (req, res) => {
  res.send('RECIPES ARE COOL')
})

// Show/Detail
router.get('/:id', (req, res) => {
  res.send('GETING recipe AT')
})

// Create
router.post('/', (req, res) => {
  res.send('ADDING A recipe')
})

// Update
router.put('/:id', (req, res) => {
  res.send('updating a recipe')
})

// Destroy
router.delete('/:id', (req, res) => {
  res.send('DELETING A recipe')
})

module.exports = router