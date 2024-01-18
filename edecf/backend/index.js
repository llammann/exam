const express = require('express')
const app = express()
require("./src/config/db")
require('dotenv').config()
const bodyParser = require('body-parser')
const cors = require('cors')
const port = 3000 || process.env.PORT
const ProductRouter=require("./src/routers/ProductRouter")

app.use(bodyParser.json())
app.use(cors())

require("./src/config/db")
app.get('/', (req, res) => {
  res.send('Hello World!')
})
 
app.use("/",ProductRouter)
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})