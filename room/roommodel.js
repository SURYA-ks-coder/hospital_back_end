const mongoose=require('mongoose')



const Roomschema=mongoose.Schema({
    Room_id:Number,
    Room_type:String,
    P_name:String
    })
const Roommodel=mongoose.model('rooms',Roomschema)
module.exports=Roommodel
