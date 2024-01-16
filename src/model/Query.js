import pool from "../config/database.js";

class Query {
    static async run(query){
        const [result] = await pool.execute(query);
        console.log("Request query "+result);
        return result;
    }
}

export default Query; 