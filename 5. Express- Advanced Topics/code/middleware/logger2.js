function log2 (req,res,next){
    console.log("authenticating from other file")
    next();
  }
  module.exports = log2