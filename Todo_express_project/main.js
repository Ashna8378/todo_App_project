import express from 'express'
import cors from "cors"  //middleware 
const app = express()

import router from "./routes.js"
import mongoose from 'mongoose'  // here import mongoose library to interact with mongoDB



const url = `mongodb://localhost:27017/todo` // here is my connection url 

mongoose.connect(url)         
.then(()=>console.log("connected to mongodb"))
.catch(()=>console.log("conncetion failed to mongodb"))

app.use(express.json())                      // here we are converting js format string into js object       
app.use(express.urlencoded({extended:true}))  // converting url encoded string into js object
app.use(cors())  



app.get("/",(req,res)=>{
    res.sendFile('index.html', { root: 'frontend' });
})
app.use("/",router)

const PORT = 4000
app.listen(PORT, function(){
    console.log(`server is running on port ${PORT}`)
})



