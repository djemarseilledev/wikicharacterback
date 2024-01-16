import express from 'express';
import "dotenv/config";
import router from "./router/index.routes.js";

const {LOCAL_PORT} = process.env;
// const LOCAL_PORT ;
// console.log(process.env.LOCAL_PORT);
const app = express();

// app.use(express.urlencoded({extended: true}));

app.use(router);

app.listen(LOCAL_PORT, () =>{
    console.log("Listenning at http://localhost:"+LOCAL_PORT);
})