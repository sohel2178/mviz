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
   .limit(200)
   .then(movies=>{
      
      return res.status(200).json(movies)
   })
   .catch(error=>res.status(500).json(error))
})

router.get("/:id/movies/:query",(req,res)=>{
   console.log(req.params)
   let regexp = new RegExp("^"+ req.params.query,'i');
   Movie.find({category:mongoose.Types.ObjectId(req.params.id),title:regexp})
   .populate('category')
   .then(movies=>{
      console.log(movies)
      return res.status(200).json(movies)
   })
   .catch(error=>res.status(500).json(error))


})



router.get("/:id/movies/year/:year",(req,res)=>{
   console.log(req.params)

   Movie.find({category:mongoose.Types.ObjectId(req.params.id)})
   .populate('category')
   .then(movies=>res.status(200).json(movies.filter(movie=>movie.release_date.split("-")[0]==req.params.year)))
   .catch(error=>res.status(500).json(error))
  
})


router.delete('/:id',(req , res)=>{
   Category.deleteOne({_id:req.params.id})
   .then(()=>res.status(200).json({"message":"Category Deleted"}))
   .catch(error=>res.status(500).json(error))
   
})




module.exports = router