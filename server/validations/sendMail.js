const nodemailer = require('nodemailer');
var {email,pass} = require('../config/mail');
module.exports.sendMails=(to,name,subject,message)=>{
  var transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    secure: false,
    auth: {
        type: "login",
        user: email,
        pass: pass
    }
  });
  var mail = {
    from: email,
    to: to,
    subject: subject,
    text: message
  };
  transporter.sendMail(mail,function(err,info){
    if(err){
        console.log(err);
    }
    else {
        console.log('email sent to :'+ to);
    }

});
}
