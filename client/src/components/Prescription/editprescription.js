import React, { Component } from 'react'
import PropTypes from "prop-types";
import { connect } from "react-redux";

class editprescription extends Component {
    constructor() {
        super();
        this.state = {
          prescriptionNo: "",
          doctor: "",
          comments:"",
          disease:[],
          test:[],
          medicines:[],
          errors: {}
        };
      }
    render() {
        return (
            <div>
                 
            </div>
        )
    }
}

editprescription.propTypes = {
    auth: PropTypes.object.isRequired
  };
  
  const mapStateToProps = state => ({
    auth: state.auth
  });
  
  export default connect(
    mapStateToProps,
    { logoutUser }
  )(editprescription);
  