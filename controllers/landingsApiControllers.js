const Landing = require('../models/landingModels')

const getLanding = async (req, res) => {

   let minimum_mass = req.query.minimum_mass
   
   const minMassNumber = parseInt(minimum_mass)

    if (minMassNumber) { //FIND BY MIN MASS
        try {
            let landingMinMass =  await Landing.getLandingsMinMass(minMassNumber)
            res.status(200).json(landingMinMass);
        }
        catch (error) {
            console.log(`ERROR: ${error.stack}`)
            res.status(404).json({"message": "landing not found"});
        }
    } else if (req.query.from) { //FIND BY DATES

        const from = req.query.from;
        // const to = req.query.to;
        try {
            let landingFromTo =  await Landing.getLandingFromTo(from)
            res.status(200).json({landingFromTo});
        }
        catch (error) {
            console.log(`ERROR: ${error.stack}`)
            res.status(404).json({"message": "landing not found"});
        }
    } else {
        const landings = await Landing.getAllLandings();
        res.status(200).json(landings);
    }
}


const landingControllers = {
    getLanding
}

module.exports = landingControllers;