const Landing = require('../models/landings')

const getLanding = async (req, res) => {
    if (req.query.minimum_mass) { //FIND BY MIN MASS
        try {
            let landingMinMass =  await Landing.getLandingMinMass(req.query.minimum_mass)
            res.status(200).json(landingMinMass);
        }
        catch (error) {
            console.log(`ERROR: ${error.stack}`)
            res.status(404).json({"message": "landing not found"});
        }
    } else if (req.query.from && req.query.to) { //FIND BY DATES

        const from = req.query.from;
        const to = req.query.to;
        try {
            let landingFromTo =  await Landing.getLandingFromTo(from, to)
            res.status(200).json({landingFromTo});
        }
        catch (error) {
            console.log(`ERROR: ${error.stack}`)
            res.status(404).json(error);
        }
    }
}


const landingCont = {
    getLanding
}

module.exports = landingCont;