const express = require('express')
const { engine } = require('express-handlebars')
const app = express()
const port = 3000

app.engine('.hbs', engine({extname: '.hbs'}))
app.set('view engine', '.hbs')
app.set('views', './views')

app.use(express.static('public'))

app.get('/', (req, res) => {
  res.render('index')
})

app.post('/generate', (req, res) => {

})

app.listen(port, () => {
  console.log(`express server on http://localhost:${port}`)
})