function log(req,res,next){
    console.log("logging other file ...")
    next();
  }
  module.exports = log