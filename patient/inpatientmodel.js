const mongoose=require('mongoose')
const {Schema}=mongoose
const Inpatientschema=mongoose.Schema({
    P_name:{
        type:String,
        required:true
    },
    Gender:String,
    Address:String,
    Room_id:{
        type:Schema.Types.ObjectId,
        ref:'rooms',
        required:true},
    Dateofadmit:Date,
    Dateofdischarge:Date,
    D_id:{
        type:Schema.Types.ObjectId,
        ref:'doctors',
        required:true
    },
    
    Disease:String

    })
const Inpatientmodel=mongoose.model('Inpatient',Inpatientschema)
module.exports=Inpatientmodel
