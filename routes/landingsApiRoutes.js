//Rutas de landings
const express = require('express')
const landingsApiController = require("../controllers/landingsApiControllers");
const landingsApiRouter = express.Router();

// landings API

landingsApiRouter.get('/astronomy/landings', landingsApiController.getLanding)
// landingsApiRouter.post('/astronomy/landings', landingsApiController.createProduct)
// landingsApiRouter.delete('/astronomy/landings', landingsApiController.deleteProduct)

module.exports = landingsApiRouter;