const mongoose=require('mongoose')
mongoose.connect("mongodb://localhost:27017/hospital")
let db=mongoose.connection
db.on('error',()=>{console.log('connection error');})
db.once('open',()=>{console.log('connection successfuly....!');})
module.exports=db