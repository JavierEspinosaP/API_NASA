const express = require('express')
const cowsay = require('cowsay2');
const owl = require('cowsay2/cows/owl');


//Routes
const landingsApiRouter = require('./routes/landingsApiRoutes')
const neasApiRouter = require('./routes/neasApiRoutes')

//Middleware 404
const manage404 = require('./middlewares/error404')

const app = express()
const port = 3000

//Read body from request
app.use(express.json())

//API
app.use('/api', landingsApiRouter, neasApiRouter)

//If routes fail, show error 404
app.use(manage404);

//Owl say you if server works
app.listen(port, () => {
    console.log(cowsay.say(`Server working on http://localhost:${port}`, { cow: owl }))
  });