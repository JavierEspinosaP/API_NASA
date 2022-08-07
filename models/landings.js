
const Landing = require('../schemas/landings')

const getAllLandings = async () => {
    try{
        const getLandings = await Landing.find({},"-_id");
        return getLandings
    }
    catch(err){
        console.error(err);
    }
}
getAllLandings()

// const getLandingFromTo = async (from, to) => {
//     try {
//         if(from, to){
//             console.log(typeOf parseInt(from, to));
//         const landingFromTo = await Landing.find({from: })
//         }
//     }
// }


module.exports = {
    getAllLandings
}