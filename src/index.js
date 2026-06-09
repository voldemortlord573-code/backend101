import dns from "dns";

dns.setServers(["8.8.8.8", "8.8.4.4"]);

import dotenv from "dotenv";
dotenv.config({
    path: './.env'
})
import { app } from "./app.js";

console.log(process.env.CLOUDINARY_API_KEY)

console.log(process.cwd());
// import mongoose from "mongoose";
// import { DB_NAME } from "./constants";
import connectDB from "./db/index.js";

connectDB()
.then(() => {
    app.listen(process.env.PORT || 8000, () => {
        console.log(`Server is running at port ${process.env.PORT}`)
    });
})
.catch((error) => {
    console.log("MongoDB connnection failed !!! ", error);
    
})
























/*
import express from "express";
const app = express();

;(async () => {
    try{
        await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`);
        app.on("error", (error) => {
            console.log("ERROR : ", error);
            throw error;
        })

        app.listen(process.env.PORT, () => {
            console.log(`App is listening on port ${process.env.PORT}`);
        });
    }
    catch(error){
        console.error("ERROR : ", error)
        throw error;
    }
})()
*/