const express=require('express')
const mongoose=require('mongoose')
const staffmodel=require('./staffmodel')

const addstaff=(req,res)=>{

    const Staffobj=new staffmodel({
        S_name:req.body.S_name,
        S_age:req.body.S_age,
        Salary:req.body.Salary,
        Phone:req.body.Phone,
        Address:req.body.Address
    }) 
    Staffobj.save()
    .then(result=>{
        res.status(200).json({
            result:result
        })
    })
    .catch(err=>{
        res.status(200).json({
            msg:"fails to save"
        })
    })
}

const findstaff=(req,res)=>{
    staffmodel.findOne({S_name:"dhanu"}).exec()
    .then(result=>{
        res.json({
            result:result
        })
    })
    .catch(err=>{
        res.json({
            err:'read doctor data failed..!'
        })
    })
}
const updatestaff=(req,res)=>{
    staffmodel.findByIdAndUpdate('621c8db55c71ed422cb51357',{S_name:"xyz"}).exec()

    .then(result=>{
        res.json({
            result:" updated successfuly...!"
        })
    })
    .catch(err=>{
        res.json({
            msg:"updated failed"
        })
    })
}

const deletestaff=(req,res)=>{
    staffmodel.findByIdAndDelete('621cedf45f13c28e22de6a01',{S_age:23}).exec()

    .then(result=>{
        res.json({
            result:" delete successfuly...!"
        })
    })
    .catch(err=>{
        res.json({
            msg:"delete failed"
        })
    })
}

module.exports={addstaff,findstaff,updatestaff,deletestaff}