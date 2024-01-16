import Query from "../model/Query.js";

const homeGet = async( req, res) => {
    try{
        const query = "SELECT * FROM characters" ;
        const characters =   await  Query.run(query);
        console.log(characters);
        res.json(
            {msg: "HOME => LISTE-PERSONNAGES" , characters } 
        );
        // res.render("layout/main.ejs", { 
        //     template: "../pages/auth/register.ejs", 
        //     randomUser });
    }catch(error){
        console.log(error);
    }
}


const listCharacterGet = async( req, res) => {
    try{
        const query = "SELECT * FROM characters " ;
        const characters =   await  Query.run(query);
        res.json(
            {msg: "LISTE-PERSONNAGES" , characters } 
        );
        // res.render("layout/main.ejs", { 
        //     template: "../pages/auth/register.ejs", 
        //     randomUser });
    }catch(error){
        console.log(error);
    }
}

// vue de detail d'un personnage
const listCharacterGetId = async( req, res) => {
    try{
        const id = parseInt(req.params.id);
        const query = "SELECT * FROM characters WHERE id = "+id ;

        const characters =   await  Query.run(query);
        res.json(
            {msg: "LISTE-PERSONNAGES" , characters } 
        );

    }catch(error){
        console.log(error);
    }
}


const authGet = async( req, res) => {
    try{
        // const id = parseInt(req.params.id);
        // const query = "SELECT * FROM characters WHERE id = "+id ;

        // const characters =   await  Query.run(query);
        res.json(
            {msg: "Authentification authGet"  } 
        );

    }catch(error){
        console.log(error);
    }
}


const loginGet = async( req, res) => {
    try{
        // const id = parseInt(req.params.id);
        // const query = "SELECT * FROM characters WHERE id = "+id ;

        // const characters =   await  Query.run(query);
        res.json(
            {msg: "Authentification loginGet"  } 
        );

    }catch(error){
        console.log(error);
    }
}

const suscribeGet = async( req, res) => {
    try{
        // const id = parseInt(req.params.id);
        // const query = "SELECT * FROM characters WHERE id = "+id ;

        // const characters =   await  Query.run(query);
        res.json(
            {msg: "Authentification suscribeGet"  } 
        );

    }catch(error){
        console.log(error);
    }
}

const get404 = async( req, res) => {
    try{
        // const id = parseInt(req.params.id);
        // const query = "SELECT * FROM characters WHERE id = "+id ;

        // const characters =   await  Query.run(query);
        res.json(
            {msg: "Authentification get404"  } 
        );

    }catch(error){
        console.log(error);
    }
}

export  {listCharacterGetId, listCharacterGet,homeGet, authGet , suscribeGet, loginGet, get404} ;