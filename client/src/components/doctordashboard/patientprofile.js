import React, { Component } from 'react'
import axios from "axios"
import PropTypes from "prop-types";
import { connect } from "react-redux";

class patientprofile extends Component {
    constructor() {
        super();
        this.state = {
          array: [],
          prescriptionNo: "",
          doctor: "",
          licenseNo: "",
          test: "",
          disease: "",
          medicines: "",
          comments: "",
          weight: "",
        };
      }
      onChange = e => {
        this.setState({ [e.target.id]: e.target.value });
        console.log(this.state);
      };

      onSubmit = e => {
        e.preventDefault();
        const newUser = {
        prescriptionNo: this.state.prescriptionNo,
        comments: this.state.comments,
        weight: this.state.weight,
        medicines: this.state.medicines,
        test: this.state.test,
        disease: this.state.disease,
        doctor : this.props.auth.user.name,
        licenseNo: this.props.auth.user.licenceNo,
        patientid: this.props.match.params.id
        };
        console.log(newUser);
        axios
        .post('/doctor/addpres',newUser)
        .then(res => this.props.history.push("/patient/login"))
      };
      componentDidMount() {
        console.log("hey");
        axios.get('/api/patient')
        .then((response) => {
            console.log(response.data)
            this.setState({array : response.data});
        });
       }
    fetch_data() {

            var presItems=[];
            var presdisplay=[];
        return this.state.array.map(arr =>{
                presItems = arr.prescription;
                console.log(presItems);
               presdisplay= presItems.map((pres) =>
                 <div>
                      <div class =" card conatiner col-lg-10 mx-auto">
                        < br/>
                         <p style={{color: "green" ,fontSize:"30px" , fontFamily : "roboto"}} class="center"> MediCore </p>
                         
                         <hr />
                         <h3  style={{ color: "green" , marginLeft: "20px" , fontFamily: "roboto"}}> Patient Details </h3>
                         <div class="row">
                            <div class="col-lg-5 ml-3">
                            <p  > <b> Doctor Name </b>:  {pres.doctor}</p> 
                            <p > <b> Name</b>:  {arr.name}</p>  
                            <p  > <b> Age </b>:  {arr.age}</p> 
                            <p > <b> Contact Number</b>:  {arr.phone}</p>   
                            </div>
                            <div class="col-lg-5">
                            <p > <b> Prescription Number </b>:  {pres.licenseNo} </p> 
                            <p > <b> Gender </b> :  {arr.sex} </p> 
                            <p > <b> Weight </b>:  {arr.weight} </p> 
                            <p > <b> Email </b> :  {arr.email} </p> 
                            </div>
                         </div>
                       
                         
                          
                          <br/>
                          <h3  style={{ color: "green" , marginLeft: "20px" , fontFamily: "roboto"}}> Diagnosis </h3>
                          
                          <hr />
                                                    <p style={{ marginLeft: "20px" }}> Disease Diagonsed : </p>
                          <div class="card col-lg-11 container" style={{ marginLeft: "20px" }}  > 
                                <p > {pres.disease} </p>
                          </div>
                          <p style={{ marginLeft: "20px" }}>  Medicines Suggested  : </p>
                          <div class="card col-lg-11 conatiner" style={{ marginLeft: "20px" }}> 
                                <p> {pres.medicines} </p>
                          </div>
                          <p style={{ marginLeft: "20px" }}>  Test Prescribed : </p>
                          <div class="card col-lg-11 conatiner" style={{ marginLeft: "20px" }}> 
                                <p> {pres.test} </p>
                          </div>
                          <p style={{ marginLeft: "20px" }}>  Comments : </p>
                          <div class="card col-lg-11 conatiner" style={{ marginLeft: "20px" }}> 
                                <p> {pres.comments} </p>
                          </div>
                          < br/>
                          <hr />
                          <p class="center mb-4 " style={{color: "green"  }}> MediCore Generated Prescription </p>
                    </div>

                 </div> );
            if(arr._id===this.props.match.params.id)
            return (
                <div>
                    <div class="row">
                   
                   <div class="card container col-lg-4 mx-auto" style={{fontSize: '20px'}}>
                       <b style={{marginTop: "20px"}} class="center"> Patient Details </b>
                       < hr />
                       <p> Name: {arr.name} </p>
                       <p> Gender : {arr.sex} </p>
                       <p> Date Of Birth : {arr.dob}</p>
                       <p> Contact Number : {arr.phone} </p>
                       <p> Weight: {arr.weight} </p>
                       <p> Allergies: {arr.allergies}</p>
                       <p> Address: {arr.allergies}</p>
                       <p> Age: {arr.age} </p>
                   </div>
                   
                   <div class="card container col-lg-6 mx-auto">
                            <form noValidate onSubmit={this.onSubmit}>
                            <div className="input-field col s12">
                            <input
                            onChange={this.onChange}
                            value={this.state.prescriptionNo}
                            id="prescriptionNo"
                            type="text"
                            />
                            <label htmlFor="prescriptionNo"> Prescription No</label>
                            <div className="input-field col s12">
                                <input
                                onChange={this.onChange}
                                value={this.state.weight}
                                id="weight"
                                type="text"
                                />
                                <label htmlFor="weight"> Weight </label>
                        
                            </div>
                            </div>
                                <div className="input-field col s12">
                                <input
                                onChange={this.onChange}
                                value={this.state.test}
                                id="test"
                                type="text"
                            
                                />
                                <label htmlFor="test"> Test Prescribed</label>
                        
                            </div>
                            <div className="input-field col s12">
                                <input
                                onChange={this.onChange}
                                value={this.state.disease}
                                id="disease"
                                type="text"
                            
                                />
                                <label htmlFor="disease"> Diagonsed Disease</label>
                        
                            </div>
                            <div className="input-field col s12">
                                <input
                                onChange={this.onChange}
                                value={this.state.medicines}
                                id="medicines"
                                type="text"
                                />
                                <label htmlFor="medicines"> Medicines Prescribed</label>
                        
                            </div>
                            <div className="input-field col s12">
                                <input
                                onChange={this.onChange}
                                value={this.state.comments}
                                id="comments"
                                type="text"
                                />
                                <label htmlFor="comments"> Test Comments</label>
                        
                            </div>

                        <div className="col s8" style={{ paddingLeft: "11.250px" }}>
                            <button
                            style={{
                                width: "150px",
                                borderRadius: "3px",
                                letterSpacing: "1.5px",
                                marginTop: "1rem"
                            }}
                            type="submit"
                            className="btn btn-large waves-effect waves-light hoverable blue accent-3"
                            >
                             Prescribe 
                            </button>
                            < br/>
                            < br/>
                        </div>
                        </form>
                   </div>
                   </div>
                     {presdisplay}
                   </div>
            )});
    }
    render() {
        return (
            <div style={{marginTop: "100px"}}>
                {this.fetch_data()}
            </div>
        )
    }
}

patientprofile.propTypes = {
    auth: PropTypes.object.isRequired
  };
  
  const mapStateToProps = state => ({
    auth: state.auth
  });
  
  export default connect(
    mapStateToProps
  )(patientprofile);