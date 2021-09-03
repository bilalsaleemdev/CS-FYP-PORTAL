import React, { useEffect, useState } from "react";
import { Applogo } from "../Entryfile/imagepath.jsx";
import { loginAdmin } from "../api/network/customer/EmployeeApi";
import axios, { CancelTokenSource } from "axios";
import { Config } from "../../Config";
import { Helmet } from "react-helmet";
import { Registration } from "../api/network/customer/EmployeeApi";

const Registrationpage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [type, setType] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const cancelTokenSource = axios.CancelToken.source();
  // useEffect(() => {
  //   console.log('awais')
  //   console.log(type, 'haaalo tpe')

  // }, [])

  const RegistrationApi = () => {
    const response = Registration(
      name,
      email,
      type,
      password,
      cancelTokenSource.token
    );

    console.log(response, "sign up response");
    if (response.success == true) {
      console.log("awais api");
      console.log("awais res", response);
    } else {
      console.log("Failed Response", response);
    }
  };

  /**
   * On User Login
   */
  //  onUserLogin = e => {
  //     e.preventDefault();

  //     if (this.state.email !== '' && this.state.password !== '') {
  //        this.props.signinUserInFirebase(this.state, this.props.history);

  //     }
  //   }

  // onApplyJob = e => {
  //     e.preventDefault();
  //     localStorage.removeItem('jobview')
  //     this.props.history.push('/applyjob/joblist')
  // }

  // const { email, password } = this.state;
  // const { loading } = this.props;

  return (
    <div className="main-wrapper">
      <Helmet>
        <title>Register - HRMS Admin Template</title>
        <meta name="description" content="Login page" />
      </Helmet>
      <div className="account-content">
        <a href="/purple/login" className="btn btn-primary apply-btn">
          Login
        </a>
        <div className="container">
          {/* Account Logo */}
          <div className="account-logo">
            <a href="/purple/app/main/dashboard">
              <img src={Applogo} alt="Dreamguy's Technologies" />
            </a>
          </div>
          {/* /Account Logo */}
          <div className="account-box">
            <div className="account-wrapper">
              <h3 className="account-title">Register</h3>
              <p className="account-subtitle">Access to our dashboard</p>
              {/* Account Form */}
              <form action="/purple/app/main/dashboard">
                <div className="form-group">
                  <label>Name</label>
                  <input
                    className="form-control"
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="NAme"
                  />
                </div>
                <div className="form-group">
                  <label>Email</label>
                  <input
                    className="form-control"
                    type="email"
                    name="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Email address"
                    label="Email address"
                  />
                </div>
                <div className="form-group">
                  <label>TYPE</label>
                  <select
                    className="form-control"
                    onChange={(e) => setType( e.target.value)}
                    value={type}
                  >
                    <option value="manager">Manager</option>
                    <option value="employee">Employee</option>
                  </select>
                </div>

                <div className="form-group">
                  <label>Password</label>
                  <input
                    className="form-control"
                    type="password"
                    name="password"
                    value={password}
                    onChange={(e) => setPassword(e.currentTarget.value)}
                    placeholder="Password"
                    label="Password"
                  />
                </div>

                <div className="form-group text-center">
                  <a
                    className="btn btn-primary account-btn"
                    onClick={() => RegistrationApi()}
                  >
                    Register
                  </a>
                </div>
                <div className="account-footer">
                  <p>
                    Already have an account? <a href="/purple/login">Login</a>
                  </p>
                </div>
              </form>
              {/* /Account Form */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Registrationpage;
