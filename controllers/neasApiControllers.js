const Nea = require('../models/neasModels')

const getNeas = async (req, res) => {

    let minimum_mass = req.query.minimum_mass

    let from = req.query.from
    let to = req.query.to

    const minMassNumber = parseInt(minimum_mass)

    if (minMassNumber) { //FIND BY MIN MASS
        try {
            let NeaMinMass = await Nea.getNeasMinMass(minMassNumber)
            res.status(200).json(NeaMinMass);
        }
        catch (error) {
            console.log(`ERROR: ${error.stack}`)
            res.status(404).json({ "message": "Nea not found" });
        }
    }

    else if (from && to) { //FIND BY DATES


        try {
            let NeaFromTo = await Nea.getNeaFromTo(from, to)
            res.status(200).json(NeaFromTo);
        }
        catch (error) {
            console.log(`ERROR: ${error.stack}`)
            res.status(404).json({ "message": "Nea not found" });
        }
    } else if (from) { //FIND BY DATES

        try {
            let neaFromTo = await Nea.getNeaFrom(from)
            res.status(200).json(neaFromTo);
        }
        catch (error) {
            console.log(`ERROR: ${error.stack}`)
            res.status(404).json({ "message": "Nea not found" });
        }
    } else if (to) { //FIND BY DATES

        try {
            let neaFromTo = await Nea.getNeaTo(to)
            res.status(200).json(neaFromTo);
        }
        catch (error) {
            console.log(`ERROR: ${error.stack}`)
            res.status(404).json({ "message": "Nea not found" });
        }

    }
    else {
        const Neas = await Nea.getAllNeas();
        res.status(200).json(Neas);
    }
}

const getNeaByMass = async(req, res) => {
    try{
     let NeaMass =  await Nea.getNeaMass(req.params.mass);
    res.status(200).json(NeaMass)   
    }
    catch {
    console.log(`ERROR: ${error.stack}`)
    res.status(404).json({ "message": "Nea not found" });  
    }
}

const getNeaByClass = async(req, res) => {
    try{
     let NeaMass =  await Nea.getNeaClass(req.params.class);
    res.status(200).json(NeaMass)   
    }
    catch(error){
    console.log(`ERROR: ${error.stack}`)
    res.status(404).json({ "message": "Nea not found" });
    }
}


const createNea = async (req, res) => {
    try{
     let newNea = await Nea.createNeas(req.body);
    res.status(200).json(newNea)   
    console.log("Nea saved successfully: ", req.body);
    }
    catch(error){
    console.log(`ERROR: ${error.stack}`)
    res.status(404).json({ "message": "Nea not created" });
    }
    
}

const updateNea = async (req,res)=>{
    try {
  
    await Nea.updateNeas(req.body);
        console.log("esto es req.body", req.body);
        res.send("Nea updated");
    } 
    catch(error){
        console.log(`ERROR: ${error.stack}`)
        res.status(404).json({ "message": "Nea not updated" });
        }
}

const deleteNea = async (req,res)=>{
    try {
        let deleteNea = req.params.id;
        await Nea.deleteNeas(deleteNea);
        res.send("Nea deleted");
    }     
    catch(error){
        console.log(`ERROR: ${error.stack}`)
        res.status(404).json({ "message": "Nea not deleted" });
        }
}


const NeaControllers = {
    getNeas,
    getNeaByMass,
    getNeaByClass,
    createNea, 
    updateNea,
    deleteNea
}

module.exports = NeaControllers;