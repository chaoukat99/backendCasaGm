// 

// const fs=require("fs");
import fs from "fs";



// CRUD  


// WRite

// fs.writeFile("example.txt","hello world 3",(err)=>{
//     if(!err){
//         console.log("file created");
//     }else{
//         console.log("erreur")
//     }
// })

// append

// fs.appendFile("example.txt","\nthis is a  new line",(err)=>{
//     if(!err){
//         console.log("file created");
//     }else{
//         console.log("erreur")
//     }
// })



// READ 

// fs.readFile("index.html",(err,data)=>{
// if(!err){
//     console.log(data.toString())
// }else{
//     console.log("erreur");
// }
// })



// 




// fs.mkdir("images",(err)=>{
//     if(!err){
//         console.log("folder created")
//     }else{
//         console.log("erreur");
//     }
// })

// fs.writeFile("./images/test1.txt","hello",(err)=>{
//     if(!err){
//         console.log("file created");
        
//     }else{
//         console.log("erreur")
//     }
// })



// READ 

// fs.readdir("images",(err,files)=>{
//     if(!err){
//         console.log(files)
// let j=0;
//         for(let i of files){
//               ++j;
//             fs.readFile("./images/"+i,(err,data)=>{
//                if(!err){
//                  console.log("File "+j+" "+ data.toString())
//                }else{
//                 console.log("erreur of reading file  ");
//                 console.log(err)
//                }
//             })
//         }
//     }else{
//         console.log("erreur")
//     }
// })



fs.rmdir("images",(err)=>{
    if(!err){
        console.log("folder deleted ");
    }else{
        console.log("erreur");
    }
})