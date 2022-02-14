const express = require('express')
const mongoose = require('mongoose')

// const url = 'mongodb://localhost/UserDBex'

const app = express()

mongoose.connect('mongodb://localhost:27017/UserDBex')
// mongoose.connect(url,{useNewUrlParse:true})

const con = mongoose.connection

con.on('open',function(){
    console.log('connected..')
})
app.use(express.json())

const userRouter = require('./routers/users')
app.use('/users',userRouter)
app.listen(9000,function(){
    console.log('server started');
})