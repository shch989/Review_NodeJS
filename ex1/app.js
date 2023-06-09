const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors');

const feedRoutes = require('./routes/feed')

const app = express()

const port = 5000

app.use(bodyParser.json())
app.use(cors())

app.use('/feed', feedRoutes)

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}/`)
})
