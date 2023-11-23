// const appData = require("./app.js")
// const data= require('./data')
// // console.log(appData)
// console.log(__dirname)
// const http = require("http")
// http.createServer((req, res) => {
//     // res.write("touseeq haider Haider")
//     // res.end()
//     res.writeHead(200, { 'Content-Type': 'application/json' })
//     res.write(JSON.stringify(data))
//     res.end()
// }).listen(4500)

// const fs = require('fs')
// const input = process.argv
// fs.writeFileSync(input[2], input[3])

// const input = process.argv 
// if (input[2] == 'add') {          //how to create and delete file 
//     for(i=3; i<10; i++){
//         fs.writeFileSync(input[i], input[i])
//     }
// }else if(input[2]=='remove'){
//     fs.unlinkSync(input[3])
// }else{
//     console.log("command error")
// }

// const fs= require('fs')
// const path= require('path') //how to create and delete file in loops
// const dirPath = path.join(__dirname,'files')
// console.log(dirPath)
// //fs.writeFileSync(dirPath+ "/hellow.txt" , "this is file")
// for(i=0; i<6; i++){
//     fs.writeFileSync(dirPath+ "/hellow"+i+".txt" , "this is file") }


// const express = require('express')
// const app = express()
// app.get('',(req, res) => {
//    console.log("data send by browser", req.query )
//    res.send(`<h1>This is Home</h1> ${req.query.name} <a href='/about'> Go to about page<a/>`)
// })
// app.get('/help',(req, res) => {
//    res.send(`<h1>This is Help</h1>`)
// })
// app.get('/about',(req, res) => {

//    res.send(`<h1>This is About</h1>`)
// })
// app.listen(3300)


// const express = require('express')
// const app = express();            
// const path = require('path')

// const filePath = path.join(__dirname, 'public')
// // app.use(express.static(filePath))
// app.get("/home",(_, res) => {               //how to remove file extension
//    res.sendFile(`${filePath}/home.html`)
// })
// app.get("/homeme",(_, res) => {               //how to remove file extension
//    res.sendFile(`${filePath}/about.html`)
// })
// app.get("*",(_, res) => {               //how to remove file extension
//    res.sendFile(`${filePath}/nopage.html`)
// })

// const express = require('express')
// const app = express();
// app.set('view engine', 'ejs')
// app.get('/profile', (_, res) => {
//    user = {
//       name: "touseq",
//       age: 23,
//       Degree: "BsIT"
//    }
//    res.render('profile', { user })                         //this profile name file profile name must be same
// })
// app.get('/login', (_, res) => {

//    res.render('login')                         
// })

// const express = require('express')
// const app = express();
// const reqFilter = (req, res, next) => {       //to perform authentication and authorization purpose
//    if (!req.query.age) {
//       res.send("please provide age")
//    }
//    else if (req.query.age < 18) {
//       res.send("pleasee provied age under 18")
//    }
//    else {
//       next()
//    }
// }
// app.use(reqFilter)
// app.get("/", (req, res) => {
//    res.send('This is Home page')
// })
// app.get("/about", (req, res) => {
//    res.send('This is About page')
// })
// app.listen(3300)

// const { MongoClient } = require('mongodb');
// const url = 'mongodb://localhost:27017';
// const databaseName = 'e-comm'
// const client = new MongoClient(url)

// async function getData() {
//     let result = await client.connect();
//     console.log(result);
//     db = result.db(databaseName);
//     collection = db.collection('products');
//     console.log("Collections",collection)
//     let data= await collection.find({}).toArray()
//     console.log(data)
// }
// getData()


