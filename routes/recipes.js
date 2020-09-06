const express = require('express')
const router = express.Router()
const db = require('../models')

// Index
router.get('/', (req, res) => {
  db.Recipe.find().then(recipes => {
    res.status(200).json(recipes)
  }).catch(err => res.status(500).json({error: err}))
})

// Show/Detail
router.get('/:id', (req, res) => {
  db.Recipe.findById(req.params.id).populate('country').then(recipe => {
    res.status(200).json(recipe)
  }).catch(err => res.status(500).json({error: err}))
})

// Create
router.post('/', (req, res) => {
  // If no objectID is provided from req.body
  // TODO fix async issues
  let newRecipe = new db.Recipe(req.body)

  db.Country.find({name: req.body.country}).then(country =>{
    if (!country) {
      const newCountry = new db.Country({ name: req.body.country })
      newCountry.save()
    }
    newRecipe.country = country ? country._id : newCountry._id
    newRecipe.save()
    res.status(200).json(newRecipe)
  })

  // Front end forward
  // db.Recipe.create(req.body).then(newRecipes => {
  //   res.status(200).json(newRecipes)
  // }).catch(err => res.status(500).json({error: err}))
})

// Update
router.put('/:id', (req, res) => {
  db.Recipe.findByIdAndUpdate(req.params.id, req.body).then(updatedRecipe => {
    console.log(updatedRecipe)
    res.status(200).json(updatedRecipe)
  })
})

// Destroy
router.delete('/:id', (req, res) => {
  db.Recipe.findByIdAndDelete(req.params.id).then(removed => {
    res.status(200).json({ message: 'Successfully deleted recipe'})
  })
})

module.exports = router