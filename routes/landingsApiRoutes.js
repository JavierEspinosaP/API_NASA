//Rutas de landings
const express = require('express')
const landingsApiControllers = require("../controllers/landingsApiControllers");
const landingsApiRouter = express.Router();

// landings API

landingsApiRouter.get('/astronomy/landings', landingsApiControllers.getLanding)
landingsApiRouter.get('/astronomy/landings/mass/:mass', landingsApiControllers.getLandingByMass)
landingsApiRouter.get('/astronomy/landings/class/:class', landingsApiControllers.getLandingByClass)
// landingsApiRouter.post('/astronomy/landings', landingsApiController.createProduct)
// landingsApiRouter.delete('/astronomy/landings', landingsApiController.deleteProduct)

module.exports = landingsApiRouter;