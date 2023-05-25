//===========/imports/============
import * as dotenv from "dotenv";
import express from "express";
import morgan from "morgan";
//======== All routs =========
import root_index from "./src/router/root_index.js";

// ==== environment variable ======
const {PORT} = process.env;
const server = express();

// ======= middlewares ========
dotenv.config();
server.use(morgan('dev'))
server.use(express.json())
server.use(express.urlencoded({"extended":true}))

//======== All routs =========
server.use(root_index)

//======== Listener on Port =======
server.listen(PORT,()=>{
    console.log(`Server on port: localhost:${PORT}`)
});