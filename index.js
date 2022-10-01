const express = require("express");
const dotenv = require("dotenv");
const App = express();
const cors = require("cors");
const { application } = require("express");
const PORT = process.env.PORT || 8000

// dotenv.config({path:"./.env"});
require("./db/conn");

//   all uses 
App.use(cors());      
App.use(express.json());
App.use(require("./auth"));



if(process.env.NODE_ENV == "production"){
    App.use(express.static("frontend/build"))
}




App.listen(PORT,()=>{
    console.log("lisning on port no "+PORT);
})