import mongoose from 'mongoose'

const connectDB = async()=>{
    try{
await mongoose.connect(process.env.MONGO_URL)
console.log('mongo db database connected Successfully')
    }catch(err){
  console.log("DB connection error");
    process.exit(1);
    }
}


export default connectDB