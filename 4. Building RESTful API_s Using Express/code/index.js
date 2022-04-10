const express = require('express')
const Joi = require('joi')

const app = express()
app.use(express.json())
app.get('/',(req,res)=>{
    res.send('hello!!!!!-----!!')
})

app.get('/api/courses',(req,res)=>{
    res.send([1,2,3])
})

app.get('/api/courses/:id',(req,res)=>{
    // res.send(req.params) //in object form
    res.send(req.params.id)

})

app.get('/api/:month/:year',(req,res)=>{
    res.send(req.params)
})
//if you want to define property name in url using ? example :http://localhost:5000/api/check/?id=2
app.get('/api/check',(req,res)=>{
    res.send(req.query)
})

const courses=[
    {id:1, name:'course1'},
    {id:2, name:'course2'},
    {id:3, name:'course3'},

]


app.get('/courses/:id',(req,res)=>{
    const course = courses.find(c=>c.id===parseInt(req.params.id))
    if(!course) res.status(404).send('bhai nhi milrah');
    res.send(course)
})

app.post('/newcourse',(req,res)=>{
    const course = {id:4, name:'course4'}
    courses.push(course)
    res.send(course)

})
app.post('/newcourses',(req,res)=>{
    const course = {id:courses.length+1, name:req.body.name};
    courses.push(course)
    res.send(course)

})

app.put('/newcourses/:id',(req,res)=>{
    const course = courses.find(c=>c.id===parseInt(req.params.id))
    if(!course) res.status(404).send('bhai nhi milrah');
    
    
   const {error}= validateCourse(req.body)
   if(error){
       res.status(400).send(error.detail[0].message)
       return
   }
   course.name=req.body.name;
   res.send(course)


})
function validateCourse(courses){
  const schema={
      name:Joi.string().min(3).required()

  }
    return Joi.validate(courses,schema)

}


const port = process.env.PORT || 4000;
console.log(process.env.PORT)
app.listen(port, ()=>console.log(`listening... ${port}`))

