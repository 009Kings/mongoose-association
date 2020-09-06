const express = require('express')
const app = express()

app.use(express.urlencoded({ extended: false }))
app.use(express.json())

app.get('/', (req, res) =>{
  res.send('✨')
})

app.use('/countries', require('./routes/countries'))
app.use('/recipes', require('./routes/recipes'))

app.listen(3000, () => console.log(`🎧 You're listening to the smooth sounds of port 3000`))