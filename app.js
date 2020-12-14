const express = require('express')
const app = express()
const bodyParser = require('body-parser');

const Category = require('./Routes/category')
const Movie = require('./Routes/movie')
app.use(bodyParser.json());

require("./initDB")

app.use('/categories',Category)
app.use('/movies',Movie)



app.listen(3000,()=>{
console.log("Api Activated")
})