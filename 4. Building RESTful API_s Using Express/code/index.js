const express = require("express");
// const req = require("express/lib/request");
// const res = require("express/lib/response");
const Joi = require("joi");

const app = express();
app.use(express.json()); //MIDDLEWARE -> it force data to be in json format
// app.get("/", (req, res) => {
//   res.send("hello!!!!!-----!!");
// });

// app.get("/api/numbers", (req, res) => {
//   res.send([1, 2, 3]);
// });

// app.get("/api/number/:id", (req, res) => {
//   // res.send(req.params) //in object form
//   res.send(req.params.id);
// });

// app.get("/api/:month/:year", (req, res) => {
//   res.send(req.params);
// });
// //if you want to define property name in url using ? example :http://localhost:5000/api/check/?id=2
// app.get("/api/check", (req, res) => {
//   res.send(req.query);
// });
//array of object
const courses = [
  { id: 1, name: "course1" },
  { id: 2, name: "course2" },
  { id: 3, name: "course3" },
];

app.get("/api/newcourses", (req, res) => {
  res.send(courses);
});

app.get("/api/newcourses/:id", (req, res) => {
  const course = courses.find((c) => c.id === parseInt(req.params.id)); //params means :__
  if (!course) return res.status(400).send("bhai nhi milrah");
  res.send(course);
});

// app.post('/api/newcourse',(req,res)=>{
//     const course = {id:4, name:'course4'}
//     courses.push(course)
//     res.send(course)

// })

//run the program -> go to postman -> set post -> add url -> go to body -> select raw -> select json - > add ur course name then send
app.post("/api/newcourses", (req, res) => {

//object destructuring {error} will directly call error object FROM validate  cOURSE 
  const { error } = validateCourse(req.body); //{error} => result.error
   if (error) return res.status(400).send(error.details[0].message);
   
  const course = { id: courses.length + 1, name: req.body.name };
  courses.push(course);
  res.send(course);
});
//update
app.put("/api/newcourses/:id", (req, res) => {
  const course = courses.find((c) => c.id === parseInt(req.params.id));
  if (!course) return res.status(400).send("bhai nhi milrah");

  //{error} =>result.error
  const { error } = validateCourse(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  //update course
  course.name = req.body.name;
  res.send(course);
});

app.delete("/api/newcourses/:id", (req, res) => {
  const course = courses.find((c) => c.id === parseInt(req.params.id));
  if (!course) return res.status(400).send("bhai nhi milrah");

  //{error} =>result.error
  const index = courses.indexOf(course);
  courses.splice(index,1);

  //show course
  res.send(course);
});

function validateCourse(data) {
  //   if (!red.body.name || req.body.name.length < 3) {
  //     //400 bad req
  //     res.status(400).send("name req and should be least 3 character");
  //     return;
  //   }
  //instead if you can use joi  -> schema define properties

  const schema = Joi.object({ name: Joi.string().min(3).required() });

  return schema.validate(data);
}
const port = process.env.PORT || 9000;

app.listen(port, () => console.log(`listening... ${port}`));
