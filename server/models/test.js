const mongooseErd= require('mongooseErd')
const User = require ("../models/Patient");
const doctor=require ("../models/doctor");

console.log(mongooseErd.toString())
mongooseErd.toFile()