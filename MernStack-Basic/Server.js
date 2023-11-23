// const express = require("express");
// const http = require("http").Server(express())
// const mongoose = require('mongoose');
// const url = "mongodb+srv://Touseeq:Touseeq1234@cluster0.fasvsg2.mongodb.net/?retryWrites=true&w=majority"

// const userSchema = mongoose.Schema({
//   name: String,
//   email: String,
//   age: Number,
//   mobile: String,
// })
// const userModule = mongoose.model("apple", userSchema)
// async function insert() {
//   await userModule.create(
//     [{
//       name: "Touseeq haider",
//       email: "touseeq@gmail.com",
//       age: 89,
//       mobile: "oppo A+"
//     }, {
//       name: "ali haider",
//       email: "alihaider@gmail.com",
//       age: 60,
//       mobile: "smsung A+"
//     }]
//   )
// } insert()
// console.log("URL", url)
// mongoose.connect(url)
// http.listen(3000, function () {
//   console.log("server is starting")
// })

const express = require("express");
const http = require("http").Server(express())
const mongoose = require('mongoose');
const url = "mongodb+srv://Touseeq:Touseeq1234@cluster0.fasvsg2.mongodb.net/?retryWrites=true&w=majority"

const userSchema = mongoose.Schema({ name: String, email: String, age: Number, mobile: String })
const userModule = mongoose.model("users", userSchema)
const connectionURL = mongoose.connect(url)
// async function insert() {
//   console.log("Inser Function call")
//   await connectionURL;
//   let data = await new userModule({
//     name: "Asim haider",
//     email: "touseeq@gmail.com",
//     age: 89,
//     mobile: "oppo A+"
//   })
//   let result = await data.save()
//   console.log("Result", result)
// } insert()

// async function Update() {
//   console.log("Update Function call")
//   let data = await userModule.updateOne({ name: "Asim haider" }, { $set: { age: 50 } })
//   console.log("Data", data)
// } Update()

async function Delete() {
  console.log("Update Function call")
  let data = await userModule.deleteOne({ age: 50 })
  console.log("Data", data)
} Delete()
