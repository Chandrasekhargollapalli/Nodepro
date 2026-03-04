import express from 'express'
import User from '../models/User.js'

const router = express.Router()
// router.get('/chandu',(req,res)=>{
//     res.send('hello chandu')
// })
router.post('/signup',async(req,res)=>{
    const {name,email,password}=req.body
   const newUser = new User({name,email,password})
   await newUser.save()
   res.json({status:true,message:'Signup Successfully'})
})

router.post('/login',async(req,res)=>{
    const {email,password}=req.body
    const user = await User.findOne({email,password})
    if(user){
        res.json({status:true,message:'Login Successfully'})
    }else{
        res.json({status:false,message:'Invalid Credentials'})
    }
})

export default router