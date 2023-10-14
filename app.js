const express = require('express')
const { engine } = require('express-handlebars')
const app = express()
const port = 3000
const bodyParser = require('body-parser')
const generatePassword = require('./generate-password')

app.engine('.hbs', engine({extname: '.hbs'}))
app.set('view engine', '.hbs')
app.set('views', './views')

app.use(express.static('public'))
app.use(bodyParser.urlencoded({ extended: true }))

app.get('/', (req, res) => {
  res.render('index')
})

app.post('/', (req, res) => {
  const data = req.body  
  password = generatePassword(data)
  res.render('index', { data, password })
})

app.listen(port, () => {
  console.log(`express server on http://localhost:${port}`)
})