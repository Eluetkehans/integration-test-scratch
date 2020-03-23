const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.json({ hello: true })
})

app.get('/hangtime', function (req, res) {
  console.log('just hanging.')
})

app.listen(8080)