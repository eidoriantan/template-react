const fs = require('fs')
const path = require('path')
const express = require('express')
const cors = require('cors')
const dotenv = require('dotenv')
const asyncWrap = require('./utils/async-wrap')

const defEnvPath = path.resolve(__dirname, '../.env')
const localEnvPath = path.resolve(__dirname, '../.env.local')

if (fs.existsSync(defEnvPath)) dotenv.config({ path: defEnvPath })
if (fs.existsSync(localEnvPath)) dotenv.config({ path: localEnvPath, override: true })

const app = express()
const port = process.env.SERVER_PORT || process.env.PORT || '3001'
const appBuild = path.resolve(__dirname, '../build')

app.use(cors())
app.use(express.static(appBuild))
app.use(express.json())

app.get('/', asyncWrap(async function (req, res) {
  res.send('Hello')
}))

app.use((err, req, res, next) => {
  console.error(err)
  res.json({
    success: false,
    message: err.message
  })
})

app.use('*', (req, res) => {
  const indexPath = path.resolve(__dirname, '../build/index.html')
  res.sendFile(indexPath)
})

app.listen(port, () => {
  console.log('Server is running')
})
