const express = require('express')
const app = express()

app.get('/api/v1/data', (req, res) => {
  const authHeader = req.headers['cookie']
  if (authHeader && authHeader.split('=').length > 1) {
    const token = authHeader.split('=')[1]
    if (token === process.env.token) {
      res.send('Hello World!')
    } else {
      res.status(403).send("Token invalid")
    }
  }
})

module.exports = app