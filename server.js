const express = require('express')
const app = express()

app.get('/', (req, res) =>{
  res.send('✨')
})

app.listen(3000, () => console.log(`🎧 You're listening to the smooth sounds of port 3000`))