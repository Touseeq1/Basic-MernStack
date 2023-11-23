const mongoos = require("mongoose")
const userSchema = mongoos.Schema({
    name: String,
    email: String,
    age: Number,
    mobile:String,
})
module.exports = mongoos.model("UserAdmin", userSchema)