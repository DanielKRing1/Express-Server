// heroku login
// heroku create
// git push heroku master

const express = require('express')
const app = express()
const port = process.env.PORT || 3000

// app.all('*', (req) => console.log(req))

app.get('/', (req, res) =>  res.send({ Hello: 'World' }))

app.get('/square/:num', (req, res) => res.send(`${req.params.num**2}`))

app.listen(port, () =>  console.log(`Listening on port ${port}`))
