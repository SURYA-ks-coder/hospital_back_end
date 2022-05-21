const express=require('express')
const mongoose=require('mongoose')
const doctormodel=require('./doctormodel')
const bcrypt=require('bcrypt')
const saltrounds=10


const addDoctor= (req,res)=>{
    const password=req.body.Password

    const hash=bcrypt.hashSync(password, saltrounds)
    // const compare=bcrypt.compareSync(password, hash)
    
    const Doctorobj=new doctormodel({
        D_name:req.body.D_name,
        D_id:req.body.D_id,
        Dept:req.body.Dept,
        Salary:req.body.Salary,
        Phone:req.body.Phone,
        Address:req.body.Address,
        isactive:"true",
        Password:hash
    }) 
    Doctorobj.save()
    .then(result=>{console.log("connected",result);
        res.json({
            result:result
        })
    })
    .catch(err=>{console.log('Connection failed',err);
        res.json({
            msg:"fails to save",err
        })
    })
}
 const finddoctor=(req,res)=>{
     doctormodel.findOne({D_name:"Abin"}).select({Phone:1}).exec()
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
const updatedoctor=(req,res)=>{
    doctormodel.findByIdAndUpdate('621c8d175c71ed422cb5134d',{Address:"abc"}).exec()
    .then(result=>{
        res.json({
            result:'Update successfuly'
        })
    })
    .catch(err=>{
        res.json({
            msg:'update failed'
        })
    })
}
const  deletedoctor=(req,res)=>{
    doctormodel.findByIdAndUpdate('621ca51d9498c433bb69955d',{isactive:"false"}).exec()
    .then(result=>{
        res.json({
            result:'deleted successfuly'
        })
    })
    .catch(err=>{
        res.json({
            msg:'delete failed'
        })
    })
}

 const login=(req,res)=>{
    doctormodel.findOne({D_name:req.body.D_name}).exec()
    .then(result=>{
        // res.json({
        //             result:result.Password
        //         })

    const password=req.body.Password
    // const hash=bcrypt.hash(password, saltrounds)
    const compare=bcrypt.compare(password, result.Password,(err,results)=>{
        
        if(results){
            res.json({
                msg:'Login Successfuly'
            })
         
        }
        else{
            res.json({
                result:'password miss match'
            })
        }
        
})
        
    })
    .catch(err=>{
        res.json({
            msg:'Doctor Not Found',err
        })
    })
    
 }

module.exports={addDoctor,finddoctor,updatedoctor,deletedoctor,login}