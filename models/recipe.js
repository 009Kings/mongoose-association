const mongoose = require('mongoose')

// ingredientSchema
const ingredientSchema = new mongoose.Schema({
  name: {
    required: true,
    type: String
  },
  amount: {
    required: true,
    type: String
  },
  note: String
})

// nutritionSchema
const nutritionSchema = new mongoose.Schema({
  totalCalories: Number
})


const recipeSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlength: 5,
    maxlength: 155
  },
  country: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Country',
    required: true,
  },
  author: {
    type: String,
    default: 'Anonymous'
  },
  intro: {
    type: String,
    maxlength: 255
  },
  ingredients: [ingredientSchema],
  instructions: [String],
  nutritionFacts: nutritionSchema
})

module.exports = mongoose.model('Recipe', recipeSchema)