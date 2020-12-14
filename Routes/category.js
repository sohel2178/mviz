const express = require('express')
const mongoose = require('mongoose')
const Category = require("../Models/category")
const Movie = require("../Models/movie")
const router = express.Router()



router.get('/',(req , res)=>{
   Category.find()
   .then(categories=>res.status(200).json(categories))
   .catch(error=>res.status(500).json(error))
   
})

router.post('/', (req , res)=>{
    const CategoryObj = {
       name : req.body.name
    }   
   
    const category = new Category(CategoryObj)
    
   category.save()
   .then(category=>res.status(200).json(category))
   .catch(category=>res.status(500).json(category))
})

router.get('/:id',(req , res)=>{
   Category.findOne({_id:req.params.id})
   .then(categorie=>res.status(200).json(categorie))
   .catch(error=>res.status(500).json(error))
   
})




router.get("/:id/movies",(req,res)=>{
 
   Movie.find({category:mongoose.Types.ObjectId(req.params.id)})
   .populate('category')
   .then(movies=>{
      
      return res.status(200).json(movies)
   })
   .catch(error=>res.status(500).json(error))
})

router.delete('/:id',(req , res)=>{
   Category.deleteOne({_id:req.params.id})
   .then(()=>res.status(200).json({"message":"Category Deleted"}))
   .catch(error=>res.status(500).json(error))
   
})



module.exports = router