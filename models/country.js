const mongoose = require('mongoose')

// set me schema
let countrySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlength: 2,
    maxlength:100
  },
  phoneCode: Number,
  population: Number,
  continent: String,
  capital: String
})

// export the model
module.exports = mongoose.model('Country', countrySchema)