import React, { Component } from 'react'
import axios from "axios";

export default class mainpage extends Component {
    constructor() {
        super();
        this.state = {
          email: ""
        };
      }
    onChange = e => {
        this.setState({ [e.target.id]: e.target.value });
        console.log(this.state)
      };
    
      onSubmit = e => {
        e.preventDefault();
        const pat = {
            email: this.state.email,
          };
        axios
        .post("/doctor/pat-login", pat)
        .then(res => this.props.history.push("/doctor/otp"))
      };
    render() {
        return (
            <div style={{marginTop: "100px"}} class="card conatiner col-lg-6 mx-auto center ml-2 mb-2 mr-2"> 
            <h2 style={{fontFamily: "roboto" , marginTop: "30px"}}> Patient Details </h2>
            <hr />
                <form noValidate onSubmit={this.onSubmit}>
              <div className="input-field  mx-auto">
                <label htmlFor="email">Email</label>
                <input
                  onChange={this.onChange}
                  value={this.state.email}
                  id="email"
                  type="email"
                />
                
                <button
                  style={{
                    width: "150px",
                    borderRadius: "3px",
                    letterSpacing: "1.5px",
                    marginTop: "1rem",
                    marginBottom:"21px"
                  }}
                  type="submit"
                  className="btn btn-small waves-effect waves-light hoverable blue accent-3 btnd btn-primary"
                >
                  Send OTP
                </button>
              </div>
              
              </form>
            </div>
        )
    }
}
