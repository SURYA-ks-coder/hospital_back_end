const mongoose=require('mongoose')
const {Schema}=mongoose
const Outpatientschema=mongoose.Schema({
    Name:{
        type:String,
        required:true
    },
    Age:Number,
    Address:String,
    Date:Date,
    D_id :{type:Schema.Types.ObjectId,
        ref:'doctors',
        required:true
    },
    
    Disease:{
        type:String,
        required:true
    }
    })
const Outpatientmodel=mongoose.model('Outpatient',Outpatientschema)
module.exports=Outpatientmodel
