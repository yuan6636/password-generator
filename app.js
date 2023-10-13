const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.post('/generate', (req, res) => {
  
})

app.listen(port, () => {
  console.log(`express server on http://localhost:${port}`)
})