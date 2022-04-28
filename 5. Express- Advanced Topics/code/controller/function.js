const Joi = require("joi");

//array of object
const courses = [
    { id: 1, name: "course1" },
    { id: 2, name: "course2" },
    { id: 3, name: "course3" },
  ];
  
 getcourses=(req, res) => {
    res.send(courses);
  }
  
  getcourse=(req, res) => {
    const course = courses.find((c) => c.id === parseInt(req.params.id)); //params means :__
    if (!course) return res.status(400).send("bhai nhi milrah");
    res.send(course);
  };
  
  
  //run the program -> go to postman -> set post -> add url -> go to body -> select raw -> select json - > add ur course name then send
  postcourse = (req, res) => {
  
  //object destructuring {error} will directly call error object FROM validate  cOURSE 
    const { error } = validateCourse(req.body); //{error} => result.error
     if (error) return res.status(400).send(error.details[0].message);
     
    const course = { id: courses.length + 1, name: req.body.name };
    courses.push(course);
    res.send(course);
  };
  //update
  putcourse = (req, res) => {
    const course = courses.find((c) => c.id === parseInt(req.params.id));
    if (!course) return res.status(400).send("bhai nhi milrah");
  
    //{error} =>result.error
    const { error } = validateCourse(req.body);
    if (error) return res.status(400).send(error.details[0].message);
  
    //update course
    course.name = req.body.name;
    res.send(course);
  };
  
  deletecourse = (req, res) => {
    const course = courses.find((c) => c.id === parseInt(req.params.id));
    if (!course) return res.status(400).send("bhai nhi milrah");
  
    //{error} =>result.error
    const index = courses.indexOf(course);
    courses.splice(index,1);
  
    //show course
    res.send(course);
  };
  
  function validateCourse(data) {
      if (!red.body.name || req.body.name.length < 3) {
        //400 bad req
        res.status(400).send("name req and should be least 3 character");
        return;
      }
    //instead if you can use joi  -> schema define properties
  
    const schema = Joi.object({ name: Joi.string().min(3).required() });
  
    return schema.validate(data);
  }
  
  module.exports = {getcourses,getcourse,postcourse,putcourse,deletecourse}