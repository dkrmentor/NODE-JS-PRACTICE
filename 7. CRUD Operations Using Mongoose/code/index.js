//connect to mongo db database
const mongoose = require('mongoose') //gives us a simple api to work with mongodb database
mongoose.connect('mongodb://localhost/playground') //connecct with mongodb (mongo wil automativally create databse of playground)
  //connect method return promise
    .then(()=>{console.log('connected to mongo db')})
    .catch((err)=>{console.error('could not connect to mongodb',err)})

//schema