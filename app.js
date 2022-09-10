const express = require('express')
const app = express()

const getToken = (str) => {
  if (str && str.split('=').length > 1) {
    return str.split('=')[1]
  }
}

breakIfTokenInvalid = (req, res, next) => {
  const cookieHeader = req.headers['cookie']
  const token = getToken(cookieHeader)
  if (token && token === process.env.token) {
    next()
  } else {
    res.status(403).send("Token invalid")
  }
}

const getData = (req, res) => {
  res.status(200).send('Hello World!')
}

app.use(breakIfTokenInvalid)

app.get('/api/v1/data', getData)

module.exports = app