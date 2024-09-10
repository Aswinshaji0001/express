// const bodyParser = require("body-parser");
const path = require("path")
const express = require("express")
const app =express();
const PORT = 3000;
// app.use(express.static("templates")) //load index page without using path,sendFile
app.use(express.json()) //without using body parser

// app.use(bodyParser.urlencoded())
// app.get("/",(req,res)=>{

//     res.status(200).sendFile(path.join(__dirname,"templates","index.html")); // load index page
// })
// app.get("/contacts",(req,res)=>{

//     res.status(201).sendFile(path.join(__dirname,"templates","pages","contacts.html")); //load contact page
// })
// app.get("/about",(req,res)=>{

//     res.status(202).sendFile(path.join(__dirname,"templates","pages","about.html")); //load about page
// })
// app.get("*",(req,res)=>{

//     console.log(req.body);
//     res.status(400).sendFile(path.join(__dirname,"templates","pages","error.html")); //load error page
// })
app.get("/",Token,(req,res)=>{    //Token act as middleware 
                                
    console.log("hi");
    res.status(200).send("HELLO FELIX")
})
function Token(req,res,next){
    console.log("middleware");
    next();
}

app.listen(PORT,()=>{
       console.log(`server started at http://localhost:${PORT}`);
    
})
