const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv= require("dotenv");
const cors = require("cors");
app.use(cors());

dotenv.config();
const userRoute = require("./router/userRoute");
const userLoginRoute = require("./router/userLoginRoute")


app.use(express.json());


mongoose.connect(process.env.URI)
.then(()=>{
    console.log("connected succesfully");
    app.listen(4000);
}).catch((error)=>{
    console.log("error", error);
})


// default path
app.use("/api/user",userRoute);
app.use("api/auth", userLoginRoute);


