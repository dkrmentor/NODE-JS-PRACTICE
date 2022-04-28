// var url = "http://mylogger.io/log";
// function log(msg) {
//   //send an http request
//   console.log(msg);
// }
// // module.exports.log = log; //an object export is usefull when we have mutliple properties and method
// // module.exports.endPoint = url;

// module.exports = log; //in this case we can export single function


// const abc =(he) =>{
// console.log("hello"+he)
// }
// module.exports.abc = abc;





////////////////////PRACTICE 12 VIDEO
const EventEmitter= require('events');

class Logger extends EventEmitter{
        log(message){
            this.emit('eventname1',message)
            console.log(message)
        }
}

module.exports=Logger;
