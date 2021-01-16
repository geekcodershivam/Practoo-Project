const express = require('express');
const cors = require('cors');
const app = express();
const bodyParser = require('body-parser');
require('dotenv').config();

app.use(cors());
app.use(bodyParser.json());

const MongoClient = require('mongodb').MongoClient;
const ObjectId = require('mongodb').ObjectID;

const uri = process.env.DB_PATH;

let client = new MongoClient(uri, {
    useNewUrlParser: true, 
    useUnifiedTopology: true
});

app.get('/',(req,res)=>{
    res.send("Thank You!");
});

//Get The Appointments
app.get('/appointments', (req, res) => {
    client = new MongoClient(uri, {useNewUrlParser : true,  useUnifiedTopology: true });
    client.connect(error => {
        const collection = client.db('doctorsPanel').collection('appointment');
        collection.find().toArray((err , documents) => {
            if(error) {
                res.status(500).send(err)
            }
            else{
                res.send(documents)
            } 
        })
    })
    //client.close();
})
app.get('/bookedAppointments', (req, res) => {
    client = new MongoClient(uri, {useNewUrlParser : true,  useUnifiedTopology: true });
    client.connect(error => {
        const collection = client.db('doctorsPanel').collection('bookedAppointments');
        collection.find().toArray((err , documents) => {
            if(err) {
                res.status(500).send(err)
            }
            else{
                res.send(documents)
            } 
        })
    })
    client.close();
})
app.post('/placeBooking',(req,res)=>{
    client = new MongoClient(uri, { 
        useNewUrlParser: true, 
        useUnifiedTopology: true
    });
    const bookedAppointments = req.body;
    client.connect(error => {
        const collection = client.db("doctorsPanel").collection("bookedAppointments");
        collection.insertOne(bookedAppointments,(err,result)=>{
            if(err)
            {
                res.status(500).send({message:err})
                console.log(err);
            }
            else
            {
                res.send(result.ops[0]);
            }
        });
    });
});

app.post('/updateBookingStatus',(req,res)=>{
    client = new MongoClient(uri, { 
        useNewUrlParser: true, 
        useUnifiedTopology: true
    });
    const data = req.body;
    client.connect(error => {
        const collection = client.db("doctorsPanel").collection("bookedAppointments");
        collection.updateOne(
            {_id:ObjectId(data.id)},
            {
                $set:{ "status":data.status},
                $currentDate: {"lastModified":true}
            },
            (err,result)=>{
            if(err)
            {
                res.status(500).send({message:err})
                console.log(err);
            }
            else
            {
                res.send(result);
            }
        });
    });
    //client.close();
});

app.post('/updatePrescription',(req,res)=>{
    client = new MongoClient(uri, { 
        useNewUrlParser: true, 
        useUnifiedTopology: true
    });
    const data = req.body;
    client.connect(error => {
        const collection = client.db("doctorsPanel").collection("bookedAppointments");
        collection.updateOne(
            {_id:ObjectId(data.id)},
            {
                $set:{ "prescription":data.prescription},
                $currentDate: {"lastModified":true}
            },
            (err,result)=>{
            if(err)
            {
                res.status(500).send({message:err})
                console.log(err);
            }
            else
            {
                res.send(result);
            }
        });
    });
    //client.close();
});

app.post('/updateVisitingStatus',(req,res)=>{
    client = new MongoClient(uri, { 
        useNewUrlParser: true, 
        useUnifiedTopology: true
    });
    const data = req.body;
    client.connect(error => {
        const collection = client.db("doctorsPanel").collection("bookedAppointments");
        collection.updateOne(
            {_id:ObjectId(data.id)},
            {
                $set:{ "visitingStatus":data.visitingStatus},
                $currentDate: {"lastModified":true}
            },
            (err,result)=>{
            if(err)
            {
                res.status(500).send({message:err})
                console.log(err);
            }
            else
            {
                res.send(result);
            }
        });
    });
});

//insert All Appointments
app.post('/addAppointments',(req,res)=>{
    client = new MongoClient(uri, { 
        useNewUrlParser: true, 
        useUnifiedTopology: true
    });
    const appointment = req.body;
    client.connect(error => {
    const collection = client.db("doctorsPanel").collection("appointment");
    collection.insert(appointment,(err,result)=>{
        if(err)
        {
            res.status(500).send({message:err})
            console.log(err);
        }
        else
        {
            res.send(result.ops[0]);
            console.log(result.ops[0]);
        }
        //console.log(err);
    });
    client.close();
    
    });
});