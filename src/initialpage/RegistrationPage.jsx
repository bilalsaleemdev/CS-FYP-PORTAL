import React, { useEffect, useState } from "react";
import { Applogo } from "../Entryfile/imagepath.jsx";
import { loginAdmin } from "../api/network/customer/EmployeeApi";
import axios, { CancelTokenSource } from "axios";
import { Config } from "../../Config";
import { Helmet } from "react-helmet";
import { Registration } from "../api/network/customer/EmployeeApi";
import { useFormik } from "formik";
import * as Yup from "yup";
import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";
import Button from "@mui/material/Button";
import Snackbar from "@material-ui/core/Snackbar";
import Slide from "@material-ui/core/Slide";
import { useHistory } from "react-router-dom";

const initialValues = {
  name: "",
  email: "",
  type: "employee",
  password: "",
};
function TransitionLeft(props) {
  return <Slide {...props} direction="left" />;
}

const onSubmit = (values) => {
  console.log("Form data", values);
};
const validationSchema = Yup.object({
  name: Yup.string().required("Required").min(4),
  email: Yup.string().email("Invalid email format").required("Required"),
  type: Yup.string().required("Required"),
  password: Yup.string().required("Required").min(6),
});

const Registrationpage = () => {
  const [conditions, setConditions] = useState(true);
  const [transition, setTransition] = useState(undefined);
  const [loading, setLoading] = useState(false);
  const [duplicateMessage, setDuplicateMessage] = useState(false);
  const [openSuccess, setOpenSuccess] = useState(false);
  const history = useHistory();
  const validate = (values) => {
    const errors = {};
    if (values.email) {
      setConditions(false);
    }

    if (!values.name) {
      errors.name = "Required";
      setConditions(true);
    }

    if (!values.email) {
      errors.email = "Required";
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
    ) {
      errors.email = "Invalid email format";
      setConditions(true);
    }

    if (!values.password) {
      errors.password = "Required";
      setConditions(true);
    } else if (!values.password.length > 5) {
      errors.password = "Please Enter Atleast 6 Characters";
      setConditions(true);
    }

    return errors;
  };

  const formik = useFormik({
    initialValues,
    onSubmit,
    validate,
    // validationSchema
  });

  console.log("formik.touched", formik.touched);

  const cancelTokenSource = axios.CancelToken.source();
  // useEffect(() => {
  //   console.log('awais')
  //   console.log(type, 'haaalo tpe')

  // }, [])

  const RegistrationApi = async () => {
    setTransition(() => TransitionLeft);
    setLoading(true);

    const response = await Registration(
      formik.values.name,
      formik.values.email,
      formik.values.type,
      formik.values.password,
      cancelTokenSource.token
    );
    

    console.log(response, "sign up response");
    if (response.success == true) {
      setLoading(false);
      setOpenSuccess(true);
      console.log("awais api");
      console.log("awais res", response);
      // history.push("/login");
    } else {
      setDuplicateMessage(true)
      setLoading(false);
      console.log("Failed Response", response);
      
    }
  };
  const handleDuplicateClose = () => {
    setDuplicateMessage(false);
  };
  const handleClose = () => {
    setOpenSuccess(false);
  };
  return (
    <>
      {openSuccess && (
        <Snackbar
          open={open}
          onClose={handleClose}
          TransitionComponent={transition}
          message="Your Request Is Submitted"
          key={transition ? transition.name : ""}
        />
      )}
      {duplicateMessage && (
        <Snackbar
          open={open}
          onClose={handleDuplicateClose}
          TransitionComponent={transition}
          message="Email Already Exist In the System"
          key={transition ? transition.name : ""}
        />
      )}
      <div className="main-wrapper">
        <Helmet>
          <title>Register - HRMS Admin Template</title>
          <meta name="description" content="Login page" />
        </Helmet>
        <div>
          <Backdrop
            sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
            open={loading}
          >
            <CircularProgress color="inherit" />
          </Backdrop>
        </div>

        <div className="account-content">
          <a href="/login" className="btn btn-primary apply-btn">
            Login
          </a>
          <div className="container">
            {/* Account Logo */}
            <div className="account-logo">
              <a href="/app/main/dashboard">
                <img src={Applogo} alt="Dreamguy's Technologies" />
              </a>
            </div>
            {/* /Account Logo */}
            <div className="account-box">
              <div className="account-wrapper">
                <h3 className="account-title">Register</h3>
                <p className="account-subtitle">Access to our dashboard</p>
                {/* Account Form */}
                <form onSubmit={formik.handleSubmit}>
                  <div className="form-group">
                    <label>Name</label>
                    <input
                      className="form-control"
                      placeholder="name"
                      type="text"
                      id="name"
                      name="name"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.name}
                      required
                    />
                    {formik.touched.name && formik.errors.name ? (
                      <div style={{ color: "red", marginTop: "4px" }}>
                        {formik.errors.name}
                      </div>
                    ) : null}
                  </div>
                  <div className="form-group">
                    <label>Email</label>
                    <input
                      className="form-control"
                      placeholder="email"
                      type="email"
                      id="email"
                      name="email"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.email}
                    />
                    {formik.touched.email && formik.errors.email ? (
                      <div style={{ color: "red", marginTop: "4px" }}>
                        {formik.errors.email}
                      </div>
                    ) : null}
                  </div>
                  <div className="form-group">
                    <label>TYPE</label>
                    <select
                      className="form-control"
                      type="type"
                      id="type"
                      name="type"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.type}
                    >
                      {formik.touched.type && formik.errors.type ? (
                        <div style={{ color: "red", marginTop: "4px" }}>
                          {formik.errors.type}
                        </div>
                      ) : null}

                      <option value="manager">Manager</option>
                      <option value="employee">Employee</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label>Password</label>
                    <input
                      className="form-control"
                      placeholder="Password"
                      type="password"
                      name="password"
                      id="password"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.password}
                    />
                    {formik.touched.password && formik.errors.password ? (
                      <div style={{ color: "red", marginTop: "4px" }}>
                        {formik.errors.password}
                      </div>
                    ) : null}
                  </div>

                  <button
                    disabled={conditions}
                    className="btn btn-primary account-btn"
                    onClick={() => RegistrationApi()}
                  >
                    Register
                  </button>
                  <div className="account-footer">
                    <p>
                      Already have an account? <a href="/login">Login</a>
                    </p>
                  </div>
                </form>
                {/* /Account Form */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Registrationpage;
