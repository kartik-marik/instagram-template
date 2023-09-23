const express=require("express");
const app=express();
const port=8080;
const path=require("path");

app.listen(port,()=>{
    console.log(`listening on port ${port}`);  
});

// app.use(express.static("public"));
app.use(express.static(path.join(__dirname,"public")));

// app.set("view engine","ejs");
app.set("views",path.join(__dirname,"/views"));
app.get("/",(req,res)=>{
    res.render("home.ejs");
});

app.get("/cal",(req,res)=>{
    res.render("calculate.ejs");
});

app.get("/dice",(req,res)=>{
    let diceval=Math.floor(Math.random()*6+1);
    res.render("rolldice.ejs",{num:diceval});
});

app.get("/ig/:username",(req,res)=>{
    let {username}=req.params;
    const instadata=require("./data.json");
    const data=instadata[username];
    console.log(data);
    if(data){
        res.render("insta.ejs",{data});
    }else{
        res.render("error.ejs");
    }
});