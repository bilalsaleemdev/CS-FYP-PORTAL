import React, { useEffect, useState } from "react";
import Snackbar from '@material-ui/core/Snackbar';
import Slide from '@material-ui/core/Slide';

import { Redirect, Route } from "react-router";
import { Applogo } from "../Entryfile/imagepath.jsx";

import { loginAdmin } from "../api/network/customer/EmployeeApi";
import axios, { CancelTokenSource } from "axios";
import { Config } from "../../Config";
import { Helmet } from "react-helmet";
import CeoDashboard from "../MainPage/Main/pages/Ceo/ceodashboard.jsx";
import { useHistory } from "react-router-dom";

const Loginpage = () => {
  const[wrongPassword, setWeongPassword] = useState(false);
  const [transition, setTransition] = useState(undefined);
  const history = useHistory();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const cancelTokenSource = axios.CancelToken.source();
  console.log("Failed Response", wrongPassword);


  function TransitionLeft(props) {
    return <Slide {...props} direction="left" />;
  }
  const loginUserAPI = async () => {
    setTransition(() => TransitionLeft);

    const response = await loginAdmin(email, password, cancelTokenSource.token);
    if (response.success == true) {
      // const awais = response.PromiseResult;
      const { data } = response;
      const { type } = data;
      const {id} = data;

      switch(type) {
        case 'ceo':
          localStorage.setItem("EmployeeType", type);
          localStorage.setItem("isLogin", true);
          localStorage.setItem("user_id", id);
          history.push("/app/main/dashboard/ceo");
          window.location.reload();
          break;
        case 'manager':
          localStorage.setItem("EmployeeType", type);
          localStorage.setItem("isLogin", true);
          localStorage.setItem("user_id", id);
          history.push("/app/main/dashboard/manager");
          window.location.reload();

          break;
        case 'employee':
          localStorage.setItem("EmployeeType", type);
          localStorage.setItem("isLogin", true);
          localStorage.setItem("user_id", id);

          history.push("/app/main/dashboard/employee");
          // window.location.href

          window.location.reload();
         
          break;
        default:
          history.push("/");
      }

     
      console.log("  data awaiss ", data);
    } else {
      setWeongPassword(true);
      console.log("Failed Response", wrongPassword);
    }
  };


  const handleClose = () => {
    setWeongPassword(false);
  };


  return (
    <React.Fragment>
    {wrongPassword && <Snackbar
        open={open}
        onClose={handleClose}
        TransitionComponent={transition}
        message="Wrog Email or Password"
        key={transition ? transition.name : ''}
      />}
      <div className="main-wrapper">
        {/* <Helmet>
               <title>Login - Gamified Employee Portal</title>
               <meta name="description" content="Login page"/>					
         </Helmet> */}
        <div className="account-content">
          {/* <a href="/applyjob/joblist" className="btn btn-primary apply-btn">Apply Job</a> */}
          <div className="container">
            {/* Account Logo */}
            <div className="account-logo">
              <a href="/login">
                <img src={Applogo} alt="Dreamguy's Technologies" />
              </a>
            </div>
            {/* /Account Logo */}
            <div className="account-box">
              <div className="account-wrapper">
                <h3 className="account-title">Login</h3>
                <p className="account-subtitle">Access to Your Dashboard</p>
                {/* Account Form */}
                <form>
                  <div className="form-group">
                    <label>Email Address</label>
                    <input
                      placeholder="Enter Email"
                      type="email" 
                      id="email" 
                      name="email"
                      className="form-control"
                      onChange={(e) => setEmail(e.target.value)}
                      value={email}
                    />
                  </div>
                  <div className="form-group">
                    <div className="row">
                      <div className="col">
                        <label>Password</label>
                      </div>
                      {/* <div className="col-auto">
                        <a className="text-muted" href="/forgotpassword">
                          Forgot password?
                        </a>
                      </div> */}
                    </div>
                    <input
                      className="form-control"
                      placeholder="Enter Password"
                      type="password"
                      
                      onChange={(e) => setPassword(e.target.value)}
                      value={password}
                    />
                  </div>
                  {/* <div className="form-group text-center">
                    <a className="btn btn-primary account-btn"
                    //  href="/app/main/dashboard">
                    // onClick ={Loginpage()}              
                    href=""
                    >                                      
                      Login</a>
                  </div> */}
                  <div
                    className="btn btn-primary account-btn"
                    onClick={() => loginUserAPI()}
                    type="submit"
                   
                  >
                    Login
                  </div>
                  <div className="account-footer">
                    <p>
                      Don't have an account yet?{" "}
                      <a href="/register">Register</a>
                    </p>
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
};

export default Loginpage;
