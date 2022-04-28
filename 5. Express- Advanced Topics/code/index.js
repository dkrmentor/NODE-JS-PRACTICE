const express = require("express");
const home = require('./routes/home')
const app = express();
const router = express.Router()
const logger = require('./middleware/logger')
const logger2 = require('./middleware/logger2')
const helmet = require('helmet')
const morgan = require('morgan')
const courses = require('./routes/courses')
const config = require('config')



console.log('app'+config.get("name"))
console.log('mail server'+config.get("mail.host"))
// console.log('app'+config.get("mail.password"))
const startupDebugger = require('debug')('app:startup')
const dbDebugger = require('debug')('app:db')
startupDebugger('startup')
dbDebugger('db debuuger')

app.set('view engine' , 'pug')
app.set('views','./views')
app.get('/chk',(req,res)=>{
  res.render('index',{title:"hello",message:"sss"})
})

// //MIDDLEWARE: function took req object and give response to it or passes control to another middleware
// ////app.use is used to install a middleware function in our req process pipeline 
app.use(express.json()); //MIDDLEWARE -> express.json()->it force data to be in json format (raw to json)
app.use(express.urlencoded({extended:true})) // req.body mei urlencoded data daal de ga (urlencode to json) we do extended true to send array / object 
app.use(express.static('public')); //to give access to the folder so it can be accessed by url -> http://localhost:9000/abc.txt
// //custom middle ware
app.use(logger)
app.use(logger2)
app.use(helmet())
console.log(process.env.NODE_ENV)   //instead we have app.get('env')
console.log(app.get('env')) //using cmd u can change env -> set NODE_ENV=production

if(app.get('env')==='development'){
  app.use(morgan('tiny'));
  console.log('using morgan');
}


app.use(express.json()); 
app.use(home)



//extra
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
// //if you want to define property name in url using ? example :http://localhost:7000/api/check/?id=2
// app.get("/api/check", (req, res) => {
//   res.send(req.query);
// });

app.get("/", (req, res) => {
   res.send("its dhara's property");
  });


const port = process.env.PORT || 7000;

app.listen(port, () => console.log(`listening... ${port}`));

