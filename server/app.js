var express = require('express');
var path = require('path');
var favicon = require('static-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var mongoose = require("mongoose");
var passport = require("passport");
var users = require("./routes/patientauth");
var doctors = require("./routes/doctorauth");
var mailer =require("./routes/api/mailer");
var api = require("./routes/api/doctors");

var app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(favicon());
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

const db = require("./config/keys").mongoURI;
mongoose.connect(
    db,
    { useUnifiedTopology: true,
      useNewUrlParser: true }
  )
  // .then(() => console.log("MongoDB connected successfully "))
  // .catch(err => console.log(err));
  mongoose.connection.on('connected', () => {
    console.log("connected to mongo yeahh");
})
mongoose.connection.on('error', (err) => {
    console.log("Mongodb eror "+ err);
})

  if(process.env.NODE_ENV==='production'){
    app.use(express.static('client/build'));
    app.get('*',(req,res)=>{
      res.sendFile(path.resolve(__dirname,'client','build','index.html'));
    })
  }
  app.use(passport.initialize());
  require("./config/passport")(passport);
  app.use("/patient", users);
  app.use("/doctor",doctors);
  app.use("/api",api);
  
  

module.exports = app;

