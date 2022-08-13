
const Landing = require('../schemas/landingSchemas')

const getAllLandings = async () => {
    try{
        const getLandings = await Landing.find({},"-_id");
        return getLandings
    }
    catch(err){
        console.error(err);
    }
}


const getLandingsMinMass = async (minMassNumber)=> {
    try{
        const getLandingsMinMass = await Landing.find({mass: {$gt:minMassNumber}}, "id mass -_id")
        console.log(typeof minMassNumber);
        return getLandingsMinMass  
    }
 catch(err){
    console.error(err);
}}

const getLandingFromTo = async (from, to) => {
    try {
    const landingFromTo = await Landing.find({from:{$gt:from}})
    return landingFromTo
    }
    catch(err){
        console.error(err); 
    }
}


module.exports = {
    getAllLandings,
    getLandingsMinMass,
    getLandingFromTo
}