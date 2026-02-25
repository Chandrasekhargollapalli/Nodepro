import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name:"string",
    email: { type: String, unique: true },
    password:"string"
})

const User = mongoose.model("User",userSchema)

export default User