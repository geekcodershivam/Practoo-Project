import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { loginDoctor } from "../../actions/authActions";
import classnames from "classnames";
import img from '../../images/img10.jpg'
import './style.css'


class DoctorLogin extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
      errors: {}
    };
  }

  componentDidMount() {
    // If logged in and user navigates to Login page, should redirect them to dashboard
    if (this.props.auth.isAuthenticated) {
      this.props.history.push("/doctor/dashboard");
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.auth.isAuthenticated) {
      this.props.history.push("/doctor/dashboard");
    }

    if (nextProps.errors) {
      this.setState({
        errors: nextProps.errors
      });
    }
  }

  onChange = e => {
    this.setState({ [e.target.id]: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();
    const userData = {
      email: this.state.email,
      password: this.state.password
    };

    this.props.loginDoctor(userData);
  };

  render() {
    const { errors } = this.state;

    return (

      <div className="container">
        <div style={{ marginTop: "9rem" }} className="row">
        <div className="col-lg-6 offset-s2 ">
          <img src={img} alt="..." style={{width: "100%", height:"100%" }}/>
          </div>
          <div className="col-lg-5 offset-s2 form-v8">
          {/* <Box width ="100%" height="100%"   item xs={12} sm={8} md={5} component={Paper} elevation={6} className="card" >
            <div className="col s12" style={{ paddingLeft: "11.250px" }}>
              <br/> 
              <br/> 
              <h4>
                <b>Log In</b>
              </h4>
              <p className="grey-text text-darken-1 mb-3 mt-3">
                Don't have an account? <Link to="/doctor/register">Register</Link>
              </p>
              
            </div>
            <br/>
             

            <form noValidate onSubmit={this.onSubmit}>
            <br/> 
            <br/> 
            <br/> 
              <div className="input-field col s12">
                <input
                  onChange={this.onChange}
                  value={this.state.email}
                  error={errors.email}
                  id="email"
                  type="email"
                  className={classnames("", {
                    invalid: errors.email || errors.emailnotfound
                  })}
                />
                <label htmlFor="email">Email</label>
                <span className="red-text">
                  {errors.email}
                  {errors.emailnotfound}
                </span>
              </div>
              <div className="input-field col s12">
                <input
                  onChange={this.onChange}
                  value={this.state.password}
                  error={errors.password}
                  id="password"
                  type="password"
                  className={classnames("", {
                    invalid: errors.password || errors.passwordincorrect
                  })}
                />
                <label htmlFor="password">Password</label>
                <span className="red-text">
                  {errors.password}
                  {errors.passwordincorrect}
                </span>
              </div>
              <div className="col s12" style={{ paddingLeft: "11.250px" }}>
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
                  Login
                </button>
                <br/> 
                <br/> 
              </div>
            </form>
            </Box> */}



            {/* ////// */}
            <div className="page-content">
		<div className="form-v9-content">
			<div className="form-right">
				<div className="tab">
					<div className="tab-inner">
						<button className="tablinks">Doctor Login</button>
					</div>
				</div>
				<form className="form-detail" noValidate onSubmit={this.onSubmit}>
					<div className="tabcontent">
						<div className="form-row">
							<label className="form-row-inner">
                <input
                 onChange={this.onChange}
                 value={this.state.email}
                 error={errors.email}
                 id="email"
                 type="email"
                 className={classnames("", {
                   invalid: errors.email || errors.emailnotfound
                 })}
                
                required/>
								<span className="label">Username</span>
		  						<span className="border"></span>
                  <span className="red-text">
                  {errors.password}
                  {errors.passwordincorrect}
                </span>
							</label>
						</div>
						<span className="red-text">
                  {errors.password}
                  {errors.passwordincorrect}
                </span>
						<div className="form-row">
							<label className="form-row-inner">
                <input
                 onChange={this.onChange}
                 value={this.state.password}
                 error={errors.password}
                 id="password"
                 type="password"
                 className={classnames("", {
                   invalid: errors.password || errors.passwordincorrect
                 })}
                required/>
								<span className="label">Password</span>
								<span className="border"></span>
                <span className="red-text">
                  {errors.password}
                  {errors.passwordincorrect}
                </span>
							</label>
						</div>

						<div className="form-row-last">
							<input type="submit" name="Login" className="register btnd btn-primary" value="Login"/>
              <Link className="register btnd btn-primary" to="/doctor/register">Register</Link>
						</div>
					</div>
				</form>
			</div>
		</div>
	</div>
  
            {/* ////// */}
          </div>
        </div>
      </div>
    );
  }
}

DoctorLogin.propTypes = {
  loginDoctor: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});

export default connect(
  mapStateToProps,
  { loginDoctor }
)(DoctorLogin);
