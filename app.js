import express from "express";
import connection from "./connection.js"
import env from "dotenv"
import router from "./router.js";




env.config()
const app = express();
app.use("/api",router)
app.get("/",(req,res)=>{
    res.send("Hai felix");
})
connection().then(()=>{
    app.listen(process.env.PORT,()=>{
        console.log("server started");
    });
}).catch((error)=>{
    console.log(error);
})
