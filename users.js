const express = require('express');
const { addListener } = require('nodemon');
const router = express.Router()
const { User } = require('../models/user')



router.get('/', async(req,res)=>{
    try{
      const users = await User.find()
      res.json(users)
     } catch(err){

        res.send('error'+ err)
    }
    
})
//get
router.get('/:id', async(req,res)=>{
    try{
      const user = await User.findById(req.params.id)
      res.json(user)
     } catch(err){

        res.send('error'+ err)
    }
    
})


//post
router.post('/',async(req,res)=>{
     const user = new User({ 
        name: req.body.name,
        domain: req.body.domain,
        sub: req.body.sub
    })
    try{
        const a1 = await user.save()
        res.json(a1)
    }catch(err){
        res.send('Error')
    }

})

//patch
router.patch('/:id',async(req,res)=>{
    try{
        const user=await User.findById(req.params.id)
        user.domain=req.body.domain
        const a1=await user.save()
        res.json(a1)
    }catch(err){
        res.send('Error')
    }
})
//delete
router.delete('/:id',async(req,res)=>{
    try{
        const user=await User.findById(req.params.id)
        // res.json(user)
        user.deleteOne()
        res.json(user)
    }catch(err){
        res.send('Error')
    }
})

module.exports = router