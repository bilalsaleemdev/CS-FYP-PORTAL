import React, { useEffect, useState } from 'react';
import { Applogo } from '../Entryfile/imagepath.jsx'
import { loginAdmin } from '../api/network/customer/EmployeeApi';
import axios, { CancelTokenSource } from "axios";
import { Config } from "../../Config";
import { Helmet } from "react-helmet";
import { Registration } from '../api/network/customer/EmployeeApi';


  const Registration = () => {
    const response = Registration('awais','Email@gmail.com','manager', 'password', cancelTokenSource.token);
    console.log(response, 'sign up response');
    if (response.success == true) {
      console.log('awais res', response)
    } else {
      console.log('Failed Response', response);
    }
  }


class Registrationpage extends Component {

  Registration();


   state = {
      email: 'demo@example.com',
      password: 'test#123',
      repeatpassword:''
   }

	/**
	 * On User Login
	 */
   onUserLogin = e => {
      e.preventDefault();
      
      if (this.state.email !== '' && this.state.password !== '') {
         this.props.signinUserInFirebase(this.state, this.props.history);

         
      }
    }

    onApplyJob = e => {
        e.preventDefault();
        localStorage.removeItem('jobview')
        this.props.history.push('/applyjob/joblist')
    }

   render() {
      const { email, password } = this.state;
      const { loading } = this.props;
      return (
            
            <div className="main-wrapper">
              <Helmet>
                  <title>Register - HRMS Admin Template</title>
                  <meta name="description" content="Login page"/>					
            </Helmet> 
        <div className="account-content">
          <a href="/applyjob/joblist" className="btn btn-primary apply-btn">Apply Job</a>
          <div className="container">
            {/* Account Logo */}
            <div className="account-logo">
              <a href="/app/main/dashboard"><img src={Applogo} alt="Dreamguy's Technologies" /></a>
            </div>
            {/* /Account Logo */}
            <div className="account-box">
              <div className="account-wrapper">
                <h3 className="account-title">Register</h3>
                <p className="account-subtitle">Access to our dashboard</p>
                {/* Account Form */}
                <form action="/app/main/dashboard">
                  <div className="form-group">
                    <label>Email</label>
                    <input className="form-control" type="text" />
                  </div>
                  <div className="form-group">
                    <label>Password</label>
                    <input className="form-control" type="password" />
                  </div>
                  <div className="form-group">
                    <label>Repeat Password</label>
                    <input className="form-control" type="password" />
                  </div>
                  <div className="form-group text-center">
                    <button className="btn btn-primary account-btn" type='submit' onClick={() => console.log('click')}>Register</button>
                  </div>
                  <div className="account-footer">
                    <p>Already have an account? <a href="/login">Login</a></p>
                  </div>
                </form>
                {/* /Account Form */}
              </div>
            </div>
          </div>
        </div>
      </div>
      );
   }
}


export default Registrationpage;
