const express = require('express')
const app = express()
const db = require('./models')

app.get('/', (req, res) =>{
  res.send('✨')
})

app.use('/countries', require('./routes/countries'))
app.use('/recipes', require('./routes/recipes'))

app.listen(3000, () => console.log(`🎧 You're listening to the smooth sounds of port 3000`))