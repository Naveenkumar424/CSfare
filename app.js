const express = require("express");
const app = express();
let path = require("path");

let port = 9000;
app.set("view engine","ejs");
app.set("views",path.join(__dirname,"views"));
app.use(express.static(path.join(__dirname,"public/css")));
app.use(express.static(path.join(__dirname,"public/js")));

app.get("/",(req,res)=>{
    let data = require("./data.json");
    res.render("home",{data:data});
});

app.get("/:gate",(req,res)=>{
    let {gate} = req.params;
    if(gate == ":NOT"){
        let data = require("./data.json");
        data = data[gate];
        console.log('Filtered data is',data);
        console.log(`User visited are at ${gate}`);
        res.render("not",{data:data})
    }else{
        let data = require("./data.json");
        data = data[gate];
        console.log('Filtered data is',data);
        console.log(`User visited are at ${gate}`);
        res.render("gate",{data:data})
    }
});

app.get("/:test/:logic",(req,res)=>{
    let{test,logic} = req.params;
    if(logic == "NOT"){
        res.render("notTest",{data:logic});
    }else{
        res.render("test",{data:logic});
    }
});

app.listen(port,(req,res)=>{
    console.log("App listening on port ",port);
});