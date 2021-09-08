/**
 * TermsCondition Page
 */
import React, { Component, useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import axios, { CancelTokenSource } from "axios";
import {
  Avatar_02,
  Avatar_05,
  Avatar_09,
  Avatar_10,
  Avatar_16,
} from "../../../Entryfile/imagepath";
import {
  ManagerProfileCreate,
  getUserProfileAPI,
} from "../../../api/network/customer/EmployeeApi";

const ManagerProfile = () => {
  const [userProfileData, setUserProfileData] = useState("");
  const [openCreataeProfile, setOpenCreateProfile] = useState(false);

  const [user_id, Usetser_id] = useState(5);
  const [first_name, setFirst_name] = useState("shamis");
  const [last_name, setLast_name] = useState("yasin");
  const [dob, setDob] = useState("2019-01-01");
  const [gender, setGender] = useState("male");
  const [address, setAddress] = useState("lahore");
  const [phoneNumber, setPhoneNumber] = useState();
  const [country, setCountry] = useState("male");
  const [post, setPost] = useState("manager");
  const [postalCode, setPostalCode] = useState("");

  const CancelTokenSource = axios.CancelToken.source();
  useEffect(() => {
    // ManagerProfileCreateApi();
    getUserProfile(1);
  }, []);

  const ManagerProfileCreateApi = () => {
    const response = ManagerProfileCreate(
      3,
      first_name,
      last_name,
      dob,
      gender,
      address,
      country,
      CancelTokenSource.token
    );
  };

  const getUserProfile = async (userId) => {
    const response = await getUserProfileAPI(userId, CancelTokenSource.token);
    if (response.success == true) {
      const { data } = response;
      setUserProfileData(data);
      // const awais = response.PromiseResult;
      console.log("  data miral ", data);
    } else {
      setOpenCreateProfile(true);
      console.log("Failed Response", response);
    }
  };

  return (
    <React.Fragment>
      {!openCreataeProfile ? (
        <div className="page-wrapper">
          <Helmet>
            <title>Manager Profile </title>
            <meta name="description" content="Reactify Blank Page" />
          </Helmet>
          {/* Page Content */}
          <div className="content container-fluid">
            {/* Page Header */}
            <div className="page-header">
              <div className="row">
                <div className="col-sm-12">
                  <h3 className="page-title">Manager Profile</h3>
                  <ul className="breadcrumb">
                    <li className="breadcrumb-item">
                      <a href="/purple/app/main/dashboard">Dashboard</a>
                    </li>
                    <li className="breadcrumb-item active">Profile</li>
                  </ul>
                </div>
              </div>
            </div>
            {/* /Page Header */}
            <div className="card mb-0">
              <div className="card-body">
                <div className="row">
                  <div className="col-md-12">
                    <div className="profile-view">
                      <div className="profile-img-wrap">
                        <div className="profile-img">
                          <a href="#">
                            <img alt="" src={Avatar_02} />
                          </a>
                        </div>
                      </div>
                      <div className="profile-basic">
                        <div className="row">
                          <div className="col-md-5">
                            <div className="profile-info-left">
                              <h3 className="user-name m-t-0 mb-0">
                                {userProfileData.first_name}
                              </h3>
                              <h6 className="text-muted">
                                {userProfileData.country}
                              </h6>
                              <small className="text-muted">
                                {userProfileData.designation}
                              </small>
                              <div className="small doj text-muted">
                                {userProfileData.dob}
                              </div>
                            </div>
                          </div>
                          <div className="col-md-7">
                            <ul className="personal-info">
                              <li>
                                <div className="title">Phone:</div>
                                <div className="text">
                                  <a href="">9876543210</a>
                                </div>
                              </li>
                              <li>
                                <div className="title">Email:</div>
                                <div className="text">
                                  <a href="">johndoe@example.com</a>
                                </div>
                              </li>
                              <li>
                                <div className="title">Birthday:</div>
                                <div className="text">24th July</div>
                              </li>
                              <li>
                                <div className="title">Address:</div>
                                <div className="text">
                                  1861 Bayonne Ave, Manchester Township, NJ,
                                  08759
                                </div>
                              </li>
                              <li>
                                <div className="title">Gender:</div>
                                <div className="text">Male</div>
                              </li>
                              <li>
                                <div className="title">Reports to:</div>
                                <div className="text">
                                  <div className="avatar-box">
                                    <div className="avatar avatar-xs">
                                      <img src={Avatar_16} alt="" />
                                    </div>
                                  </div>
                                  <a href="/purple/app/profile/employee-profile">
                                    Jeffery Lalor
                                  </a>
                                </div>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      <div className="pro-edit">
                        <a
                          data-target="#profile_info"
                          data-toggle="modal"
                          className="edit-icon"
                          href="#"
                        >
                          <i className="fa fa-pencil" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="card tab-box">
              <div className="row user-tabs">
                <div className="col-lg-12 col-md-12 col-sm-12 line-tabs">
                  <ul className="nav nav-tabs nav-tabs-bottom">
                    <li className="nav-item">
                      <a
                        href="#emp_profile"
                        data-toggle="tab"
                        className="nav-link active"
                      >
                        Profile
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="tab-content">
              {/* Profile Info Tab */}
              <div
                id="emp_profile"
                className="pro-overview tab-pane fade show active"
              >
                <div className="row">
                  <div className="col-md-12 d-flex">
                    <div className="card profile-box flex-fill">
                      <div className="card-body">
                        <h3 className="card-title">
                          Personal Informations{" "}
                          <a
                            href="#"
                            className="edit-icon"
                            data-toggle="modal"
                            data-target="#personal_info_modal"
                          >
                            <i className="fa fa-pencil" />
                          </a>
                        </h3>
                        <ul className="personal-info">
                          <li>
                            <div className="title">Passport No.</div>
                            <div className="text">9876543210</div>
                          </li>
                          <li>
                            <div className="title">Passport Exp Date.</div>
                            <div className="text">9876543210</div>
                          </li>
                          <li>
                            <div className="title">Tel</div>
                            <div className="text">
                              <a href="">9876543210</a>
                            </div>
                          </li>
                          <li>
                            <div className="title">Nationality</div>
                            <div className="text">Indian</div>
                          </li>
                          <li>
                            <div className="title">Religion</div>
                            <div className="text">Christian</div>
                          </li>
                          <li>
                            <div className="title">Marital status</div>
                            <div className="text">Married</div>
                          </li>
                          <li>
                            <div className="title">Employment of spouse</div>
                            <div className="text">No</div>
                          </li>
                          <li>
                            <div className="title">No. of children</div>
                            <div className="text">2</div>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* /Profile Info Tab */}
            </div>
          </div>
          {/* /Page Content */}
          {/* Profile Modal */}
          <div
            id="profile_info"
            className="modal custom-modal fade"
            role="dialog"
          >
            <div
              className="modal-dialog modal-dialog-centered modal-lg"
              role="document"
            >
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title">Profile Information</h5>
                  <button
                    type="button"
                    className="close"
                    data-dismiss="modal"
                    aria-label="Close"
                  >
                    <span aria-hidden="true">×</span>
                  </button>
                </div>
                <div className="modal-body">
                  <form>
                    <div className="row">
                      <div className="col-md-12">
                        <div className="profile-img-wrap edit-img">
                          <img
                            className="inline-block"
                            src={Avatar_02}
                            alt="user"
                          />
                          <div className="fileupload btn">
                            <span className="btn-text">edit</span>
                            <input className="upload" type="file" />
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-md-6">
                            <div className="form-group">
                              <label>First Name</label>
                              <input
                                type="text"
                                className="form-control"
                                defaultValue="John"
                              />
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="form-group">
                              <label>Last Name</label>
                              <input
                                type="text"
                                className="form-control"
                                defaultValue="Doe"
                              />
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="form-group">
                              <label>Birth Date</label>
                              <div className="cal-icon">
                                <input
                                  className="form-control datetimepicker"
                                  type="text"
                                  defaultValue="05/06/1985"
                                />
                              </div>
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="form-group">
                              <label>Gender</label>
                              <select className="select form-control">
                                <option value="male selected">Male</option>
                                <option value="female">Female</option>
                              </select>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-12">
                        <div className="form-group">
                          <label>Address</label>
                          <input
                            type="text"
                            className="form-control"
                            defaultValue="4487 Snowbird Lane"
                          />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group">
                          <label>State</label>
                          <input
                            type="text"
                            className="form-control"
                            defaultValue="New York"
                          />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group">
                          <label>Country</label>
                          <input
                            type="text"
                            className="form-control"
                            defaultValue="United States"
                          />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group">
                          <label>Pin Code</label>
                          <input
                            type="text"
                            className="form-control"
                            defaultValue={10523}
                          />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group">
                          <label>Phone Number</label>
                          <input
                            type="text"
                            className="form-control"
                            defaultValue="631-889-3206"
                          />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group">
                          <label>
                            Department <span className="text-danger">*</span>
                          </label>
                          <select className="select">
                            <option>Select Department</option>
                            <option>Web Development</option>
                            <option>IT Management</option>
                            <option>Marketing</option>
                          </select>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group">
                          <label>
                            Designation <span className="text-danger">*</span>
                          </label>
                          <select className="select">
                            <option>Select Designation</option>
                            <option>Web Designer</option>
                            <option>Web Developer</option>
                            <option>Android Developer</option>
                          </select>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group">
                          <label>
                            Reports To <span className="text-danger">*</span>
                          </label>
                          <select className="select">
                            <option>-</option>
                            <option>Wilmer Deluna</option>
                            <option>Lesley Grauer</option>
                            <option>Jeffery Lalor</option>
                          </select>
                        </div>
                      </div>
                    </div>
                    <div className="submit-section">
                      <button className="btn btn-primary submit-btn">
                        Submit
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
          {/* /Profile Modal */}
          {/* Personal Info Modal */}
          <div
            id="personal_info_modal"
            className="modal custom-modal fade"
            role="dialog"
          >
            <div
              className="modal-dialog modal-dialog-centered modal-lg"
              role="document"
            >
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title">Personal Information</h5>
                  <button
                    type="button"
                    className="close"
                    data-dismiss="modal"
                    aria-label="Close"
                  >
                    <span aria-hidden="true">×</span>
                  </button>
                </div>
                <div className="modal-body">
                  <form>
                    <div className="row">
                      <div className="col-md-6">
                        <div className="form-group">
                          <label>Passport No</label>
                          <input type="text" className="form-control" />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group">
                          <label>Passport Expiry Date</label>
                          <div className="cal-icon">
                            <input
                              className="form-control datetimepicker"
                              type="text"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group">
                          <label>Tel</label>
                          <input className="form-control" type="text" />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group">
                          <label>
                            Nationality <span className="text-danger">*</span>
                          </label>
                          <input className="form-control" type="text" />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group">
                          <label>Religion</label>
                          <div className="cal-icon">
                            <input className="form-control" type="text" />
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group">
                          <label>
                            Marital status{" "}
                            <span className="text-danger">*</span>
                          </label>
                          <select className="select form-control">
                            <option>-</option>
                            <option>Single</option>
                            <option>Married</option>
                          </select>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group">
                          <label>Employment of spouse</label>
                          <input className="form-control" type="text" />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group">
                          <label>No. of children </label>
                          <input className="form-control" type="text" />
                        </div>
                      </div>
                    </div>
                    <div className="submit-section">
                      <button className="btn btn-primary submit-btn">
                        Submit
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
          {/* /Personal Info Modal */}
        </div>
      ) : (
        <div className="page-wrapper">
          <Helmet>
            <title>Manager Profile </title>
            <meta name="description" content="Reactify Blank Page" />
          </Helmet>
          <div className="content container-fluid">
            <div className="page-header">
              <div className="row">
                <div className="col-sm-12">
                  <h3 className="page-title">Manager Profile</h3>
                  <ul className="breadcrumb">
                    <li className="breadcrumb-item">
                      <a href="/purple/app/main/dashboard">Dashboard</a>
                    </li>
                    <li className="breadcrumb-item active">
                      You don't have profile yet
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/*page card */}
            <div className="card mb-10 p-20">
              <div className="card-body">
                <div className="row">
                  <div className="col-md-12">
                    <div className="profile-view"></div>
                    <div className="profile-basic">
                      <div className="row">
                        <div className="col-md-12">
                          <h3 className="user-name m-t-0 mb-0">
                            Please Create Your Profile
                          </h3>
                          <button
                            data-target="#profile_info"
                            data-toggle="modal"
                            className="btn btn-secondary"
                            href="#"
                          >
                            create Profile
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Profile Modal */}
            <div
              id="profile_info"
              className="modal custom-modal fade"
              role="dialog"
            >
              <div
                className="modal-dialog modal-dialog-centered modal-lg"
                role="document"
              >
                <div className="modal-content">
                  <div className="modal-header">
                    <h5 className="modal-title">Profile Information</h5>
                    <button
                      type="button"
                      className="close"
                      data-dismiss="modal"
                      aria-label="Close"
                    >
                      <span aria-hidden="true">×</span>
                    </button>
                  </div>
                  <div className="modal-body">
                    <form>
                      <div className="row">
                        <div className="col-md-12">
                          <div className="profile-img-wrap edit-img">
                            <img
                              className="inline-block"
                              src={Avatar_02}
                              alt="user"
                            />
                            <div className="fileupload btn">
                              <span className="btn-text">upload</span>
                              <input className="upload" type="file" />
                            </div>
                          </div>
                          <div className="row">
                            <div className="col-md-6">
                              <div className="form-group">
                                <label>First Name</label>
                                <input
                                  type="text"
                                  className="form-control"
                                  value={first_name}
                                  onChange={(e) =>
                                    setFirst_name(e.target.value)
                                  }
                                />
                              </div>
                            </div>
                            <div className="col-md-6">
                              <div className="form-group">
                                <label>Last Name</label>
                                <input
                                  type="text"
                                  className="form-control"
                                  value={last_name}
                                  onChange={(e) => setLast_name(e.targrt.value)}
                                />
                              </div>
                            </div>
                            <div className="col-md-6">
                              <div className="form-group">
                                <label>Birth Date</label>
                                <div className="cal-icon">
                                  <input
                                    className="form-control datetimepicker"
                                    type="text"
                                    value={dob}
                                    onChange={(e) => setDob(e.target.value)}
                                  />
                                </div>
                              </div>
                            </div>
                            <div className="col-md-6">
                              <div className="form-group">
                                <label>Gender</label>
                                <select
                                  className="form-control"
                                  value={gender}
                                  onChange={(e) => setGender(e.target.value)}
                                >
                                  <option value="male">Male</option>
                                  <option value="female">Female</option>
                                </select>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-md-12">
                          <div className="form-group">
                            <label>Address</label>
                            <input
                              type="text"
                              className="form-control"
                              value={address}
                              onChange={(e) => setAddress(e.target.address)}
                            />
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-group">
                            <label>Country</label>
                            <input
                              type="text"
                              className="form-control"
                              value={country}
                              onChange={(e) => setCountry(e.target.value)}
                            />
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-group">
                            <label>Postal Code</label>
                            <input
                              type="text"
                              className="form-control"
                              value={postalCode}
                              onChange={(e) => e.target.value}
                            />
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-group">
                            <label>Phone Number</label>
                            <input
                              type="text"
                              className="form-control"
                              value={phoneNumber}
                              onChange={(e) => setPhoneNumber(e.target.value)}
                            />
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-group">
                            <label>
                              Designation <span className="text-danger">*</span>
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              value={post}
                              onChange={(e) => setPost(e.target.value)}
                            />
                          </div>
                        </div>
                      </div>
                      <div className="submit-section">
                        <button
                          className="btn btn-primary"
                          onClick={ManagerProfileCreateApi}
                        >
                          Submit
                        </button>
                        <a
                          className="btn btn-primary account-btn"
                          onClick={() => ManagerProfileCreateApi()}
                        >
                        Submit
                        </a>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
            {/* /Profile Modal */}
          </div>
        </div>
      )}
    </React.Fragment>
  );
};

export default ManagerProfile;
