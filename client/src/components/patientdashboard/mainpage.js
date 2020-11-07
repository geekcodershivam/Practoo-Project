import React, { Component } from 'react'
import {Link} from "react-router-dom"; 
import axios from "axios";
import doctor from '../../images/download.jpg';
// import Paper from '@material-ui/core/Paper';
// import Box from '@material-ui/core/Box';


export default class mainpage extends Component {

    constructor() {
        super();
        this.state = {
          array: []
        };
      }

     componentDidMount() {
        console.log("hey");
        axios.get('/api/doctors')
        .then((response) => {
            console.log(response.data)
            this.setState({array : response.data});
        });
       }
  
       fetch_doctor() {

         return this.state.array.map(arr =>{
          return (
                //  <div class="row">
                //      <br />
                //         <div class="card container col-lg-4">
                //          <br />
                //          <b> Name : {arr.name} </b>
                //          <br />
                //          <p> Contact No: {arr.contactNo}</p>
                //          <p> Address: {arr.address}</p>       
                //          <p> Specialisation : { arr.specialisation} </p> 
                //          <p> Qualifiaction: {arr.qualification}</p>
                //          <p> Gender: {arr.sex} </p>  
                //          <p> Fee : 250  </p>  
                //          <button
                //             style={{
                //                 width: "300px",
                //                 borderRadius: "3px",
                //                 letterSpacing: "1.5px",
                //                 marginTop: "2rem"
                                
                //             }}
                //             type="submit"
                //             className="btn btn-small waves-effect waves-light hoverable blue accent-3">
                //             Book Appointment
                //             </button>
                //             <br />
                //  </div>
                //  </div>



                
                <div className="card shadow-sm">
            <div className="card-header d-flex  align-items-center">
                <img className="mx-3" src={doctor} alt="" width="60"/>
                <div>
                    <h6 className="text-primary">Name : {arr.name}</h6>
                    <p className="m-0">Contact No: {arr.contactNo}</p>
                </div>
            </div>
            <div class="card-body">
                <p class="card-text text-secondary mt-4">
                Address: <strong>{arr.address}</strong><br/>     
                Specialisation : <strong>{ arr.specialisation}</strong> <br/>  
                Qualifiaction:<strong>{arr.qualification}</strong> <br/>  
                Gender: <strong>{arr.sex}</strong><br/>   
                Fee : <strong>250</strong><br/>  
                </p>
                <button
                            style={{
                                width: "300px",
                                borderRadius: "3px",
                                letterSpacing: "1.5px",
                                marginTop: "2rem"
                                
                            }}
                            type="submit"
                            className="btn btn-small waves-effect waves-light hoverable blue accent-3 btnd btn-primary">
                            Book Appointment
                            </button>
            </div>
            
       </div>
          )});
       }
    render() {
        return (
            <div style={{ marginTop: "100px"}}>
                  <div class="row">
                      <div class="col-lg-12"> 
                      
                    <section className="blogs-area my-5">
            <div className="container">
                <div className="section-header text-center">
                    <h6 className="text-primary">Lab reports</h6>
                    <h1>Find Your <strong>Reports</strong></h1>
                </div>
                <div className="card-deck mt-5">
                <Link to ="/profile/5e1b0534290b44038035147e">
                      <button
                  style={{
                    width: "150px",
                    borderRadius: "3px",
                    letterSpacing: "1.5px",
                    marginLeft: "327%",
                    padding: "5px"
                  }}
                  type="submit"
                  className="btn btn-small auto waves-effect waves-light hoverable blue accent-3 btn-primary"
                 >
                     
                 Prescriptions
                </button>
                </Link>
                </div>
            </div>
        </section>

                <section className="blogs-area my-5">
            <div className="container">
                <div className="section-header text-center">
                    <h6 className="text-primary">APPOINTMENT</h6>
                    <h1>Make An Appointment <strong>Today</strong></h1>
                </div>
                <div className="card-deck mt-5">
                   {this.fetch_doctor()}
                </div>
            </div>
        </section>
                       

                      </div>
                  
                  </div>
            </div>
        )
    }
}
