const express = require("express");
const router =  express.Router();

var addRequestId = require('express-request-id')();
 
router.use(addRequestId);

const Doctor = require ("../../models/doctor");
const Patient = require ("../../models/Patient");

router.get('/doctors', function(req, res){
    Doctor.find({}).sort({Date: -1}).then(docs => {
        res.send(docs);
      })
  });

  router.get('/patient', function(req,res){
    Patient.find({}).sort({Date: -1}).then(docs => {
        res.send(docs);
      })
  })
  // router.get('/send',function(req,res){
  //   res.send(console.log("shivam"));
  // })
  // router.get('/payment',function(req,res){
  //   res.send(console.log('payment-by-paytm'));
  // })
  module.exports = router;

