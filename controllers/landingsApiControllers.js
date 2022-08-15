const Landing = require('../models/landingModels')

const getLanding = async (req, res) => {

    let minimum_mass = req.query.minimum_mass

    let from = req.query.from
    let to = req.query.to

    const minMassNumber = parseInt(minimum_mass)

    if (minMassNumber) { //FIND BY MIN MASS
        try {
            let landingMinMass = await Landing.getLandingsMinMass(minMassNumber)
            res.status(200).json(landingMinMass);
        }
        catch (error) {
            console.log(`ERROR: ${error.stack}`)
            res.status(404).json({ "message": "landing not found" });
        }
    }

    else if (from && to) { //FIND BY DATES


        try {
            let landingFromTo = await Landing.getLandingFromTo(from, to)
            res.status(200).json(landingFromTo);
        }
        catch (error) {
            console.log(`ERROR: ${error.stack}`)
            res.status(404).json({ "message": "landing not found" });
        }
    } else if (from) { //FIND BY DATES

        try {
            let landingFromTo = await Landing.getLandingFrom(from)
            res.status(200).json(landingFromTo);
        }
        catch (error) {
            console.log(`ERROR: ${error.stack}`)
            res.status(404).json({ "message": "landing not found" });
        }
    } else if (to) { //FIND BY DATES

        try {
            let landingFromTo = await Landing.getLandingTo(to)
            res.status(200).json(landingFromTo);
        }
        catch (error) {
            console.log(`ERROR: ${error.stack}`)
            res.status(404).json({ "message": "landing not found" });
        }

    }
    else {
        const landings = await Landing.getAllLandings();
        res.status(200).json(landings);
    }
}

const getLandingByMass = async(req, res) => {
    console.log(req.params.mass);
    let landingMass =  await Landing.getLandingMass(req.params.mass);
    res.status(200).json(landingMass)
}


//esto va mal hababy


const landingControllers = {
    getLanding,
    getLandingByMass
}

module.exports = landingControllers;