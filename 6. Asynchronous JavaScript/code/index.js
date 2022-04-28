// console.log('before')
// setTimeout(() => {
//     console.log('load...')
// }, 0);
// console.log('after')

// console.log('before')
// const user = getUser(1);
// console.log(user)
// console.log('after')

// function getUser(id){
//     setTimeout(() => {
//         console.log('load...')
//         return {id:id,uname:'dhara'}
//     }, 0);
//     // return 1
// }

// we have 3 patterns
// Callbacks
// Promises
// Async/await
// to deal with  asynchronous code

///////////////////////////callbacks

// console.log('before')
// getUsers(1, (data) => {
//     console.log(data)
//     getRepos(data.uname,(data2)=>{
//         console.log(data2)
//     })
// })
// console.log('after')
// function getUsers(id,callback) {
//     setTimeout(() => {
//         console.log('load')
//         callback({id:id,uname:'dhara'})
//     }, 0);

// }
// function getRepos(data,callback2) {
//     setTimeout(() => {
//         console.log('repos')
//         callback2([data=data,repos="multiple"])
//     }, 0);
// }

///////////////////////////callbacks solution

// console.log("before");
// getUsers(1, getRep);
// function getRep(user) {
//   getRepos(user, getCom);
// }
// function getCom(repos) {
//   getCommit(repos, displayCommits);
// }

// function displayCommits(commits) {
//   console.log(commits);
// }

// console.log("after");
// function getUsers(id, callback) {
//   setTimeout(() => {
//     // console.log("load");
//     callback({ id: id, uname: "dhara" });
//   }, 0);
// }
// function getRepos(user, callback) {
//   setTimeout(() => {
//     // console.log("repos");
//     callback([(user = user), (rname = "developer")]);
//   }, 0);
// }

// function getCommit(repos, callback3) {
//   setTimeout(() => {
//     // console.log("commits");
//     callback3([(repos = repos), (commits = "multiple")]);
//   }, 0);
// }


//////////////////////////promise

// const p = Promise.resolve(1)
// p
//   .then(result=>console.log("result",result))


// const p = Promise.reject(new Error("error is here"))
// p 
//   .catch(err=>console.log("error",err.message))

 
// const p = new Promise((resolve,reject)=>{
//   setInterval(() => {
//     resolve(1)
//     reject(new Error(" mesg"))
    
    
//   }, 0);
// })
// p
//   .then(result=>console.log("Result",result))
//   .catch(err=>console.log("Error",err.message))




// console.log("before");


// getUsers(1)
//   .then(user=>getRepos(user))
//   .then(repos=>getCommit(repos))
//   .then(commits=> console.log("commits",commits))
//   .catch(err => console.log("error",err.message));

//   console.log("after");
// function getUsers(id) {
//   return new Promise((resolve,reject)=>{
//     setTimeout(() => {
//       // console.log("load");
//       resolve({ id: id, uname: "dhara" });
//     }, 0);
    
//   })
// }
// function getRepos(user) {
//   return new Promise((resolve,reject)=>{
//     setTimeout(() => {
//       // console.log("repos");
//       resolve([(user = user), (rname = "developer")]);
//     }, 0);
    
//   })
// }

// function getCommit(repos) {
//   return new Promise((resolve,reject)=>{
//     setTimeout(() => {
//       // console.log("commits");
//       resolve([(repos = repos), (commits = "multiple")]);
//     }, 0);
    
//   })
// }




// //in parallel =>when all promise are resolved
// const p1 = new Promise((resolve)=>{
//     setTimeout(() => {
//         console.log('p1')
//         resolve(1)
//     }, 0);
// })
// const p2 = new Promise((resolve)=>{
//     setTimeout(() => {
//         console.log('p2')
//         resolve(2)
//     }, 0);
// })

// Promise.all([p1,p2])
//     .then((result)=>{console.log(result)})




    //in parallel =>when one promise is  resolved then goes to 2nd
// const p1 = new Promise((resolve)=>{
//     setTimeout(() => {
//         console.log('p1')
//         resolve(1)
//     }, 0);
// })
// const p2 = new Promise((resolve)=>{
//     setTimeout(() => {
//         console.log('p2')
//         resolve(2)
//     }, 0);
// })

// Promise.race([p1,p2])
//     .then((result)=>{console.log(result)})

//in parallel 
// const p1 = new Promise((resolve,reject)=>{
//     setTimeout(() => {
//         console.log('p1')
//         // resolve(1)
//         reject(new Error('error is here'))
//     }, 0);
// })
// const p2 = new Promise((resolve)=>{
//     setTimeout(() => {
//         console.log('p2')
//         resolve(2)
//     }, 0);
// })

// Promise.all([p1,p2])
//     .then((result)=>{console.log(result)})
//     .catch((err)=>{console.log(err.message)})



//async await with try catch

// console.log("before");

// async function displayCommits(){
//     try{
//         const user = await getUsers(1)
//         const repos = await getRepos(user)
//         const commits = await getCommit(repos)
//         console.log("commits",commits)
//     }
//     catch(err){
//         console.log("error",err.message)
//     }
// }
// displayCommits()

//   console.log("after");
// function getUsers(id) {
//   return new Promise((resolve,reject)=>{
//     setTimeout(() => {
//       // console.log("load");
//       resolve({ id: id, uname: "dhara" });
//     }, 0);
    
//   })
// }
// function getRepos(user) {
//   return new Promise((resolve,reject)=>{
//     setTimeout(() => {
//       // console.log("repos");
//       resolve([(user = user), (rname = "developer")]);
//     }, 0);
    
//   })
// }

// function getCommit(repos) {
//   return new Promise((resolve,reject)=>{
//     setTimeout(() => {
//       // console.log("commits");
//       resolve([(repos = repos), (commits = "multiple")]);
//     }, 0);
    
//   })
// }
