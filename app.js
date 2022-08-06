const express = require('express')
const cowsay = require('cowsay2');
const owl = require('cowsay2/cows/owl');


//Middleware 404
const manage404 = require('./middlewares/error404')

const app = express()
const port = 3000

//Permite leer body recibido en una petición
app.use(express.json())



app.use(manage404);


app.listen(port, () => {
    console.log(cowsay.say(`Server working on http://localhost:${port}`, { cow: owl }))
  });