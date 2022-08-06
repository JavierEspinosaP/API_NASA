//Rutas de neas
const express = require('express')
const neasApiController = require("../controllers/neasApiControllers");
const neasApiRouter = express.Router();

// neas API

neasApiRouter.get('/astronomy/neas', neasApiController.getProduct)
neasApiRouter.post('/astronomy/neas', neasApiController.createProduct)
neasApiRouter.delete('/astronomy/neas', neasApiController.deleteProduct)

module.exports = neasApiRouter;