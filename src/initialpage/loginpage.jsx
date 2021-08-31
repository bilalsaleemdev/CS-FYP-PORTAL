import React, { useEffect, useState } from 'react';
import { Applogo } from '../Entryfile/imagepath.jsx'
import { loginAdmin } from '../api/network/customer/EmployeeApi';
import axios, { CancelTokenSource } from "axios";
import { Config } from "../../Config";

const Loginpage = () => {

  const cancelTokenSource = axios.CancelToken.source();
  const loginUserAPI = () => {
    const response = loginAdmin('awais@mailinator.com', '12345', cancelTokenSource.token);
    console.log(response, 'response');
    if (response.success == true) {
    } else {
      console.log('Failed Response', response);
    }
  }

  return (

    <React.Fragment>
      <div className="main-wrapper">
        {/* <Helmet>
               <title>Login - HRMS Admin Template</title>
               <meta name="description" content="Login page"/>					
         </Helmet> */}
        <div className="account-content">
          {/* <a href="/purple/applyjob/joblist" className="btn btn-primary apply-btn">Apply Job</a> */}
          <div className="container">
            {/* Account Logo */}
            <div className="account-logo">
              <a href="/purple/app/main/dashboard"><img src={Applogo} alt="Dreamguy's Technologies" /></a>
            </div>
            {/* /Account Logo */}
            <div className="account-box">
              <div className="account-wrapper">
                <h3 className="account-title">Login</h3>
                <p className="account-subtitle">Access to our dashboard</p>
                {/* Account Form */}
                <form action="/purple/app/main/dashboard">
                  <div className="form-group">
                    <label>Email Address</label>
                    <input className="form-control" type="text" />
                  </div>
                  <div className="form-group">
                    <div className="row">
                      <div className="col">
                        <label>Password</label>
                      </div>
                      {/* <div className="col-auto">
                        <a className="text-muted" href="/purple/forgotpassword">
                          Forgot password?
                        </a>
                      </div> */}
                    </div>
                    <input className="form-control" type="password" />
                  </div>
                  {/* <div className="form-group text-center">
                    <a className="btn btn-primary account-btn"
                    //  href="/purple/app/main/dashboard">
                    // onClick ={Loginpage()}              
                    href=""
                    >                                      
                      Login</a>
                  </div> */}
                  <div className="btn btn-primary account-btn"
                    onClick={() => loginUserAPI()}>
                    Login
                  </div>
                  <div className="account-footer">
                    <p>Don't have an account yet? <a href="/purple/register">Register</a></p>
                  </div>
                </form>
                {/* /Account Form */}
              </div>
            </div>
          </div>
        </div>
      </div>

    </React.Fragment>
  );

}

export default Loginpage;
