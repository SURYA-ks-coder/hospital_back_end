const mongoose=require('mongoose')
const {Schema}=mongoose

const Billschema=mongoose.Schema({
    Bill_no:{
        type:Number,
        required:true
    },
    P_name:String,
    P_type:String,
    D_id:{
        type:Schema.Types.ObjectId,
        ref:'doctors'}
    ,
    D_charge:Number,
    Medicine_charge:Number,
    Room_charge:Number,
    Lab_charge:Number,
    Bill_amount:Number
})

const Billmodel=mongoose.model('Bill',Billschema)

module.exports=Billmodel

