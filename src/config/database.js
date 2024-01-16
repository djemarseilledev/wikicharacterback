import mysql from "mysql2/promise";

const pool = mysql.createPool({
    host: process.env.DB_HOST,
    database : process.env.DB_NAME,
    user : process.env.DB_USER,
    password : process.env.DB_PASS,
    waitForConnections : true,  // on attend que la cx soit disponible
    connectionLimit : 10, // nom de connexions maximum
    queueLimit: 0 // nom de connexions maximum dans la file d'attente

}) ;

pool.getConnection().then((connection)=> {
    console.log(` Connected to ${process.env.DB_NAME} successfull`);
    connection.release();
})

export default pool;