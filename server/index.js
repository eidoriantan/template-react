const express = require('express')

const app = express()

app.get('/', function (req, res) {
  res.send('Hello')
})

app.listen(process.env.SERVER_PORT || process.env.PORT || '3001', () => {
  console.log('Server is running')
})
