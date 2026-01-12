

// web server

// req
// url 
// method get post delete ...
// 
//  res  content 
// status 200 404 ....


// import http package from nodes 
// const http=require("http");
import http from "http";


// const fs=require("fs");
import fs from "fs"

// module 
// common js 

let users=[
    {
        id:1,
        name:"test1",
        desc:"test description"
    },
    {
        id:2,
        name:"test1",
        desc:"test description"
    },
    {
        id:3,
        name:"test1",
        desc:"test description"
    },
]



const server = http.createServer((req,res)=>{

    // Logic server 

    if(req.method=="GET" && req.url=="/"){
      
        fs.readFile("index.html",(err,data)=>{
            if(!err){
                  res.writeHead(200,"OK Bro");
                res.end(data.toString())
            }else{
                res.writeHead(500,"Internal server Error");
                res.end("error")
            }
        })
    }else if(req.method=="GET" && req.url=="/users"){

 fs.readFile("users.json",(err,data)=>{
            if(!err){
                  res.writeHead(200,"OK Bro");
                res.end(data.toString())
            }else{
                res.writeHead(500,"Internal server Error");
                res.end("error")
            }
        })
        
       
    }
    else{
        res.writeHead(404,"Url unfound");
        res.end("<h1>ERROR 404 page not FOUND </h1>")
    }

})



// deploy the server 


server.listen(3000,()=>console.log("server is running on http://localhost:3000"));






// http://localhost:3000/



// file 1 : hi
// file 2 : hello