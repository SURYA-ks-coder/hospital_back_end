const express=require('express')
const mongoose=require('mongoose')
const billmodel=require('./billmodel')

const addbill=(req,res)=>{

    const Billobj=new billmodel({
        Bill_no:req.body.Bill_no,
        P_name:req.body.P_name,
        P_type:req.body.P_type,
        D_name:req.body.D_name,
        D_charge:req.body.D_charge,
        Medicine_charge:req.body.Medicine_charge,
        Room_charge:req.body.Room_charge,
        Lab_charge:req.body.Lab_charge,
        Bill:req.body.Bill

        }) 
    Billobj.save()
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

const findbill=(req,res)=>{
    billmodel.findOne({Bill_no:503}).populate('D_id').exec()
    .then(result=>{
        res.json({
            result:result
        })
    })
    .catch(err=>{
        res.json({
            err:'Find  data failed..!'
        })
    })
}
const updatebill=(req,res)=>{
    billmodel.findByIdAndUpdate('621c92d35c71ed422cb51369',{P_type:"inpatient"}).exec()

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

const deletebill=(req,res)=>{
    billmodel.findByIdAndDelete('621caf88cc9ac6f2a5807b4a',{Bill_no:504}).exec()

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

module.exports={addbill,findbill,updatebill,deletebill}