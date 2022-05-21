const express=require('express')
const router=require('./routers')
const body_parser=require('body-parser')
const dbconnection=require('./dbconnection')

const app=express()

app.use(body_parser.urlencoded({extended:false}))
app.use(body_parser.json())
app.use('/',router)

app.listen(3000,()=>{console.log('Connected..!');})
