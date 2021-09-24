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
 import Button from "@material-ui/core/Button";
 import Dialog from "@material-ui/core/Dialog";
 import DialogActions from "@material-ui/core/DialogActions";
 import DialogContent from "@material-ui/core/DialogContent";
 import DialogContentText from "@material-ui/core/DialogContentText";
 import DialogTitle from "@material-ui/core/DialogTitle";
 
 const CeoProfile = () => {
   const [open, setOpen] = React.useState(false);
   const [userProfileData, setUserProfileData] = useState("");
   const [openCreataeProfile, setOpenCreateProfile] = useState(false);
 
   const [user_id, Usetser_id] = useState(5);
   const [email, setEmail] = useState("");
   const [first_name, setFirst_name] = useState("");
   const [last_name, setLast_name] = useState("");
   const [dob, setDob] = useState("2019-01-01");
   const [gender, setGender] = useState("");
   const [address, setAddress] = useState("");
   const [phoneNumber, setPhoneNumber] = useState();
   const [country, setCountry] = useState("");
   const [post, setPost] = useState("ceo");
   const [postalCode, setPostalCode] = useState("");
   const [submitResponse, setSubmitResponse] = useState(false);
 
   const user_id_local = localStorage.getItem("user_id");
 
   const cancelTokenSource = axios.CancelToken.source();
   useEffect(() => {
     // ManagerProfileCreateApi();
     getUserProfile(user_id_local);
   }, []);
 
   const handleCloseSubmitResponse = () => {
     setOpen(false);
     window.location.reload();
   };
   const ManagerProfileCreateApi = async () => {
     setOpen(true);
     const response = await ManagerProfileCreate(
       user_id_local,
       first_name,
       last_name,
       dob,
       phoneNumber,
 
       gender,
       address,
       country,
       postalCode,
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
       // setPhoneNumber(data.phone);
       // setEmail(data.email);
       // setAddress(data.address);
       // setGender(data.gender);
       setUserProfileData(data);
       // const awais = response.PromiseResult;
       console.log("  data miral ", data);
     } else {
       setOpenCreateProfile(false);
       console.log("Failed Response", response);
     }
   };
 
   return (
     <React.Fragment>
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
            Hey!
            Your Profile created successfully..!
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseSubmitResponse} color="primary">
            Disagree
          </Button>
          <Button
            onClick={handleCloseSubmitResponse}
            color="primary"
            autoFocus
          >
            Agree
          </Button>
        </DialogActions>
      </Dialog>
    )}
       {openCreataeProfile ? (
         <div className="page-wrapper">
           <Helmet>
             <title>CEO Profile </title>
             <meta name="description" content="Reactify Blank Page" />
           </Helmet>
           {/* Page Content */}
           <div className="content container-fluid">
             {/* Page Header */}
             <div className="page-header">
               <div className="row">
                 <div className="col-sm-12">
                   <h3 className="page-title">CEO Profile</h3>
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
                             <div className="text">{`${userProfileData.first_name} ${userProfileData.last_name }`}</div>
                           </li>
                           <li>
                             <div className="title">Email:</div>
                             <div className="text">{userProfileData.email}</div>
                           </li>
                           <li>
                             <div className="title">Country:</div>
                             <div className="text">{userProfileData.country}</div>
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
                             <div className="text">{userProfileData.postal_code}</div>
                           </li>
                           <li>
                             <div className="title">Employee Type</div>
                             <div className="text">{userProfileData.type}</div>
                           </li>
                           <li>
                           <div className="title">Address:</div>
                           <div className="text">{userProfileData.address}</div>
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
                                   onChange={(e) => setLast_name(e.target.value)}
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
                         <div className="form-group text-center" style={{display:'flex', justifyContent:'space-around'}}>
                           <a
                             className="btn btn-primary account-btn"
                             style={{flexDirection:'space-between'}}
                             // onClick={() => ManagerProfileCreateApi()}
                           >
                             Cancel
                           </a>
                        
                         <a
                           className="btn btn-primary account-btn"
                           // onClick={() => ManagerProfileCreateApi()}
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
             <title>CEO Profile </title>
             <meta name="description" content="Reactify Blank Page" />
           </Helmet>
           <div className="content container-fluid">
             <div className="page-header">
               <div className="row">
                 <div className="col-sm-12">
                   <h3 className="page-title">CEO Profile</h3>
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
                                   onChange={(e) => setLast_name(e.target.value)}
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
                         <div className="form-group text-center">
                           <a
                             className="btn btn-primary account-btn"
                             onClick={() => ManagerProfileCreateApi()}
                           >
                             Submit
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
           </div>
         </div>
       )}
     </React.Fragment>
   );
 };
 
 export default CeoProfile;
 