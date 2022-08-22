
const User = require('../schemas/userSchemas')

const createUsers = async (req, res) => {
    console.log("Esto es el console.log de lo que introducimos por thunder", req.body); // Objeto recibido de landing nuevo
    const newUser = req.body;
    console.log(req.body);
    // Líneas
    //para guardar 
    // en una BBDD SQL o MongoDB
try{let user = new User(newUser) //Crear el objeto landing
    let answer = await user.save() //Guardar objeto en Mondodb
    console.log("Este es el console.log de lo que devuelve la api",answer);

    res.status(200).json({"Message": `User ${answer.title} saved on system`});
}
catch(error){
    console.log(`ERROR:${error.stack}`)
    res.status(404).json({"message" :`Error saving landing`})
}}


module.exports = {
    createUsers
}