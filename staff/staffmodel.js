const mongoose=require('mongoose')

const Staffschema=mongoose.Schema({
    S_name:{
        type:String,
        required:true
    },
    S_age:Number,
    Salary:Number,
    Phone:Number,
    Address:String
    })
    const Staffmodel=mongoose.model('Staff',Staffschema)
    module.exports=Staffmodel
