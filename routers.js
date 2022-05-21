const express=require('express')
const routers=express.Router()

const doctor=require('./doctor/doctorcontroler')
const bills=require('./bill/billcontroler')
const patient=require('./patient/patientcontroler')
const room=require("./room/roomcontroler")
const staff=require('./staff/staffcontroler')


routers.post('/doctor',doctor.addDoctor)
routers.post('/doctorfind',doctor.finddoctor)
routers.post('/doctorupdate',doctor.updatedoctor)
routers.post('/doctordelete',doctor.deletedoctor)
routers.post('/login',doctor.login)

routers.post('/bill',bills.addbill)
routers.post('/billfind',bills.findbill)
routers.post('/billupdate',bills.updatebill)
routers.post('/billdelete',bills.deletebill)

routers.post('/inpatient',patient.addinpatient)
routers.post('/inpatientfind',patient.findinpatient)
routers.post('/inpatientupdate',patient.updateinpatient)
routers.post('/inpatientdelete',patient.deleteinpatient)

routers.post('/outpatient',patient.addoutpatient)
routers.post('/outpatientfind',patient.findoutpatient)
routers.post('/outpatientupdate',patient.updateoutpatient)
routers.post('/outpatientdelete',patient.deleteoutpatient)

routers.post('/room',room.addroom)
routers.post('/roomfind',room.findroom)
routers.post('/roomupdate',room.updateroom)
routers.post('/roomdelete',room.deleteroom)

routers.post('/staff',staff.addstaff)
routers.post('/stafffind',staff.findstaff)
routers.post('/staffupdate',staff.updatestaff)
routers.post('/staffdelete',staff.deletestaff)





module.exports=routers