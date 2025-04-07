const mongoose=require('mongoose')

const nuggetSchema=new mongoose.Schema({
    text:{
        type:String,
        required:true
    },
    author:{
        type:String,
        required:true
    }
})

module.exports= mongoose.model('nugget',nuggetSchema)