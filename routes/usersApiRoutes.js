//Rutas de users
const express = require('express')
const usersApiControllers = require("../controllers/usersApiControllers");
const usersApiRouter = express.Router();

// users API

usersApiRouter.post('/astronomy/users/create', usersApiControllers.createUser)


module.exports = usersApiRouter;