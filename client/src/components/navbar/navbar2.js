import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";
import {Link} from "react-router-dom"; 

import '../navbar/navbar2.css'

class Navbar2 extends Component {
  onLogoutClick = e => {
    e.preventDefault();
    this.props.logoutUser();
    this.props.history.push("/consultnow");
  };

  render() {
    const { user } = this.props.auth;

    return (

      <nav className="shadow-sm navbar navbar-expand-sm navbar-light bg-white py-3 fixed-top">
      <div className="container">
          <Link className="navbar-brand" to="/">
              {/* <img src={icon} alt=""/> */}
             <strong>Practoo</strong>
          </Link>
          <button  className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
          </button>

          <div className={`collapse navbar-collapse `} id="navbarText">
              <ul className="navbar-nav ml-auto mt-2 mt-lg-0">
                  <li className="nav-item">
                      <Link className="nav-link"  to="/home">Home</Link>
                  </li>
                  <li className="nav-item">
                      <Link className="nav-link"  to="/about"></Link>
                  </li>
                  <li className="nav-item">
                      <Link className="nav-link" to="/doctor"> Doctor </Link>
                  </li>
                  <li className="nav-item">
                      <Link className="nav-link" to="/">{user.name} </Link>
                  </li>
                  <li className="nav-item">
                  <button
              className="btnl nav-item"
              onClick={this.onLogoutClick}
              class="btn btn-outline-secondary">
              Logout
            </button> 
                  </li>
              </ul>
          </div>
      </div>
  </nav>
    );
  }
}

Navbar2.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { logoutUser }
)(Navbar2);
