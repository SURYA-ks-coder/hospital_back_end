const express=require('express')
const mongoose=require('mongoose')
const inpatientmodel=require('./inpatientmodel')
const outpatientmodel=require('./outpatientmodel')
const doctormodel=require('../doctor/doctormodel')
const { populate } = require('./inpatientmodel')



const addinpatient= (req,res)=>{

    const Inpatientobj=new inpatientmodel({
        P_name:req.body.P_name,
        Gender:req.body.Gender,
        Address:req.body.Address,
        Room_id:req.body.Room_id,
        Dateofadmit:req.body.Dateofadmit,
        Dateofdischarge:req.body.Dateofdischarge,
        D_id:req.body.D_id,
        Disease:req.body.Disease

        }) 
    Inpatientobj.save()
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
const findinpatient=(req,res)=>{
    inpatientmodel.findOne({P_name:"kumar"}).populate('D_id').select({Address:1,P_name:1}).exec()
    .then(result=>{
        res.json({
            result:result
        })
    })
    .catch(err=>{
        res.json({
            err:'find data failed..!',err
        })
    })
}
const updateinpatient=(req,res)=>{

    inpatientmodel.findByIdAndUpdate('621c907e5c71ed422cb5135f',{P_name:'xyz'}).exec()
    .then(result=>{
        res.json({
            result:'Update successfuly.....!'
        })
    })
    .catch(err=>{
        res.json({
            msg:'Update failed..!'
        })
    })
}

const deleteinpatient=(req,res)=>{

    inpatientmodel.findByIdAndDelete('621c907e5c71ed422cb5135f',{Gender:'34'}).exec()
    .then(result=>{
        res.json({
            result:'Delete successfuly.....!'
        })
    })
    .catch(err=>{
        res.json({
            msg:'Delete failed..!'
        })
    })
}
const addoutpatient=(req,res)=>{

    const Outpatientobj=new outpatientmodel({
        Name:req.body.Name,
        Age:req.body.Age,
        Address:req.body.Address,
        Date:req.body.Date,
        D_name:req.body.D_name,
        Disease:req.body.Disease

        }) 
    Outpatientobj.save()
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
const findoutpatient=(req,res)=>{
    outpatientmodel.findOne({Name:"ravi"}).populate('D-id').exec()
    .then(result=>{
        res.json({
            result:result
        })
    })
    .catch(err=>{
        res.json({
            err:'find data failed..!'
        })
    })
}
const updateoutpatient=(req,res)=>{

    outpatientmodel.findByIdAndUpdate('621c91565c71ed422cb51367',{Name:'xyz'}).exec()
    .then(result=>{
        res.json({
            result:'Update successfuly.....!'
        })
    })
    .catch(err=>{
        res.json({
            msg:'Update failed..!'
        })
    })
}

const deleteoutpatient=(req,res)=>{

    outpatientmodel.findByIdAndDelete('621c91565c71ed422cb51367',{Age:'30'}).exec()
    .then(result=>{
        res.json({
            result:'Delete successfuly.....!'
        })
    })
    .catch(err=>{
        res.json({
            msg:'Delete failed..!'
        })
    })
}

module.exports={addinpatient,findinpatient,addoutpatient,findoutpatient,updateinpatient,deleteinpatient,updateoutpatient,deleteoutpatient}