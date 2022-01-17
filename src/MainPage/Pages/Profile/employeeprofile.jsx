/**
 * TermsCondition Page
 */
import React, { Component, useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import axios, { CancelTokenSource } from "axios";
// import DesktopDatePicker from '@mui/lab/DesktopDatePicker';
// import DatePicker from '@mui/lab/DatePicker';
import DateFnsUtils from "@date-io/date-fns";
import "./progress.css";

import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

import {
  KeyboardDatePicker,
  MuiPickersUtilsProvider,
  DatePicker,
} from "@material-ui/pickers";
import {
  Avatar_02,
  Avatar_05,
  Avatar_09,
  Avatar_10,
  Avatar_16,
} from "../../../Entryfile/imagepath";
import { useFormik } from "formik";
import { Input } from "reactstrap";
import {
  ProfileCreate,
  getUserProfileAPI,
  ProfileEdit,
  getUserById,
  getAllTaskEmployee,
} from "../../../api/network/customer/EmployeeApi";

import Dialog from "@material-ui/core/Dialog";
import { format } from "date-fns";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
const initialValues = {
  fname: "",
  lname: "",
  birthDate: format(new Date(), "yyyy-MM-dd"),
  gender: "",
  address: "",
  country: "",
  postal: "",
  cnic: "",
  phone: "",
  address: "",
};

const onSubmit = (values) => {
  console.log("Form data", values);
};

const EmployeeProfile = () => {
  const [isEditOpen, setIsEditOpen] = useState(false);
  const [open, setOpen] = React.useState(false);
  const [userProfileData, setUserProfileData] = useState("");
  const [openCreataeProfile, setOpenCreateProfile] = useState(false);
  const [department, setDepartment] = useState("");
  const [cnic, setCnic] = useState("");

  const [user_id, Usetser_id] = useState(5);
  const [email, setEmail] = useState("");
  const [first_name, setFirst_name] = useState("");
  const [last_name, setLast_name] = useState("");
  const [dob, setDob] = useState("2019-01-01");
  const [gender, setGender] = useState("male");
  const [address, setAddress] = useState("");
  const [phoneNumber, setPhoneNumber] = useState();
  const [country, setCountry] = useState("");
  const [post, setPost] = useState("Manager");
  const [postalCode, setPostalCode] = useState("");
  const [submitResponse, setSubmitResponse] = useState(false);
  const [conditions, setConditions] = useState(true);
  const [nameCeo, setNameCeo] = useState();
  const [imageCondition, setImageCondition] = useState();
  const [profilePic, setProfilePic] = useState(
    "http://localhost:5002/images/profile_pic_1636013308784.png"
  );

  const [employeeTaskData, setEmployeeTaskData] = useState([]);
  const [completedCount, setCompletedCount] = useState();
  const [fiveStarCount, setFiveStarCount] = useState();
  const [countData, setCountData] = useState(false);
  const user_id_local = localStorage.getItem("user_id");

  const [cardOneCondition, setCardOneCondition] = useState(false);
  const [cardTwoCondition, setCardTwoCondition] = useState(false);
  const [cardThreeCondition, setCardThreeCondition] = useState(false);

  const [starCardOneCondition, setStarCardOneCondition] = useState(false);
  const [starCardTwoCondition, setStarCardTwoCondition] = useState(false);
  const [starCardThreeCondition, setStarCardThreeCondition] = useState(false);

  const [starWidthCardOne, setStarWidthCardOne] = useState();
  const [WidthCardOne, setWidthCardOne] = useState();

  const [starWidthCardTwo, setStarWidthCardTwo] = useState();
  const [WidthCardTwo, setWidthCardTwo] = useState();

  const [starWidthCardThree, setStarWidthCardThree] = useState();
  const [WidthCardThree, setWidthCardThree] = useState();

  //for css classes style apply
  const [cardClass, setCardClass] = useState("");

  useEffect(() => {
    if (completedCount) {
      let cardOne = Math.round((completedCount / 10) * 100);
      let CardTwo = Math.round((completedCount / 15) * 100);
      let CardThree = Math.round((completedCount / 20) * 100);

      let starOne = Math.round((fiveStarCount / 5) * 100);
      let starTwo = Math.round((fiveStarCount / 10) * 100);
      let starThree = Math.round((fiveStarCount / 15) * 100);

      if (cardOne > 99 && starOne > 99) {
        setCardClass("changeSilver");
      }

      if (CardTwo > 99 && starTwo > 99) {
        setCardClass("changeGold");
      }

      if (CardThree > 99 && starThree > 99) {
        setCardClass("changePlatinum");
      }

      console.log("awais checking cardOne Value 1", cardOne);
      console.log("awais checking cardOne Value 2", CardTwo);
      console.log("awais checking cardOne Value 3", CardThree);

      let widthCardOn, widthCardTw, widthCardThre, starWidthCardOne;

      widthCardOn = Math.round((completedCount / 10) * 100);
      widthCardOn > 100 ? setWidthCardOne(100) : setWidthCardOne(widthCardOn);

      widthCardTw = Math.round((completedCount / 15) * 100);
      widthCardTw > 100 ? setWidthCardTwo(100) : setWidthCardTwo(widthCardTw);

      widthCardThre = Math.round((completedCount / 20) * 100);
      widthCardThre > 100
        ? setWidthCardThree(100)
        : setWidthCardThree(widthCardThre);

      starWidthCardOne = Math.round((fiveStarCount / 5) * 100);
      starWidthCardOne > 100
        ? setStarWidthCardOne(100)
        : setStarWidthCardOne(starWidthCardOne);

      let starsCardTwo = Math.round((fiveStarCount / 10) * 100);
      starsCardTwo > 100
        ? setStarWidthCardTwo(100)
        : setStarWidthCardTwo(starsCardTwo);

      let starsCardThree = Math.round((fiveStarCount / 15) * 100);
      starsCardThree > 100
        ? setStarWidthCardThree(100)
        : setStarWidthCardThree(starsCardThree);

      if (cardOne > 99) {
        // setForSilver("silvercurrentLevel");
        setCardOneCondition(true);
      }
      if (CardTwo > 99) {
        // setCardOneCondition(true);
        setCardTwoCondition(true);
      }
      if (CardThree > 99) {
        setCardThreeCondition(true);
      }
      // console.log("awais checking starWidthCardOne Value 1", starWidthCardOne);
      // console.log("awais checking widthCardOne Value 2", WidthCardOn);
      // console.log("awais checking cardOne Value 3", CardThree);
    }
  }, [completedCount, fiveStarCount]);

  useEffect(() => {
    if (fiveStarCount) {
      let cardOne = Math.round((fiveStarCount / 5) * 100);
      let CardTwo = Math.round((fiveStarCount / 10) * 100);
      let CardThree = Math.round((fiveStarCount / 15) * 100);
      // console.log("awais checking star cardOne Value 1", starsCardOne);
      // console.log("awais checking star cardOne Value 2", starsCardTwo);
      // console.log("awais checking star cardOne Value 3", starsCardThree);

      if (cardOne > 99) {
        setStarCardOneCondition(true);
      }
      if (CardTwo > 99) {
        setStarCardTwoCondition(true);
      }
      if (CardThree >= 100) {
        setStarCardThreeCondition(true);
      }
    }
  }, [fiveStarCount]);

  useEffect(() => {
    console.log("awais checking setCardThreeCondition 1", cardOneCondition);
    console.log("awais checking setCardThreeCondition 2", cardTwoCondition);
    console.log("awais checking setCardThreeCondition 3", cardThreeCondition);

    console.log(
      "awais checking setCardThreeCondition star 1",
      starCardOneCondition
    );
    console.log(
      "awais checking setCardThreeCondition star2",
      starCardTwoCondition
    );
    console.log(
      "awais checking setCardThreeConditionstar  3",
      starCardThreeCondition
    );
  }, [cardThreeCondition, cardTwoCondition, cardOneCondition, WidthCardOne]);

  useEffect(() => {
    // ManagerProfileCreateApi();
    getAllTaskOFEmployee(user_id_local);
    // UserProfilePic();
  }, []);

  useEffect(() => {
    // ManagerProfileCreateApi();
    getTotalCompletedTask();
    // UserProfilePic();
  }, [employeeTaskData]);

  const cancelTokenSource = axios.CancelToken.source();

  const getAllTaskOFEmployee = async (id) => {
    const response = await getAllTaskEmployee(
      user_id_local,
      cancelTokenSource.token
    );

    if (response.success == true) {
      console.log("awais checking 0", response.data);

      setEmployeeTaskData(response.data.completed_task);

      // console.log(taskData, "awais data for all task");
    }
    // console.log(taskData, "awais data for all task");
  };
  const getTotalCompletedTask = () => {
    let countTotalCompletedTask = 0;
    let countFiveStarTask = 0;

    employeeTaskData.map((item) => {
      countTotalCompletedTask++;
      if (item.rating == 5) {
        countFiveStarTask++;
      }
    });
    console.log("awais checking 2 fivestar", countFiveStarTask);
    console.log("awais checking 2 completed", countTotalCompletedTask);
    if (countFiveStarTask && countTotalCompletedTask) {
      console.log("awais checking 2 111");
      setFiveStarCount(countFiveStarTask);
      setCompletedCount(countTotalCompletedTask);
      setCountData(true);
    }
  };

  useEffect(() => {
    // ManagerProfileCreateApi();
    if (userProfileData) {
      setProfilePic(userProfileData.image_url);
    }
    // UserProfilePic();
  }, [userProfileData]);

  useEffect(() => {
    // ManagerProfileCreateApi();
    getUserProfile(user_id_local);
  }, []);
  useEffect(() => {
    getUserIdFromApi(user_id_local);
  }, [nameCeo]);
  const getUserIdFromApi = async () => {
    console.log("12121212");

    const response = await getUserById(user_id_local, cancelTokenSource.token);
    console.log(response, "my project user");

    if (response.success == true) {
      console.log("awais", response.user.image_url);

      setImageCondition(response.user.image_url);
      setNameCeo(response.user.name);
      // console.log(taskData, "awais data for all task");
    }
    // console.log(taskData, "awais data for all task");
  };

  //for profile picture
  const handleUploadClick = (event) => {
    var file = event.target.files[0];
    let url = URL.createObjectURL(event.target.files[0]);
    console.log(file); // Would see a path?
    const reader = new FileReader();
    console.log(url); // Would see a path?
    setProfilePic(url);
    UserProfilePic(file);
  };

  const validate = (values) => {
    const errors = {};
    if (
      values.lname &&
      values.phone &&
      values.postal &&
      values.address &&
      values.cnic
    ) {
      setConditions(false);
    }

    if (!values.lname) {
      errors.lname = "Required";
      setConditions(true);
    }
    if (!values.address) {
      errors.address = "Required";
      setConditions(true);
    }
    if (!values.phone) {
      errors.phone = "Required";
      setConditions(true);
    }
    if (!values.cnic) {
      errors.cnic = "Required";
      setConditions(true);
    } else if (!/^[0-9+]{5}-[0-9+]{7}-[0-9]{1}$/.test(values.cnic)) {
      errors.cnic = "Invalid Cnic format Correct Format is xxxxx-xxxxxxx-x";
      setConditions(true);
    }
    if (!values.postal) {
      errors.postal = "Required";
      setConditions(true);
    }
    if (!values.country) {
      errors.country = "Required";
      setConditions(true);
    }
    if (!values.birthDate) {
      errors.birthDate = "Required";
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

  console.log("formik.touched", formik.values.gender);
  const handleCloseSubmitResponse = () => {
    setIsEditOpen(false);
    setOpen(false);
    window.location.reload();
  };

  const EditProfileApi = async () => {
    const response = ProfileEdit(
      user_id_local,
      first_name,
      last_name,
      dob,
      cnic,
      "a ",
      phoneNumber,

      gender,
      address,
      country,
      postalCode,
      cancelTokenSource.token
    );
    if (response) {
      setIsEditOpen(true);
      // const awais = response.PromiseResult;
      const { data } = response;
      setOpenCreateProfile(true);

      console.log("  data awaiss ", response);
    } else {
      console.log("Failed Response", response);
    }
  };
  const ManagerProfileCreateApi = async () => {
    setOpen(true);
    const response = await ProfileCreate(
      user_id_local,
      nameCeo,
      formik.values.lname,
      formik.values.birthDate,
      formik.values.cnic,
      " ",
      formik.values.phone,

      formik.values.gender,
      formik.values.address,
      formik.values.country,
      formik.values.postal,
      cancelTokenSource.token
    );
    if (response) {
      // const awais = response.PromiseResult;
      const { data } = response;
      setOpenCreateProfile(true);

      console.log("  data awaiss ", response);
    } else {
      console.log("Failed Response", response);
    }
  };

  const UserProfilePic = async (file) => {
    let formData = new FormData();
    formData.append("profile_pic", file);
    axios
      .put(
        `http://localhost:5002/api/v1/upload/pic/${user_id_local}`,
        formData,
        {
          headers: {
            "Content-Type": file?.type,
          },
        }
      )
      .then((response) => {
        console.log("Image Upload Success ", response);
        axios.defaults.headers["x-auth-token"] = token;
        verifyDoc(customerFundDocumentId ? customerFundDocumentId : "");
      })
      .catch((err) => {
        console.log("Image Upload Failed Response", err);
      });
  };

  // const ManagerProfileCreateApi = () => {
  //   const response = ManagerProfileCreate(
  //     5,
  //     first_name,
  //     last_name,
  //     dob,
  //     postalCode,
  //     gender,
  //     address,
  //     country,
  //     cancelTokenSource.token
  //   );

  //   console.log(response, "awaisssssss");
  //   // setOpenCreataeProfile(true);
  // };

  const getUserProfile = async (userId) => {
    const response = await getUserProfileAPI(userId, cancelTokenSource.token);
    if (response.success == true) {
      const { data } = response;

      setOpenCreateProfile(true);

      setEmail(data.email);

      setUserProfileData(data);
      setFirst_name(data.first_name);
      setLast_name(data.last_name);
      setPhoneNumber(data.phone);
      setAddress(data.address);
      setPostalCode(data.postal_code);
      setCountry(data.country);
      setDepartment(data.department);
      setCnic(data.cnic);
      // const awais = response.PromiseResult;
      console.log("  data miral ", data);
    } else {
      setOpenCreateProfile(false);
      console.log("Failed Response", response);
    }
  };

  const ProfileEditHandle = () => {
    EditProfileApi();
    setIsEditOpen(true);
  };

  // const [testing, setTesting] = useState("currentLevel");

  return (
    <React.Fragment>
      {isEditOpen && (
        <Dialog
          open={isEditOpen}
          onClose={handleCloseSubmitResponse}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">
            {"Confirmation message"}
          </DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              Hey! Your Profile Edited successfully..!
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button
              onClick={handleCloseSubmitResponse}
              color="primary"
              autoFocus
            >
              OK!
            </Button>
          </DialogActions>
        </Dialog>
      )}
      {open && (
        <Dialog
          open={open}
          onClose={handleCloseSubmitResponse}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">
            {"Confirmation message"}
          </DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              Hey! Your Profile created successfully..!
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button
              onClick={handleCloseSubmitResponse}
              color="primary"
              autoFocus
            >
              Ok
            </Button>
          </DialogActions>
        </Dialog>
      )}
      {openCreataeProfile ? (
        <div className="page-wrapper">
          <Helmet>
            <title>Employee Profile </title>
            <meta name="description" content="Reactify Blank Page" />
          </Helmet>
          {/* Page Content */}
          <div className="content container-fluid">
            {/* Page Header */}
            <div className="page-header">
              <div className="row">
                <div className="col-sm-12">
                  <h3 className="page-title">Employee Profile</h3>
                  <ul className="breadcrumb">
                    <li className="breadcrumb-item">
                      <a href="/app/main/dashboard">Dashboard</a>
                    </li>
                    <li className="breadcrumb-item active">Profile</li>
                  </ul>
                </div>
              </div>
            </div>
            {/* /Page Header */}
            {countData ? (
              <div style={{ marginBottom: "20px" }} className="row">
                <div className="col-md-9">
                  <div className="card mb-0">
                    <div className="card-body currentLevel">
                      <div className="row">
                        <div className="col-md-12">
                          <div>
                            <div class="container">
                              <div style={{ position: "relative" }}>
                                <div class="d-flex lineParent">
                                  <div class="connecting-line"></div>
                                </div>
                                <div class="d-flex">
                                  <div class="stepTab ">
                                    <div
                                      className={`square-tab square-tab-nolevel `}
                                    >
                                      <div classsName="">
                                        <i
                                          style={{ color: "black" }}
                                          className={`fas fa-user-clock `}
                                        ></i>
                                      </div>
                                    </div>
                                  </div>
                                  <div className={`stepTab`}>
                                    <div
                                      className={`square-tab square-tab-silver`}
                                    >
                                      <div>
                                        <i
                                          style={{ color: "#404040" }}
                                          class="fas fa-medal"
                                        ></i>
                                      </div>
                                    </div>
                                  </div>
                                  <div class="stepTab">
                                    <div
                                      className={`square-tab square-tab-gold`}
                                    >
                                      <i
                                        style={{ color: "#daa520" }}
                                        class="fas fa-medal"
                                      ></i>
                                    </div>
                                  </div>
                                  <div class="stepTab">
                                    <div
                                      className={`square-tab square-tab-platinum`}
                                    >
                                      <i
                                        style={{ color: "#6d9bc3" }}
                                        class="fas fa-medal"
                                      ></i>
                                    </div>
                                  </div>
                                </div>
                              </div>

                              <div class="d-flex">
                                <div
                                  style={{
                                    color: "#fff",
                                    fontSize: ".6375rem",
                                  }}
                                  class="stepTab text-break"
                                >
                                  No Level
                                </div>
                                <div
                                  style={{
                                    color: "#fff",
                                    fontSize: ".7375rem",
                                  }}
                                  class="stepTab text-break"
                                >
                                  Silver
                                </div>
                                <div
                                  style={{
                                    color: "#fff",
                                    fontSize: ".7375rem",
                                  }}
                                  class="stepTab text-break"
                                >
                                  Gold
                                </div>
                                <div
                                  style={{
                                    color: "#fff",
                                    fontSize: ".7375rem",
                                  }}
                                  class="stepTab text-break"
                                >
                                  Platinum
                                </div>
                              </div>

                              <div class="d-flex">
                                <div class="stepTab-card text-break">
                                  {" "}
                                  {
                                    <div
                                      className="card border-secondary mb-3"
                                      style={{ maxWidth: "19rem" }}
                                    >
                                      <div className="card-header">
                                        <div>
                                          {starCardOneCondition ? (
                                            <i
                                              style={{ color: "brown" }}
                                              class="far fa-star"
                                            ></i>
                                          ) : (
                                            <i
                                              style={{ color: "brown" }}
                                              class="fas fa-star"
                                            ></i>
                                          )}

                                          <span> Silver </span>

                                          <i
                                            style={{ color: "green" }}
                                            class="fas fa-check-circle"
                                          ></i>
                                        </div>
                                      </div>
                                      <div className="card-body text-secondary">
                                        <p
                                          style={{
                                            fontSize: "11px",
                                            fontWeight: "900",
                                            marginLeft: "-11px",
                                            marginRight: "-18px",
                                          }}
                                          className="card-title"
                                        >
                                          To Achieve Silver Level You Complete
                                          Following Tasks:
                                        </p>
                                        <p
                                          className="card-text"
                                          style={{
                                            color: "black",
                                            fontSize: "9px",
                                            fontWeight: "500",
                                            marginLeft: "-10px",
                                            marginRight: "-18px",
                                          }}
                                        >
                                          <i
                                            style={{ color: "green" }}
                                            class="fas fa-check-circle"
                                          ></i>{" "}
                                          No Of Completed Tasks:10
                                        </p>

                                        <p
                                          className="card-text"
                                          style={{
                                            color: "black",
                                            fontSize: "9px",
                                            fontWeight: "500",
                                            marginLeft: "-10px",
                                            marginRight: "-18px",
                                          }}
                                        >
                                          <i
                                            style={{ color: "green" }}
                                            class="fas fa-star"
                                          ></i>{" "}
                                          No Of FiveStar Tasks:5
                                        </p>
                                        <hr></hr>
                                        <p
                                          className="card-text"
                                          style={{
                                            color: "black",
                                            fontSize: "10px",
                                            fontWeight: "600",
                                            marginLeft: "-11px",
                                            marginRight: "-17px",
                                          }}
                                        >
                                          <i
                                            style={{ color: "green" }}
                                            class="fas fa-gift"
                                          ></i>{" "}
                                          Following Rewards You get:
                                        </p>

                                        <p
                                          className="card-text"
                                          style={{
                                            color: "black",
                                            fontSize: "9px",
                                            fontWeight: "600",
                                            marginLeft: "-8px",
                                            marginRight: "-17px",
                                          }}
                                        >
                                          {" "}
                                          Two Paid Leaves
                                        </p>

                                        <hr></hr>
                                        <p
                                          className="card-text"
                                          style={{
                                            color: "black",
                                            fontSize: "11px",
                                            fontWeight: "600",
                                            marginLeft: "-11px",
                                            marginRight: "-17px",
                                          }}
                                        >
                                          {" "}
                                          Progress Of Silver Card
                                        </p>
                                        <p
                                          style={{
                                            color: "black",
                                            fontSize: "8px",
                                            fontWeight: "500",
                                            marginLeft: "-11px",
                                            marginRight: "-17px",
                                          }}
                                          className="m-b-2"
                                        >
                                          Progress Completed Task{" "}
                                          <i
                                            style={{ color: "green" }}
                                            class="fas fa-check-circle"
                                          ></i>
                                          <span className="text-success float-right">
                                            {WidthCardOne}%{" "}
                                          </span>
                                        </p>

                                        <div
                                          style={{
                                            width: "100%",
                                            marginLeft: "-11px",
                                            marginRight: "-17px",
                                          }}
                                          className="progress progress-xs mb-0"
                                        >
                                          <div
                                            className="progress-bar bg-success"
                                            role="progressbar"
                                            data-toggle="tooltip"
                                            title="40%"
                                            style={{
                                              width: `${WidthCardOne}%`,
                                            }}
                                          />
                                        </div>
                                        <p
                                          style={{
                                            color: "black",
                                            fontSize: "8px",
                                            fontWeight: "500",
                                            marginLeft: "-11px",
                                            marginRight: "-17px",
                                            marginTop: "5px",
                                          }}
                                          className="m-b-2"
                                        >
                                          Progress FiveStar Task{" "}
                                          <i
                                            style={{ color: "green" }}
                                            class="fas fa-star"
                                          ></i>
                                          <span className="text-success float-right">
                                            {" "}
                                            {starWidthCardOne}%{" "}
                                          </span>
                                        </p>
                                        <div
                                          style={{
                                            width: "100%",
                                            marginLeft: "-11px",
                                            marginRight: "-17px",
                                          }}
                                          className="progress progress-xs mb-0"
                                        >
                                          <div
                                            className="progress-bar bg-success"
                                            role="progressbar"
                                            data-toggle="tooltip"
                                            title="40%"
                                            style={{
                                              width: `${starWidthCardOne}%`,
                                            }}
                                          />
                                        </div>
                                      </div>
                                    </div>
                                  }
                                </div>
                                <div class="stepTab-card text-break">
                                  {" "}
                                  <div
                                    className="card border-secondary mb-3"
                                    style={{ maxWidth: "19rem" }}
                                  >
                                    <div className="card-header">
                                      <div>
                                        {starCardOneCondition ? (
                                          <i
                                            style={{ color: "brown" }}
                                            class="far fa-star"
                                          ></i>
                                        ) : (
                                          <i
                                            style={{ color: "brown" }}
                                            class="fas fa-star"
                                          ></i>
                                        )}

                                        <span> Gold </span>

                                        <i
                                          style={{ color: "green" }}
                                          class="fas fa-check-circle"
                                        ></i>
                                      </div>
                                    </div>
                                    <div className="card-body text-secondary">
                                      <p
                                        style={{
                                          fontSize: "11px",
                                          fontWeight: "900",
                                          marginLeft: "-11px",
                                          marginRight: "-18px",
                                        }}
                                        className="card-title"
                                      >
                                        To Achieve Gold Level You Complete
                                        Following Tasks:
                                      </p>
                                      <p
                                        className="card-text"
                                        style={{
                                          color: "black",
                                          fontSize: "9px",
                                          fontWeight: "500",
                                          marginLeft: "-10px",
                                          marginRight: "-18px",
                                        }}
                                      >
                                        <i
                                          style={{ color: "green" }}
                                          class="fas fa-check-circle"
                                        ></i>{" "}
                                        No Of Completed Tasks:15
                                      </p>

                                      <p
                                        className="card-text"
                                        style={{
                                          color: "black",
                                          fontSize: "9px",
                                          fontWeight: "500",
                                          marginLeft: "-10px",
                                          marginRight: "-18px",
                                        }}
                                      >
                                        <i
                                          style={{ color: "green" }}
                                          class="fas fa-star"
                                        ></i>{" "}
                                        No Of FiveStar Tasks:10
                                      </p>
                                      <hr></hr>
                                      <p
                                        className="card-text"
                                        style={{
                                          color: "black",
                                          fontSize: "10px",
                                          fontWeight: "600",
                                          marginLeft: "-11px",
                                          marginRight: "-17px",
                                        }}
                                      >
                                        <i
                                          style={{ color: "green" }}
                                          class="fas fa-gift"
                                        ></i>{" "}
                                        Following Rewards You get:
                                      </p>

                                      <p
                                        className="card-text"
                                        style={{
                                          color: "black",
                                          fontSize: "9px",
                                          fontWeight: "600",
                                          marginLeft: "-8px",
                                          marginRight: "-17px",
                                        }}
                                      >
                                        {" "}
                                        20% Bonus Salary this month
                                      </p>

                                      <hr></hr>
                                      <p
                                        className="card-text"
                                        style={{
                                          color: "black",
                                          fontSize: "11px",
                                          fontWeight: "600",
                                          marginLeft: "-11px",
                                          marginRight: "-17px",
                                        }}
                                      >
                                        {" "}
                                        Progress Of Gold Card
                                      </p>
                                      <p
                                        style={{
                                          color: "black",
                                          fontSize: "8px",
                                          fontWeight: "500",
                                          marginLeft: "-11px",
                                          marginRight: "-17px",
                                        }}
                                        className="m-b-2"
                                      >
                                        Progress Completed Task{" "}
                                        <i
                                          style={{ color: "green" }}
                                          class="fas fa-check-circle"
                                        ></i>
                                        <span className="text-success float-right">
                                          {" "}
                                          {WidthCardTwo}%
                                        </span>
                                      </p>

                                      <div
                                        style={{
                                          width: "100%",
                                          marginLeft: "-11px",
                                          marginRight: "-17px",
                                        }}
                                        className="progress progress-xs mb-0"
                                      >
                                        <div
                                          className="progress-bar bg-success"
                                          role="progressbar"
                                          data-toggle="tooltip"
                                          title="40%"
                                          style={{
                                            width: `${WidthCardTwo}%`,
                                          }}
                                        />
                                      </div>
                                      <p
                                        style={{
                                          color: "black",
                                          fontSize: "8px",
                                          fontWeight: "500",
                                          marginLeft: "-11px",
                                          marginRight: "-17px",
                                          marginTop: "5px",
                                        }}
                                        className="m-b-2"
                                      >
                                        Progress FiveStar Task{" "}
                                        <i
                                          style={{ color: "green" }}
                                          class="fas fa-star"
                                        ></i>
                                        <span className="text-success float-right">
                                          {" "}
                                          {starWidthCardTwo}%
                                        </span>
                                      </p>
                                      <div
                                        style={{
                                          width: "100%",
                                          marginLeft: "-11px",
                                          marginRight: "-17px",
                                        }}
                                        className="progress progress-xs mb-0"
                                      >
                                        <div
                                          className="progress-bar bg-success"
                                          role="progressbar"
                                          data-toggle="tooltip"
                                          title="40%"
                                          style={{
                                            width: `${starWidthCardTwo}%`,
                                          }}
                                        />
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div class="stepTab-card text-break">
                                  {" "}
                                  <div
                                    className="card border-secondary mb-3"
                                    style={{ maxWidth: "19rem" }}
                                  >
                                    <div className="card-header">
                                      <div>
                                        {starCardOneCondition ? (
                                          <i
                                            style={{ color: "brown" }}
                                            class="far fa-star"
                                          ></i>
                                        ) : (
                                          <i
                                            style={{ color: "brown" }}
                                            class="fas fa-star"
                                          ></i>
                                        )}

                                        <span style={{ fontSize: ".8375rem" }}>
                                          {" "}
                                          Platinum{" "}
                                        </span>

                                        <i
                                          style={{ color: "green" }}
                                          class="fas fa-check-circle"
                                        ></i>
                                      </div>
                                    </div>
                                    <div className="card-body text-secondary">
                                      <p
                                        style={{
                                          fontSize: "11px",
                                          fontWeight: "900",
                                          marginLeft: "-11px",
                                          marginRight: "-18px",
                                        }}
                                        className="card-title"
                                      >
                                        To Achieve Platinum Level You Complete
                                        Following Tasks:
                                      </p>
                                      <p
                                        className="card-text"
                                        style={{
                                          color: "black",
                                          fontSize: "9px",
                                          fontWeight: "500",
                                          marginLeft: "-10px",
                                          marginRight: "-18px",
                                        }}
                                      >
                                        <i
                                          style={{ color: "green" }}
                                          class="fas fa-check-circle"
                                        ></i>{" "}
                                        No Of Completed Tasks:20
                                      </p>

                                      <p
                                        className="card-text"
                                        style={{
                                          color: "black",
                                          fontSize: "9px",
                                          fontWeight: "500",
                                          marginLeft: "-10px",
                                          marginRight: "-18px",
                                        }}
                                      >
                                        <i
                                          style={{ color: "green" }}
                                          class="fas fa-star"
                                        ></i>{" "}
                                        No Of FiveStar Tasks:15
                                      </p>
                                      <hr></hr>
                                      <p
                                        className="card-text"
                                        style={{
                                          color: "black",
                                          fontSize: "10px",
                                          fontWeight: "600",
                                          marginLeft: "-11px",
                                          marginRight: "-17px",
                                        }}
                                      >
                                        <i
                                          style={{ color: "green" }}
                                          class="fas fa-gift"
                                        ></i>{" "}
                                        Following Rewards You get:
                                      </p>

                                      <p
                                        className="card-text"
                                        style={{
                                          color: "black",
                                          fontSize: "9px",
                                          fontWeight: "600",
                                          marginLeft: "-8px",
                                          marginRight: "-17px",
                                        }}
                                      >
                                        {" "}
                                        4 days Trip To Murree
                                      </p>

                                      <hr></hr>
                                      <p
                                        className="card-text"
                                        style={{
                                          color: "black",
                                          fontSize: "11px",
                                          fontWeight: "600",
                                          marginLeft: "-11px",
                                          marginRight: "-17px",
                                        }}
                                      >
                                        {" "}
                                        Progress Of Platinum Card
                                      </p>
                                      <p
                                        style={{
                                          color: "black",
                                          fontSize: "8px",
                                          fontWeight: "500",
                                          marginLeft: "-11px",
                                          marginRight: "-17px",
                                        }}
                                        className="m-b-2"
                                      >
                                        Progress Completed Task{" "}
                                        <i
                                          style={{ color: "green" }}
                                          class="fas fa-check-circle"
                                        ></i>
                                        <span className="text-success float-right">
                                          {" "}
                                          {WidthCardThree}%
                                        </span>
                                      </p>

                                      <div
                                        style={{
                                          width: "100%",
                                          marginLeft: "-11px",
                                          marginRight: "-17px",
                                        }}
                                        className="progress progress-xs mb-0"
                                      >
                                        <div
                                          className="progress-bar bg-success"
                                          role="progressbar"
                                          data-toggle="tooltip"
                                          title="40%"
                                          style={{
                                            width: `${WidthCardThree}%`,
                                          }}
                                        />
                                      </div>
                                      <p
                                        style={{
                                          color: "black",
                                          fontSize: "8px",
                                          fontWeight: "500",
                                          marginLeft: "-11px",
                                          marginRight: "-17px",
                                          marginTop: "5px",
                                        }}
                                        className="m-b-2"
                                      >
                                        Progress FiveStar Task{" "}
                                        <i
                                          style={{ color: "green" }}
                                          class="fas fa-star"
                                        ></i>
                                        <span className="text-success float-right">
                                          {" "}
                                          {starWidthCardThree}%
                                        </span>
                                      </p>
                                      <div
                                        style={{
                                          width: "100%",
                                          marginLeft: "-11px",
                                          marginRight: "-17px",
                                        }}
                                        className="progress progress-xs mb-0"
                                      >
                                        <div
                                          className="progress-bar bg-success"
                                          role="progressbar"
                                          data-toggle="tooltip"
                                          title="40%"
                                          style={{
                                            width: `${starWidthCardThree}%`,
                                          }}
                                        />
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-3">
                <div style={{ maxWidth: "19rem", height:'83%' }} className="card mb-0">
                  <div
                    className={`${cardClass} card border-secondary mb-3 `}
                    style={{ maxWidth: "19rem", height:'100%' }}
                  >
                    
                      <div className="card-header">
                        <div>
                          <span style={{ fontSize: ".8375rem" }}>
                            {" "}
                            {starCardThreeCondition &&
                            starCardTwoCondition &&
                            starCardOneCondition &&
                            cardOneCondition &&
                            cardTwoCondition &&
                            cardThreeCondition
                              ? "Platinum"
                              : starCardTwoCondition &&
                                starCardOneCondition &&
                                cardOneCondition &&
                                cardTwoCondition
                              ? "Gold"
                              : starCardOneCondition && cardOneCondition
                              ? "Silver"
                              : "No Level"}{" "}
                          </span>
                          {starCardThreeCondition &&
                          starCardTwoCondition &&
                          starCardOneCondition &&
                          cardOneCondition &&
                          cardTwoCondition &&
                          cardThreeCondition ? (
                            <i
                              style={{ color: "#6087aa" }}
                              class="fas fa-medal"
                            ></i>
                          ) : starCardTwoCondition &&
                            starCardOneCondition &&
                            cardOneCondition &&
                            cardTwoCondition ? (
                            <i
                              style={{ color: "#f1b92a" }}
                              class="fas fa-medal"
                            ></i>
                          ) : starCardOneCondition && cardOneCondition ? (
                            <i
                              style={{ color: "#404040" }}
                              class="fas fa-medal"
                            ></i>
                          ) : (
                            <i
                              style={{ color: "black" }}
                              className={`fas fa-user-clock `}
                            ></i>
                          )}
                        </div>
                      </div>
                      <div className="card-body text-secondary">
                        <p
                          className="card-text"
                          style={{
                            color: "black",
                            fontSize: "9px",
                            fontWeight: "500",
                            marginLeft: "-10px",
                            marginRight: "-18px",
                          }}
                        >
                          <i
                            style={{ color: "green" }}
                            class="fas fa-check-circle"
                          ></i>{" "}
                          Your Completed Tasks:{completedCount}
                        </p>

                        <p
                          className="card-text"
                          style={{
                            color: "black",
                            fontSize: "9px",
                            fontWeight: "500",
                            marginLeft: "-10px",
                            marginRight: "-18px",
                          }}
                        >
                          <i style={{ color: "green" }} class="fas fa-star"></i>{" "}
                          Your Five Star Tasks: {fiveStarCount}
                        </p>
                        <hr></hr>
                        <p
                          className="card-text"
                          style={{
                            color: "black",
                            fontSize: "10px",
                            fontWeight: "600",
                            marginLeft: "-11px",
                            marginRight: "-17px",
                          }}
                        >
                          <i style={{ color: "green" }} class="fas fa-gift"></i>{" "}
                          Following Rewards You win:
                        </p>

                        {starCardThreeCondition &&
                        starCardTwoCondition &&
                        starCardOneCondition &&
                        cardOneCondition &&
                        cardTwoCondition &&
                        cardThreeCondition ? (
                          <p
                            className="card-text"
                            style={{
                              color: "black",
                              fontSize: "9px",
                              fontWeight: "600",
                              marginLeft: "-8px",
                              marginRight: "-17px",
                            }}
                          >
                            {" "}
                            Two Paid Leaves <hr /> 20% Bonus Salary this month{" "}
                            <hr />4 days Trip To Murree
                          </p>
                        ) : starCardTwoCondition &&
                          starCardOneCondition &&
                          cardOneCondition &&
                          cardTwoCondition ? (
                          <p
                            className="card-text"
                            style={{
                              color: "black",
                              fontSize: "9px",
                              fontWeight: "600",
                              marginLeft: "-8px",
                              marginRight: "-17px",
                            }}
                          >
                            {" "}
                            Two Paid Leaves <hr /> 20% Bonus Salary this month
                          </p>
                        ) : starCardOneCondition && cardOneCondition ? (
                          <p
                            className="card-text"
                            style={{
                              color: "black",
                              fontSize: "9px",
                              fontWeight: "600",
                              marginLeft: "-8px",
                              marginRight: "-17px",
                            }}
                          >
                            {" "}
                            Two Paid Leaves
                          </p>
                        ) : (
                          <p
                            className="card-text"
                            style={{
                              color: "black",
                              fontSize: "9px",
                              fontWeight: "600",
                              marginLeft: "-8px",
                              marginRight: "-17px",
                            }}
                          >
                            {" "}
                            Sorry You Win Nothing
                          </p>
                        )}

                        <hr></hr>
                        <p
                          className="card-text"
                          style={{
                            color: "black",
                            fontSize: "11px",
                            fontWeight: "600",
                            marginLeft: "-11px",
                            marginRight: "-17px",
                          }}
                        >
                          {" "}
                          Progress To Achieve Platinum Level
                          {/* 
                            starCardThreeCondition &&
                          starCardTwoCondition &&
                          starCardOneCondition &&
                          cardOneCondition &&
                          cardTwoCondition &&
                          cardThreeCondition ? (
                            <p
                              className="card-text"
                              style={{
                                color: "black",
                                fontSize: "9px",
                                fontWeight: "600",
                                marginLeft: "-8px",
                                marginRight: "-17px",
                              }}
                            >
                              {" "}
                              Congrats You achieved The Platinum Level
                            </p>
                          ) : starCardTwoCondition &&
                            starCardOneCondition &&
                            cardOneCondition &&
                            cardTwoCondition ? (
                            <p
                              className="card-text"
                              style={{
                                color: "black",
                                fontSize: "9px",
                                fontWeight: "600",
                                marginLeft: "-8px",
                                marginRight: "-17px",
                              }}
                            >
                              {" "}
                              Progress Of Platinum Card
                            </p>
                          ) : starCardOneCondition && cardOneCondition ? (
                            <p
                              className="card-text"
                              style={{
                                color: "black",
                                fontSize: "9px",
                                fontWeight: "600",
                                marginLeft: "-8px",
                                marginRight: "-17px",
                              }}
                            >
                              {" "}
                              Progress Of Gold Card
                            </p>
                          ) : (
                            <p
                              className="card-text"
                              style={{
                                color: "black",
                                fontSize: "9px",
                                fontWeight: "600",
                                marginLeft: "-8px",
                                marginRight: "-17px",
                              }}
                            >
                              {" "}
                              Progress Of Silver Card
                            </p>
                            ) */}
                        </p>
                        <p
                          style={{
                            color: "black",
                            fontSize: "14px",
                            fontWeight: "500",
                            marginLeft: "-11px",
                            marginRight: "-17px",
                          }}
                          className="m-b-2"
                        >
                          Progress Completed Task{" "}
                          <i
                            style={{ color: "green" }}
                            class="fas fa-check-circle"
                          ></i>
                          <span style={{fontSize:'12px'}} className="text-success float-right">
                            {" "}
                            {WidthCardThree}%
                          </span>
                        </p>

                        <div
                          style={{
                            width: "100%",
                            marginLeft: "-11px",
                            marginRight: "-17px",
                          }}
                          className="progress progress-xs mb-0"
                        >
                          <div
                            className="progress-bar bg-success"
                            role="progressbar"
                            data-toggle="tooltip"
                            title="40%"
                            style={{
                              width: `${WidthCardThree}%`,
                            }}
                          />
                        </div>
                        <p
                          style={{
                            color: "black",
                            fontSize: "14px",
                            fontWeight: "500",
                            marginLeft: "-11px",
                            marginRight: "-17px",
                            marginTop: "5px",
                          }}
                          className="m-b-2"
                        >
                          Progress FiveStar Task{" "}
                          <i style={{ color: "green" }} class="fas fa-star"></i>
                          <span style={{fontSize:'12px'}}  className="text-success float-right">
                            {" "}
                            {starWidthCardThree}%
                          </span>
                        </p>
                        <div
                          style={{
                            width: "100%",
                            marginLeft: "-11px",
                            marginRight: "-17px",
                          }}
                          className="progress progress-xs mb-0"
                        >
                          <div
                            className="progress-bar bg-success"
                            role="progressbar"
                            data-toggle="tooltip"
                            title="40%"
                            style={{
                              width: `${starWidthCardThree}%`,
                            }}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ) : null}

            <div className="card mb-0">
              <div className="card-body">
                <div className="row">
                  <div className="col-md-12">
                    <div className="profile-view">
                      <div className="profile-img-wrap">
                        <div className="profile-img">
                          <a href="#">
                            {imageCondition ? (
                              <img alt="" src={profilePic} />
                            ) : (
                              <p
                                style={{
                                  color: "black",
                                  fontWeight: "400",
                                  fontSize: "12px",
                                  display: "block",
                                  border: "2px solid green",
                                }}
                              >
                                If You want to upload Your Profile Picture
                                Kindly Go to edit Profile and Upload it
                              </p>
                            )}
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
                                  <a href="">{userProfileData.phone}</a>
                                </div>
                              </li>
                              <li>
                                <div className="title">Email:</div>
                                <div className="text">
                                  <a href="">{userProfileData.email}</a>
                                </div>
                              </li>

                              <li>
                                <div className="title">Address:</div>
                                <div className="text">
                                  {userProfileData.address}
                                </div>
                              </li>
                              <li>
                                <div className="title">Gender:</div>
                                <div className="text">
                                  {userProfileData.gender}
                                </div>
                              </li>
                            </ul>
                          </div>
                        </div>
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
                          Personal Information{" "}
                          <a
                            href="#"
                            className="edit-icon"
                            data-toggle="modal"
                            data-target="#profile_info"
                          >
                            <i className="fa fa-pencil" />
                          </a>
                        </h3>
                        <ul className="personal-info">
                          <li>
                            <div className="title">Name:</div>
                            <div className="text">{`${userProfileData.first_name} ${userProfileData.last_name}`}</div>
                          </li>
                          <li>
                            <div className="title">Email Address:</div>
                            <div className="text">{userProfileData.email}</div>
                          </li>
                          <li>
                            <div className="title">Country:</div>
                            <div className="text">
                              {userProfileData.country}
                            </div>
                          </li>
                          <li>
                            <div className="title">Phone Number:</div>
                            <div className="text">
                              <a href="">{userProfileData.phone}</a>
                            </div>
                          </li>
                          <li>
                            <div className="title">CNIC</div>
                            <div className="text">{userProfileData.cnic}</div>
                          </li>
                          <li>
                            <div className="title">Gender:</div>
                            <div className="text">{userProfileData.gender}</div>
                          </li>
                          <li>
                            <div className="title">Postal Code:</div>
                            <div className="text">
                              {userProfileData.postal_code}
                            </div>
                          </li>
                          <li>
                            <div className="title">Account Type:</div>
                            <div className="text">{userProfileData.type}</div>
                          </li>
                          <li>
                            <div className="title">Address:</div>
                            <div className="text">
                              {userProfileData.address}
                            </div>
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
                  <h5 className="modal-title">Edit Profile Information</h5>
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
                            src={profilePic}
                            alt="user"
                          />
                          <div className="fileupload btn">
                            <input
                              className="btn-text"
                              id="contained-button-file"
                              type="file"
                              onChange={handleUploadClick}
                            />
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
                                onChange={(e) => setFirst_name(e.target.value)}
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
                                onChange={(e) => setLast_name(e.target.value)}
                              />
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="form-group">
                              <label>
                                Birth Date{" "}
                                <span className="text-danger">*no change</span>
                              </label>
                              <div className="cal-icon">
                                <input
                                  className="form-control datetimepicker"
                                  type="text"
                                  value={dob}
                                  // onChange={(e) => setDob(e.target.value)}
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
                            onChange={(e) => setAddress(e.target.value)}
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
                            onChange={(e) => setPostalCode(e.target.value)}
                          />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group">
                          <label>CNIC</label>
                          <input
                            type="text"
                            className="form-control"
                            value={cnic}
                            onChange={(e) => setCnic(e.target.value)}
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
                            Designation{" "}
                            <span className="text-danger">*no change</span>
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            value={post}
                            // onChange={(e) => setPost(e.target.value)}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="submit-section">
                      <div
                        className="form-group text-center"
                        style={{
                          display: "flex",
                          justifyContent: "space-around",
                        }}
                      >
                        <a
                          className="btn btn-primary account-btn"
                          style={{ flexDirection: "space-between" }}
                          type="button"
                          data-dismiss="modal"
                          aria-label="Close"
                        >
                          Cancel
                        </a>

                        <a
                          className="btn btn-primary account-btn"
                          onClick={() => ProfileEditHandle()}
                        >
                          Update
                        </a>
                      </div>
                      {/*<a
                             className="btn btn-primary account-btn"
                             onClick={ManagerProfileCreateApi}
                           >
                           Submit
                                   </a>*/}
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
          {/* /Profile Modal */}
          {/* Personal Info Modal */}
        </div>
      ) : (
        <div className="page-wrapper">
          <Helmet>
            <title>Employee Profile </title>
            <meta name="description" content="Reactify Blank Page" />
          </Helmet>
          <div className="content container-fluid">
            <div className="page-header">
              <div className="row">
                <div className="col-sm-12">
                  <h3 className="page-title">Employee Profile</h3>
                  <ul className="breadcrumb">
                    <li className="breadcrumb-item">
                      <a href="/app/main/dashboard">Dashboard</a>
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
                            Create Profile
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
                    <form onSubmit={formik.handleSubmit}>
                      <div className="row">
                        <div className="col-md-12">
                          <div className="row">
                            <div className="col-md-6">
                              <div className="form-group">
                                <label>First Name</label>
                                <input
                                  type="text"
                                  id="fname"
                                  name="fname"
                                  type="text"
                                  className="form-control"
                                  // onChange={formik.handleChange}
                                  // onBlur={formik.handleBlur}
                                  value={nameCeo}
                                  required
                                />
                              </div>
                            </div>
                            <div className="col-md-6">
                              <div className="form-group">
                                <label>Last Name</label>
                                <input
                                  type="text"
                                  id="lname"
                                  name="lname"
                                  type="text"
                                  className="form-control"
                                  onChange={formik.handleChange}
                                  onBlur={formik.handleBlur}
                                  value={formik.values.lname}
                                  required
                                />
                                {formik.touched.lname && formik.errors.lname ? (
                                  <div
                                    style={{ color: "red", marginTop: "4px" }}
                                  >
                                    {formik.errors.lname}
                                  </div>
                                ) : null}
                              </div>
                            </div>
                            <div className="col-md-6">
                              <div className="form-group">
                                <label>Birth Date</label>
                                <Input
                                  className="form-control"
                                  type="date"
                                  name="birthDate"
                                  id="select-basic"
                                  onChange={formik.handleChange}
                                  onBlur={formik.handleBlur}
                                  value={formik.values.birthDate}
                                ></Input>
                                {formik.touched.birthDate &&
                                formik.errors.birthDate ? (
                                  <div
                                    style={{ color: "red", marginTop: "4px" }}
                                  >
                                    {formik.errors.fname}
                                  </div>
                                ) : null}
                              </div>
                            </div>
                            <div className="col-md-6">
                              <div className="form-group">
                                <label>Gender</label>
                                <select
                                  className="form-control"
                                  type="select"
                                  id="gender"
                                  name="gender"
                                  onChange={formik.handleChange}
                                  onBlur={formik.handleBlur}
                                  value={formik.values.gender}
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
                              id="address"
                              name="address"
                              onChange={formik.handleChange}
                              onBlur={formik.handleBlur}
                              value={formik.values.address}
                            />
                            {formik.touched.address && formik.errors.address ? (
                              <div style={{ color: "red", marginTop: "4px" }}>
                                {formik.errors.address}
                              </div>
                            ) : null}
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-group">
                            <label>Country</label>
                            <input
                              type="text"
                              className="form-control"
                              id="country"
                              name="country"
                              onChange={formik.handleChange}
                              onBlur={formik.handleBlur}
                              value={formik.values.country}
                            />
                            {formik.touched.country && formik.errors.country ? (
                              <div style={{ color: "red", marginTop: "4px" }}>
                                {formik.errors.country}
                              </div>
                            ) : null}
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-group">
                            <label>Postal Code</label>
                            <input
                              type="number"
                              className="form-control"
                              id="postal"
                              name="postal"
                              onChange={formik.handleChange}
                              onBlur={formik.handleBlur}
                              value={formik.values.postal}
                            />
                            {formik.touched.postal && formik.errors.postal ? (
                              <div style={{ color: "red", marginTop: "4px" }}>
                                {formik.errors.postal}
                              </div>
                            ) : null}
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-group">
                            <label>Cnic</label>
                            <input
                              type="text"
                              className="form-control"
                              id="cnic"
                              name="cnic"
                              onChange={formik.handleChange}
                              onBlur={formik.handleBlur}
                              value={formik.values.cnic}
                            />
                            {formik.touched.cnic && formik.errors.cnic ? (
                              <div
                                style={{
                                  color: "red",
                                  fontSize: "12px",
                                  marginTop: "4px",
                                }}
                              >
                                {formik.errors.cnic}
                              </div>
                            ) : null}
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-group">
                            <label>Phone Number</label>
                            <input
                              type="number"
                              className="form-control"
                              id="phone"
                              name="phone"
                              onChange={formik.handleChange}
                              onBlur={formik.handleBlur}
                              value={formik.values.phone}
                            />
                            {formik.touched.phone && formik.errors.phone ? (
                              <div style={{ color: "red", marginTop: "4px" }}>
                                {formik.errors.phone}
                              </div>
                            ) : null}
                          </div>
                        </div>
                      </div>
                      <div className="submit-section">
                        <div className="text-center">
                          <button
                            disabled={conditions}
                            className="btn btn-primary account-btn"
                            onClick={() => ManagerProfileCreateApi()}
                          >
                            Submit
                          </button>
                        </div>
                        {/*<a
                             className="btn btn-primary account-btn"
                             onClick={ManagerProfileCreateApi}
                           >
                           Submit
                                   </a>*/}
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

export default EmployeeProfile;
