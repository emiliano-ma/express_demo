const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  console.table(req.query)
  let greeting = req.query.e || 'World'
  res.send(`<h1>Hello ${greeting}!</h1>`)
})

app.get('/emi', (req, res) => {
    console.table(req.query)
    res.send('<h1>Hello Emi!</h1>')
  })

app.listen(port, () => console.warn(`The audience is listening on port ${port}!`))

// new comment just to test how git is working