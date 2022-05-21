const mongoose=require('mongoose')

const Doctorschema=mongoose.Schema({
    D_name:{
        type:String,
        required:true
    },
    D_id:Number,
    Dept:String,
    Salary:Number,
    Phone:Number,
    Address:String,
    isactive:Boolean,
    Password:{
        type:String,
        required:true}
    })
const Doctormodel=mongoose.model('doctors',Doctorschema)

    module.exports=Doctormodel