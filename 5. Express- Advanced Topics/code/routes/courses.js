const express = require("express");
const router = express.Router();
const {getcourses,getcourse,postcourse,putcourse,deletecourse} = require('../controller/function')

  
  router.get("/",getcourses);
  
  router.get("/:id",getcourse);
   
  router.post("/",postcourse);

  router.put("/:id", putcourse);
  
  router.delete("/:id", deletecourse);
  
   
  module.exports = router