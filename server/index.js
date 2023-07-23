const fs = require('fs')
const path = require('path')
const express = require('express')
const cors = require('cors')
const dotenv = require('dotenv')

const defEnvPath = path.resolve(__dirname, '../.env')
const localEnvPath = path.resolve(__dirname, '../.env.local')

if (fs.existsSync(defEnvPath)) dotenv.config({ path: defEnvPath })
if (fs.existsSync(localEnvPath)) dotenv.config({ path: localEnvPath, override: true })

const app = express()

app.use(cors())

app.get('/', function (req, res) {
  res.send('Hello')
})

app.listen(process.env.SERVER_PORT || process.env.PORT || '3001', () => {
  console.log('Server is running')
})
