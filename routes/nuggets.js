const express=require('express')
const router=express.Router()
const Nugget=require('../models/nugget')
//1. GET /nuggets

router.get('/',async(req,res)=>{
  try{
    const nuggets=await Nugget.find()
    res.json(nuggets)
  }
  catch(error){
    res.status(500).json({message:error.message})
  }
})

//2. GET /nuggets/random
router.get('/random',async(req,res)=>{
    const count =await Nugget.countDocuments()
    if(count ===0){
        return res.status(404).json({message:'no nuggets found'})
    }
    const randomNug=Math.floor(Math.random()*count)
    const nugget=await Nugget.findOne().skip(randomNug)
    res.status(200).json(nugget)
})

//3. POST /nuggets
router.post('/',async(req,res)=>{
    const nugget=new Nugget({
        text:req.body.text,
        author:req.body.author
    })
    try{
        const newNugget=await nugget.save()
        res.status(201).json(newNugget)
    }catch(error){
        res.status(400).json({message:error.message})
    }
})

//4. DELETE /nuggets/{id}
router.delete('/:id',getNugget,async(req,res)=>{
    try{
       const nugget = await Nugget.findByIdAndDelete(req.params.id);
        res.status(200).json({message:'Deleted Nugget'})
    }catch(error){  
        res.status(404).json({message:error.message})
    }

    
})

//Middleware
async function getNugget(req,res,next){
    let nugget
    try{
        nugget=await Nugget.findById(req.params.id)
        if(nugget==null){
            return res.status(404).json({message:'Cannot find nugget'})
        }
    }catch(error){
           return res.status(500).json({message:error.message}) 
    }
    res.nugget=nugget
    next()
}

module.exports=router
