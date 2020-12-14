const express = require('express')
const mongoose = require('mongoose')
const Movie = require("../Models//movie")
const router = express.Router()



router.get('/',(req , res)=>{
    Movie.find()
    .then(movies=>res.status(200).json(movies))
    .catch(error=>res.status(500).json(error))
    
})

router.get('/popular',(req , res)=>{
    Movie.find({is_popular:true})
    .then(movies=>res.status(200).json(movies))
    .catch(error=>res.status(500).json(error))
})

router.get('/featured',(req , res)=>{
    Movie.find({is_featured:true})
    .then(movies=>res.status(200).json(movies))
    .catch(error=>res.status(500).json(error))
})


router.post('/',(req , res)=>{
    const movieObj ={
        category:req.body.category,

        file_size:req.body.file_size,

        imdb_rating:req.body.imdb_rating,

        video_quality:req.body.video_quality,

        file_type:req.body.file_type,

        play_time:req.body.play_time,

        release_date:req.body.release_date,

        language:req.body.release_date,

        views:req.body.views,

        downloaded:req.body.downloaded,

        title:req.body.title,

        image_url:req.body.image_url,

        description:req.body.description,

        video_url:req.body.video_url

    }



    const movie = new Movie (movieObj)

    movie.save()
    .then(movie=>res.status(200).json(movie))
    .catch(error=>res.status(500).json(error))
})


router.get('/:id',(req , res)=>{
    Movie.findOne({_id:req.params.id})
    .then(movie=>res.status(200).json(movie))
    .catch(error=>res.status(500).json(error))
    
})

router.put('/:id',(req , res)=>{
   const {category,file_size,imdb_rating,video_quality,
    file_type,play_time,release_date,
    language,views,downloaded,title,image_url,description,
    video_url,is_popular,is_featured} = req.body

    Movie.findOne({_id:req.params.id})
    .then(movie=>{
        if(category){
            movie.category = category
        }
        if(file_size){
            movie.file_size = file_size
        }
        if(imdb_rating){
            movie.imdb_rating = imdb_rating
        }
        if(video_quality){
            movie.video_quality = video_quality
        } 
        if(file_type){
            movie.file_type = file_type
        }
        if(play_time){
            movie.play_time = play_time
        }
        if(release_date){
            movie.release_date = release_date
        }
        if(language){
            movie.language = language
        }
        if(views){
            movie.views = views
        }
        if(downloaded){
            movie.downloaded = downloaded
        }
        if(title){
            movie.title = title
        }
        if(image_url){
            movie.image_url = image_url
        }
        if(description){
            movie.description = description
        }
        if(video_url){
            movie.video_url = video_url
        }
        movie.is_popular = is_popular
        movie.is_featured = is_featured
        
        movie.save()
        .then(movie=>res.status(201).json(movie))
        .catch(error=>res.status(500).json(error))
    })

    .catch(error=>res.status(500).json(error))
    
})

router.delete('/:id',(req , res)=>{
    Movie.deleteOne({_id:req.params.id})
    .then(()=>res.status(200).json({"message":"Movie Deleted"}))
    .catch(error=>res.status(500).json(error))
    
})


module.exports = router