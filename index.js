const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.json({ hello: true })
})

// app.get('/hangtime', function (req, res) {
//   console.log('just hanging.')
//   setTimeout(() => {
//     res.json({ oh: 'hey' })
//     console.log("hit")
//   }, 6005)
// })

if (process.env.NODE_ENV != 'production' && module.parent) {
  module.exports = function (port) {
    const ref = app.listen(port)
    const handle = ref.close.bind(ref)
    return handle
  }
} else {
  const port = 8080;
  app.listen(port, function () {
    console.log(`Listening on ${port}...`)
  })
}

module.exports.unit = () => "string"