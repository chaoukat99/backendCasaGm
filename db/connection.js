// connection database
import mongoose from "mongoose";


mongoose.connect('mongodb://127.0.0.1:27017/gmmorocco')
  .then(() => console.log('Connected!'))
  .catch((e)=>console.log("connection Error"))


// schemas / model


const UserSchema=mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    age:{
        type:Number,
        min:15
    },
    profession:{
        type:String,
        required:true
    }
})



// create Collection  (model)

const Users=mongoose.model("users",UserSchema);




Users.find()
.then(data=>console.log(data))
.catch(err=>console.log("erreur"));



ORM