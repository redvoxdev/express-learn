const express = require('express')
const app = express()

const getToken = (str) => {
  if (str && str.split('=').length > 1) {
    return str.split('=')[1]
  }
}

app.get('/api/v1/data', (req, res) => {
  const authHeader = req.headers['cookie']
  const token = getToken(authHeader)
  if (token && token === process.env.token) {
    res.status(200).send('Hello World!')
  } else {
    res.status(403).send("Token invalid")
  }
})

module.exports = app