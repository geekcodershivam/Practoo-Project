const express = require("express");
const router =  express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const Validator = require("validator");
const isEmpty = require("is-empty");
const keys = require("../config/keys");
require('dotenv').config();
const { v4: uuidv4 } = require('uuid');
const PaytmChecksum = require('../payment/PaytmChecksum');
const formidable=require('formidable')


const ValidateRegisterInput = function validateRegisterInput(data) {
    let errors = {};

    data.name = !isEmpty(data.name) ? data.name : "";
    data.email = !isEmpty(data.email) ? data.email : "";
    data.password = !isEmpty(data.password) ? data.password : "";
    data.password2 = !isEmpty(data.password2) ? data.password2 : "";
    data.address = !isEmpty(data.address) ? data.address : "";
    data.allergies = !isEmpty(data.allergies) ? data.allergies : "";
    data.sex = !isEmpty(data.sex) ? data.sex : "";
    data.age = !isEmpty(data.age) ? data.age : "";
    data.phone = !isEmpty(data.phone) ? data.phone : "";
    data.weight = !isEmpty(data.weight) ? data.weight : "";
    data.dob = !isEmpty(data.dob) ? data.dob : "";
    
    if (Validator.isEmpty(data.name)) {
        errors.name = "Name field is required";
    }
    if (Validator.isEmpty(data.email)) {
      errors.email = "Email field is required";
    } 
    else if (!Validator.isEmail(data.email)) {
      errors.email = "Email is invalid";
    }
    if (Validator.isEmpty(data.allergies)) {
      errors.allergies = "allergies field is required";
    }
    if (Validator.isEmpty(data.address)) {
      errors.address = "Email field is required";
    }
    if (Validator.isEmpty(data.age)) {
      errors.age = "Email field is required";
    }
    if (Validator.isEmpty(data.sex)) {
      errors.sex = "Email field is required";
    }
    if (Validator.isEmpty(data.weight)) {
      errors.weight = "Email field is required";
    }
    if (Validator.isEmpty(data.dob)) {
      errors.dob = "dob field is required";
    }
    if (Validator.isEmpty(data.phone)) {
      errors.phone = "Phone field is required";
    }
    if (Validator.isEmpty(data.password)) {
      errors.password = "Password field is required";
    }
    if (Validator.isEmpty(data.password2)) {
      errors.password2 = "Confirm password field is required";
    }
    if (!Validator.isLength(data.password, { min: 6, max: 20 })) {
      errors.password = "Password must be at least 6 characters";
    }
    if (!Validator.equals(data.password, data.password2)) {
      errors.password2 = "Passwords must match";
    }
    return {
      errors,
      isValid: isEmpty(errors)
    };
  };

const ValidateLoginInput = function validateLoginInput(data) {
    let errors = {};
    data.email = !isEmpty(data.email) ? data.email : "";
    data.password = !isEmpty(data.password) ? data.password : "";// Email checks
    
    if (Validator.isEmpty(data.email)) {
      errors.email = "Email field is required";
    } 
    else if (!Validator.isEmail(data.email)) {
      errors.email = "Email is invalid";
    }
  
    if (Validator.isEmpty(data.password)) {
      errors.password = "Password field is required";
    }
    return {
      errors,
      isValid: isEmpty(errors)
    };
  };
   const ValidateOTPInput = function validateOTPInput(data) {
    let errors = {};
    data.email = !isEmpty(data.email) ? data.email : "";
    data.otp = !isEmpty(data.otp) ? data.otp : "" ;// Email checks
    
    if (Validator.isEmpty(data.email)) {
      errors.email = "Email field is required";
    } 
    else if (!Validator.isEmail(data.email)) {
      errors.email = "Email is invalid";
    }
  
    if (Validator.isEmpty(data.otp)) {
      errors.otp = "otp is required";
    }
    return {
      errors,
      isValid: isEmpty(errors)
    };
  };


  const User = require ("../models/Patient");

  router.post("/verify", (req, res) => {
    
    const { errors, isValid } = ValidateOTPInput(req.body);
    if (!isValid) {
      return res.status(400).json(errors);
    }
    var update = {isVerified: true}
    User.findOneAndUpdate({ email: req.body.email, otp: req.body.otp },update).then(user => {
      if (!user) {
        return res.status(400).json({ email: "Email not found  or otp is incorrect" });
      } 
      else {
        console.log("verified succesfully")
        return res.status(200).json({ verify: "verfied"});
      }
    });
  });

  router.post("/register", (req, res) => {
    
    const { errors, isValid } = ValidateRegisterInput(req.body);
    if (!isValid) {
      return res.status(400).json(errors);
    }
    User.findOne({ email: req.body.email }).then(user => {
      if (user) {
        return res.status(400).json({ email: "Email already exists" });
      } 
      else {
        var otp = require('random-int')(10000, 100000);
        const newUser = new User({
          name: req.body.name,
          email: req.body.email,
          password: req.body.password,
          otp: otp.toString(),
          isVerified: false,
          address: req.body.address,
          allergies: req.body.allergies,
          weight: req.body.weight,
          dob : req.body.dob,
          age: req.body.age,
          sex: req.body.sex,
          phone: req.body.phone
        });
        bcrypt.genSalt(10, (err, salt) => {
          bcrypt.hash(newUser.password, salt, (err, hash) => {
            if (err) throw err;
            newUser.password = hash;
            newUser
              .save()
              .then(user => res.json(user), require('../validations/mail').mailverify(req.body.email,otp))
              .catch(err => console.log(err));
          });
        });
      }
    });
  });
  router.post("/login", (req, res) => {
    const { errors, isValid } = ValidateLoginInput(req.body);
    
    if (!isValid) {
      return res.status(400).json(errors);
    }
    const email = req.body.email;
    const password = req.body.password;
    User.findOne({ email }).then(user => {

      if (!user) {
        return res.status(404).json({ emailnotfound: "Email not found " });
      }
      else if(!user.isVerified)
      {
        return res.status(404).json({emailnotverified: "email not verified"})
      };
      bcrypt.compare(password, user.password).then(isMatch => {
        if (isMatch) {
          const payload = {
            id: user.id,
            name: user.name,
            email: user.email
            
          };
          jwt.sign(
            payload,
            keys.secretOrKey,
            {
              expiresIn: 31556926
            },
            (err, token) => {
              res.json({
                success: true,
                token: "Bearer " + token
              });
            }
           
          );
          console.log(user.email);
          console.log("login ");
        } else {
          return res.status(400).json({ passwordincorrect: "Password incorrect" });
        }
      });
    });
  });
//   router.post("/payment", (req, res) => {
//     if (!req.body.amount || !req.body.email || !req.body.phone) {
//         res.status(400).send('Payment failed')
//       } else {
//         var params = {};
//         params['MID'] = process.env.MID;
//         params['WEBSITE'] = process.env.WEBSITE;
//         params['CHANNEL_ID'] = 'WEB';
//         params['INDUSTRY_TYPE_ID'] = 'Retail';
//         params['ORDER_ID'] = 'TEST_' + new Date().getTime();
//         params['CUST_ID'] = 'customer_'+uuidv4();
//         params['TXN_AMOUNT'] = 250;
//         params['CALLBACK_URL'] = 'http://localhost:4000/patient/callback';
//         params['EMAIL'] = 'shivamtripathi214@gmail.com';
//         params['MOBILE_NO'] = '9990151009';
    
    
//         var paytmChecksum = PaytmChecksum.generateSignature(params, process.env.PAYTM_MERCHANT_KEY);
//         paytmChecksum.then(function(checksum){
//             let paytmParams={
//                 ...params,
//                 "CHECKSUMHASH":checksum
//             }
//             res.json(paytmParams)
//         }).catch(function(error){
//           console.log(error);
//         });

//       }
// })

// router.post('/callback', (req, res) => {
//     var body = '';
//     req.on('data', function (data) {
//        body += data;
//     });
  
//      req.on('end', function () {
//        var html = "";
//        var post_data = qs.parse(body);
  
//        // received params in callback
//        console.log('Callback Response: ', post_data, "\n");
  
  
//        // verify the checksum
//        var checksumhash = post_data.CHECKSUMHASH;
//        // delete post_data.CHECKSUMHASH;
//        var result = PaytmChecksum.verifychecksum(post_data, process.env.KEY, checksumhash);
//        console.log("Checksum Result => ", result, "\n");
  
  
//        // Send Server-to-Server request to verify Order Status
//        var params = {"MID": process.env.MID, "ORDERID": post_data.ORDERID};
  
//        PaytmChecksum.genchecksum(params, process.env.KEY, function (err, checksum) {
  
//          params.CHECKSUMHASH = checksum;
//          post_data = 'JsonData='+JSON.stringify(params);
  
//          var options = {
//            hostname: 'securegw-stage.paytm.in', // for staging
//            // hostname: 'securegw.paytm.in', // for production
//            port: 443,
//            path: '/merchant-status/getTxnStatus',
//            method: 'POST',
//            headers: {
//              'Content-Type': 'application/x-www-form-urlencoded',
//              'Content-Length': post_data.length
//            }
//          };
  
  
//          // Set up the request
//          var response = "";
//          var post_req = https.request(options, function(post_res) {
//            post_res.on('data', function (chunk) {
//              response += chunk;
//            });
  
//            post_res.on('end', function(){
//              console.log('S2S Response: ', response, "\n");
  
//              var _result = JSON.parse(response);
//                if(_result.STATUS == 'TXN_SUCCESS') {
//                    res.send('payment sucess')
//                }else {
//                    res.send('payment failed')
//                }
//              });
//          });
  
//          // post the data
//          post_req.write(post_data);
//          post_req.end();
//         });
//        });
//   })

router.post('/payment',(req,res)=>
{


const{amount,email}=req.body;

    /* import checksum generation utility */
const totalAmount=JSON.stringify(amount);
var params = {};

/* initialize an array */
params['MID'] = process.env.PAYTM_MID,
params['WEBSITE'] = process.env.PAYTM_WEBSITE,
params['CHANNEL_ID'] = process.env.PAYTM_CHANNEL_ID,
params['INDUSTRY_TYPE_ID'] = process.env.PAYTM_INDUSTRY_TYPE_ID,
params['ORDER_ID'] = uuidv4(),
params['CUST_ID'] = process.env.PAYTM_CUST_ID + new Date().getTime(),
params['TXN_AMOUNT'] = totalAmount,
params['CALLBACK_URL'] = 'http://localhost:4000/patient/callback',
params['EMAIL'] =email,
params['MOBILE_NO'] = '9876543210'

/**
* Generate checksum by parameters we have
* Find your Merchant Key in your Paytm Dashboard at https://dashboard.paytm.com/next/apikeys 
*/
var paytmChecksum = PaytmChecksum.generateSignature(params, process.env.PAYTM_MERCHANT_KEY);
paytmChecksum.then(function(checksum){
    let paytmParams={
        ...params,
        "CHECKSUMHASH":checksum
    }
    res.json(paytmParams)
}).catch(function(error){
	console.log(error);
});

})

router.post('/callback',(req,res)=>
{

const form=new formidable.IncomingForm();

form.parse(req,(err,fields,file)=>
{
paytmChecksum = fields.CHECKSUMHASH;
delete fields.CHECKSUMHASH;
var isVerifySignature = PaytmChecksum.verifySignature(fields, process.env.PAYTM_MERCHANT_KEY, paytmChecksum);
if (isVerifySignature) {
    var paytmParams = {};
    paytmParams["MID"]     = fields.MID;
    paytmParams["ORDERID"] = fields.ORDERID;
    
    /*
    * Generate checksum by parameters we have
    * Find your Merchant Key in your Paytm Dashboard at https://dashboard.paytm.com/next/apikeys 
    */
    PaytmChecksum.generateSignature(paytmParams, process.env.PAYTM_MERCHANT_KEY).then(function(checksum){
    
        paytmParams["CHECKSUMHASH"] = checksum;
    
        var post_data = JSON.stringify(paytmParams);
    
        var options = {
    
            /* for Staging */
            hostname: 'securegw-stage.paytm.in',
    
            /* for Production */
            // hostname: 'securegw.paytm.in',
    
            port: 443,
            path: '/order/status',
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Content-Length': post_data.length
            }
        };
    
        var response = "";
        var post_req = https.request(options, function(post_res) {
            post_res.on('data', function (chunk) {
                response += chunk;
            });
    
            post_res.on('end', function(){
                res.json(response)
            });
        });
    
        post_req.write(post_data);
        post_req.end();
    });        

} else {
	console.log("Checksum Mismatched");
}
})

})


router.post('/sends', (req, res) => {

  const name = req.body.name
  const email = req.body.email
  const message = req.body.message
  const subject = req.body.subject
  require('../validations/sendMail').sendMails(email,name,subject,message);
  
})
  module.exports = router;

