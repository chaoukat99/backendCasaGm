// SERVER 

import express from "express";
import fs from "fs";
import cors from "cors";
import { rateLimit } from 'express-rate-limit'


const server=express();


server.use(express.urlencoded({ extended: true }));

server.use(express.json());
const limiter = rateLimit({
	windowMs: 1 * 60 * 1000, // 1 minutes
	limit: 4, // Limit each IP to 4 requests per `window` (here, per 15 minutes).
	standardHeaders: 'draft-8', // draft-6: `RateLimit-*` headers; draft-7 & draft-8: combined `RateLimit` header
	legacyHeaders: false, // Disable the `X-RateLimit-*` headers.
	ipv6Subnet: 56, // Set to 60 or 64 to be less aggressive, or 52 or 48 to be more aggressive
    message:{error:"chrif rak 3aya9ti bedel sa3a b ukhra"}
	// store: ... , // Redis, Memcached, etc. See below.
})





server.use(limiter)

server.use(cors({
origin:"*"  
}))

server.set("view engine","ejs");
server.set('views', './views');


const custoMiddleware=(req,res,next)=>{

    
    // check url apikey
    if(!req.query.apikey){
          res.status(400).json({msg:"No api key"})
    }else{
        if(req.query.apikey!=="bassem123"){
            res.status(403).json({
                msg:"Unauthorized"
            })
        }else{
            next();
        }
    }

}

const RequestMapping="/api/v1";

server.use(RequestMapping,custoMiddleware);



server.get(`${RequestMapping}/list-users`,(req,res)=>{
    res.status(200).json(users)
})



// allow json parsing



const users = [
    { id: 1, name: "Alice", email: "alice@example.com" },
    { id: 2, name: "Bob", email: "bob@example.com" },
    { id: 3, name: "Charlie", email: "charlie@example.com" }
];


// GET POST DELETE PUT PATCH

// send text json html
//  
// server.get("/",(req,res)=>{

//     res.status(200).send("<h1>Hello server</h1>");

// })

const username="Bassem";
server.get("/",(req,res)=>{
    res.render("index",{username});
})




server.get("/about",(req,res)=>{
    res.render("about",{users});
})


let message;

server.get(`${RequestMapping}/users/:id`,(req,res)=>{

    const userId=req.params.id;
    const finder=users.find(el=>el.id==userId);
    if(finder!=undefined){
        res.render("single",{finder})
    }else{  
message="User Not Found"
        res.render("about",{message})
    }



})

// Get with param

// server.get("/users/:id",(req,res)=>{
//     // parameter 

//     const param=req.params.id;

//     // logic 
//     res.status(200).send(`the parameter is : ${param}`)
// })



server.post("/submit",(req,res)=>{
    const {age}=req.body;

    res.render("result",{age});
})

// server.get("/users",(req,res)=>{
   

//     res.status(200).json(users)
// })




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







// server.put("/users/:id",(req,res)=>{

//     // Get id 
// const id = req.params.id
//     // Get new Value 

//  const {name,age}=req.body;  
//     // update
//     // uodate logic
// })








// server.patch("/users/:id",(req,res)=>{

//     // Get id 
// const id = req.params.id
//     // Get new Value 

//  const {name,age}=req.body;  
//     // update
//     // update logic
// })





server.delete("/files/:filename",(req,res)=>{


    const filename=req.params.filename;

    fs.unlink(`${filename}.txt`,(err)=>{
        if(!err){
            res.status(200).json({msg:"file deleted"})
        }else{
            res.status(500).json({msg:"Erreur"})

        }
    })
})











server.listen(3001,()=>{
    console.log("the server is running in http://localhost:3001");
})



// HTTP REQUEST f server (GET GET/1  POST PUT PATCH DELETE )


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




// products

// list products get /products
// list single product get /products/10     identity  uiud   x-jshdjs12ès-djsdsh6jdss





// File handling with http request methods 

// Read file content (GET)
// create new file (POST)

// update  (PUT/Patch)

// delete  (DELETE)


// server.get("/posts/:postId/comments/:commentId",())



// server.delete("/post/:postId/comment/:commentId",()=>{

// })



// fetch(`http://localhost:5000/posts/${postIdFromInput}/comments/${commenIdfromInput}`,)



