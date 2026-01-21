// SERVER 

import express from "express";
import fs from "fs";

const server=express();




// allow json parsing
server.use(express.json());



const users = [
    { id: 1, name: "Alice", email: "alice@example.com" },
    { id: 2, name: "Bob", email: "bob@example.com" },
    { id: 3, name: "Charlie", email: "charlie@example.com" }
];


// GET POST DELETE PUT PATCH


server.get("/",(req,res)=>{

    res.status(200).send("<h1>Hello server</h1>");

})

// Get with param

// server.get("/users/:id",(req,res)=>{
//     // parameter 

//     const param=req.params.id;

//     // logic 
//     res.status(200).send(`the parameter is : ${param}`)
// })



server.get("/users",(req,res)=>{
   

    res.status(200).json(users)
})




// Get single user 


server.get("/users/:id",(req,res)=>{
    const paramsId=req.params.id;

    const user=users.find((el)=>el.id==paramsId);

    user!=undefined?res.status(200).json(user):res.status(404).json({})
})

// endpoints courses
// server.get("/courses",(req,res)=>{
//     // list from db all courses
// })



// server.post("/url",(req,res)=>{
// // 

// })





// server.put("url",())
// server.patch("url",())


// post method 


// server.post("/users",(req,res)=>{
//     //
//     const {id,name,age}=req.body;

//     res.status(201).send(`data received : ${id}  , ${name} , ${age}`)

// })


server.post("/createFile",(req,res)=>{
    // Get req body

    const {filename,content}=req.body;

     fs.writeFile(`${filename}.txt`,content,(err)=>{
        if(!err){
            res.status(201).json({msg:"file created"})
        }else{
            res.status(500).json({msg:"Internal server error"});

        }
     })
})




















server.listen(3001,()=>{
    console.log("the server is running in http://localhost:3001");
})



// fetch(" http://localhost:3001")
// .then()





// http://localhost:3001/users/10




// fetch("http://localhost:3001/users",
// {
//    method:"POST",
// headers:{"Content-Type":"application/json"},

// body:JSON.stringify({id:1,name:"samir",age:30})
//   
// })



// post request create text with content from the request body




// {
//     filename:"cv",
//     content:"this is content jjjjs jsdbsjdjsdgsj"
// }

