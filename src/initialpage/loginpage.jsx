import React, { useEffect, useState } from 'react';
import { Applogo } from '../Entryfile/imagepath.jsx'
import { loginAdmin } from '../api/network/customer/EmployeeApi';
import axios, { CancelTokenSource } from "axios";
import { Config } from "../../Config";
import { Helmet } from "react-helmet";

const Loginpage = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const cancelTokenSource = axios.CancelToken.source();



  const loginUserAPI = () => {
    const response = loginAdmin(email, password, cancelTokenSource.token);
    
    console.log(response.success, 'response');

    if (response) {
      const awais = response.PromiseResult;
      

      console.log('  data miral ', awais)
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
              <a href="/purple/login"><img src={Applogo} alt="Dreamguy's Technologies" /></a>
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
                    <input className="form-control" type="text" onChange={(e) => setEmail(e.target.value)} value={email}/>
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
                    <input className="form-control" type="password" onChange={(e) => setPassword(e.target.value)} value={password}/>
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
