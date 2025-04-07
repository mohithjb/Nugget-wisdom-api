require('dotenv').config()
const express=require('express')
const app=express()
const mongoose=require('mongoose')

mongoose.connect(process.env.DATABASE_URL)
const db=mongoose.connection
db.on('error',(error)=>{
    console.log(error)
})
db.once('open',()=>{
    console.log('connected to Database')
})

app.use(express.json())

const nuggetRouter=require('./routes/nuggets')
app.use('/nuggets',nuggetRouter)

app.listen(3000,()=>{
    console.log("Server started")
})