import Query from "../model/Query.js";

const homePost = async( req, res) => {
    try{
        const request = "SELECT name FROM user" ;
        const users =   await  Query.run(request);
        res.json( users);
    }catch(error){
        console.log(error);
    }
}

export  {homePost};