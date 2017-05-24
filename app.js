var express = require('express')
var app = express()

app.use('/dist', express.static('dist'))

app.get('/', function (req, res) {
  res.sendFile(__dirname + '/index.html')
})

app.listen(80)
