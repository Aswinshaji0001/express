const bodyParser = require("body-parser");
const express = require("express")
const app =express();
const PORT = 3000;

app.use(bodyParser.urlencoded())
app.post("/",(req,res)=>{

    console.log(req.body);
    res.status(200).send("Hello world")
})

app.listen(PORT,()=>{

   
    console.log(`server started at http://localhost:${PORT}`);
    
})
