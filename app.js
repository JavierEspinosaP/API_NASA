const express = require('express')
const cowsay = require('cowsay2');
const owl = require('cowsay2/cows/owl');
require('./utils/dbMongo.js');
const path = require("path")

//Routes
const landingsApiRouter = require('./routes/landingsApiRoutes')
// const neasApiRouter = require('./routes/neasApiRoutes')

//Middleware 404
const manage404 = require('./middlewares/error404')

const app = express()
const cors = require("cors");
const port = 3000

//Read body from request
app.use(express.json())
app.use(cors());
//API
app.use('/api', landingsApiRouter)


//If routes fail, show error 404
app.use(manage404);

//Owl say you if server works
app.listen(port, () => {
    console.log(cowsay.say(`Server working on http://localhost:${port}`, { cow: owl }))
  });