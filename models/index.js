// set up mongoose connection
const mongoose = require('mongoose')

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/mongooseLesson', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false
})

// set up some mongoose connection listeners
let mg = mongoose.connection

mg.once('open', () => console.log(`🔗 Connected to MongoDD at ${mg.host}:${mg.port}`))
mg.on('error', err => console.log(`😭 Database error\n${err}`))

// countries
module.exports.Country = require('./country')

// recipes
  // ingredients
module.exports.Recipe = require('./recipe')