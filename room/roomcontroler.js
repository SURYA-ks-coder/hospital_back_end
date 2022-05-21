const express=require('express')
const mongoose=require('mongoose')
const roommodel=require('./roommodel')

const addroom=(req,res)=>{

    const Roomobj=new roommodel({
        Room_id:req.body.Room_id,
        Room_type:req.body.Room_type,
        P_name:req.body.P_name
        }) 
    Roomobj.save()
    .then(result=>{
        res.status(200).json({
            result:result
        })
    })
    .catch(err=>{
        res.status(200).json({
            msg:"fails to save",err
        })
    })
}

const findroom=(req,res)=>{
    roommodel.findOne({Room_type:"Sharing ward"}).exec()
    .then(result=>{
        res.json({
            result:result
        })
    })
    .catch(err=>{
        res.json({
            err:'read doctor data failed..!',err
        })
    })
}
const updateroom= (req,res)=>{
    roommodel.findByIdAndUpdate('621c96ca8521e866dc17c332',{Room_no:"205"}).exec()
    .then(result=>{
        res.json({
            msg:'Update successfully...!'
        })
    })
    .catch(err=>{
        res.json({
            msg:'Update failed..!',err
        })
    })
}

const deleteroom= (req,res)=>{
    roommodel.findByIdAndDelete('621c96ca8521e866dc17c332',{P_name:"xyz"}).exec()
    .then(result=>{
        res.json({
            msg:'Delete successfully...!'
        })
    })
    .catch(err=>{
        res.json({
            msg:'Delete failed..!',err
        })
    })
}
module.exports={addroom,findroom,updateroom,deleteroom}