const express = require('express')
const router = express.Router()
const db = require('../models')

// .catch(err => res.status(500).json({error: err}))

// Index
router.get('/', (req, res) => {
  db.Country.find().then(countries => {
    res.status(200).json(countries)
  }).catch(err => res.status(500).json({error: err}))
})

// Show/Detail
router.get('/:id', (req, res) => {
  db.Country.findById(req.params.id).then(country => {
    res.status(200).json(country)
  }).catch(err => res.status(500).json({error: err}))
})

// Create
router.post('/', (req, res) => {
  db.Country.create(req.body).then(newCountry => {
    res.status(200).json(newCountry)
  }).catch(err => res.status(500).json({error: err}))
})

// Update
router.put('/:id', (req, res) => {
  db.Country.findByIdAndUpdate(req.params.id, req.body).then(updatedCountry => {
    console.log(updatedCountry)
    res.status(200).json(updatedCountry)
  })
})

// Destroy
router.delete('/:id', (req, res) => {
  db.Country.findByIdAndDelete(req.params.id).then(removed => {
    res.status(200).json({ message: 'Successfully deleted country'})
  })
})


module.exports = router