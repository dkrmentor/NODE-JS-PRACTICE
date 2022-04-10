// console.log(__filename) //module/file name
// console.log(__dirname) //folder name
// //global objects means all the below functions are called as window. => in node global. but in node the variable is not globally define it is define normally in that block
// console.log("dhara") // global scope

// setTimeout() //call a function after some delay
// clearTimeout()
// setInterval()// call a function repeatdly after equivallent delay
// clearInterval()//stop the interval from being call repeatedly

// console.log(module) //

/////////////////////////////////////importing local file//////////////////////////////////////
// require('./logger') //when we call require function we get exported object of that targeted module

// const mylog = require("./logger");
// // console.log(mylog);
// mylog('hello msg')
// mylog.abc('aaaaaa')

/////////////////////////////////////importing builitin Path//////////////////////////////////////
// const path = require('path') //builtin path module
// var pathObj = path.parse(__filename) //parse used to return an object from path string
// console.log(pathObj)

/////////////////////////////////////importing builtin filesystem//////////////////////////////////////
// const fs = require('fs')
// //sync = block
// const files = fs.readdirSync('./')
// console.log(files)

//async= nonblock
// fs.readdir('./', function(err,files){
//     if(err) console.log("error", err)
//     else  console.log("result : ",  files)
// })

/////////////////////////////////////importing builitin event//////////////////////////////////////
// const event = require('events') //its a class first alphabet capital => class
// const emitter = new event.EventEmitter() //create an instnace of this class to use =>object
// //register //listener for event 

// emitter.on('messagelogged',(eventArgs)=>{
//     console.log('listener called', eventArgs)

// })
// //exersice
// emitter.emit('messagelogged',{data:"message"})
// //raise an event
// // emitter.emit('messagelogged') //emit means making a noise , product something -> singnals toward a event has happened
// emitter.emit('messagelogged', {id:1,url:"http://"}) //additional argument when raising a event [eventArgs]


//class miss


// const http = require('http')
// const server = http.createServer((req,res)=>{
//     if(req.url === '/'){
//         res.write('hello world');
//         res.end();
//     }
//     if(req.url === '/api/courses'){
//         res.write(JSON.stringify([1,2,3]));
//         res.end();
//     }
// });


// server.listen(3000)
// console.log('listen on port 3000...')




