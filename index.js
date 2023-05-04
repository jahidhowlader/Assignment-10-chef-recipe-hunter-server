const express = require('express')
var cors = require('cors')

const app = express()
const PORT = 5000

app.use(cors())

const chefData = require('./data/chefdetails.json')

app.get('/', (req, res) => {
  res.send(chefData)
})

app.get('/chef/:_id', (req, res) => {
  const id = +req.params._id
  console.log(id);

  const chefDetail = chefData.chefs.find(chef => +chef._id === id)
  res.send(chefDetail)
})

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`)
})