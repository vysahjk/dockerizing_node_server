const app = require('express')()
const mongoose = require('mongoose')
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello express nibaldo!')
})

mongoose.connect("mongodb://root:example@mongo:27017/myapp", () => {
  app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })
})