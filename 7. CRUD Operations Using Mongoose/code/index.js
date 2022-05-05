//connect to mongo db database
const mongoose = require('mongoose') //gives us a simple api to work with mongodb database
mongoose.connect('mongodb://localhost/playground') //connecct with mongodb (mongo wil automativally create databse of playground)
  //connect method return promise
    .then(()=>{console.log('connected to mongo db')})
    .catch((err)=>{console.error('could not connect to mongodb',err)})

//schema

const courseSchema = new mongoose.Schema({
  name:String,
  author:String,
  tag:[ String ],
  date: {type:date, default:Date.now},
  isPublished:Boolean,
})

//model
//Course ->class -> collection
const Course = mongoose.model("Course",courseSchema)
//course -> object -> document
const course = new Course({
  name:"Node Js",
  author:"dhara",
  tag:[ "node" , "backend" ],
  isPublished:true,
})