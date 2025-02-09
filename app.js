const express = require("express");
const app = express();
let path = require("path");

let port = 8080;
app.set("view engine","ejs");
app.set("views",path.join(__dirname,"views"));

app.get("/",(req,res)=>{
    res.render("home.ejs");
})

app.listen(port,(req,res)=>{
    console.log("app listening on port ",port);
})
