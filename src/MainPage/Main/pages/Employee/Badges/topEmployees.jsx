import React, { Component, useState, useEffect } from "react";
import { Helmet } from "react-helmet";

import axios from "axios";

import "react-summernote/dist/react-summernote.css"; // import styles
import {
  getUserById,
  getAllTopEmployees
} from "../../../../../api/network/customer/EmployeeApi";
import OutlinedInput from "@mui/material/OutlinedInput";
import MenuItem from "@mui/material/MenuItem";
import ListItemText from "@mui/material/ListItemText";
import Select from "@mui/material/Select";
import Checkbox from "@mui/material/Checkbox";
import "../../../../../MainPage/index.css";
import { Input, Button } from "reactstrap";
import moment from "moment";
import { useHistory } from "react-router-dom";
import { CSVLink } from 'react-csv';
import { badge1,badge2,badge3,badge4,badge5 } from "../../../../../Entryfile/imagepath.jsx"


const badges = () => {
  const cancelTokenSource = axios.CancelToken.source();
  const [csvArray, setCsvArray] = useState([]);
  const [projectData, setProjectData] = useState([]);
  const [userData, setUserData] = useState({})
  const EmployeeId = localStorage.getItem('user_id');
  const [nameMembers, setNameMembers] = useState([]);


  const [editName, setEditName] = useState("");

  const [editStartDate, setEditStartDate] = useState("");
  const [editEndDate, setEditEndDate] = useState("");
  const [editDescription, setEditDescription] = useState("");
  const [editListOfIds, setEditListOfIds] = useState([]);
  const [editListOfNames, setEditListOfNames] = useState([]);
  const [editProject, setEditProject] = useState("");


  useEffect(() => {
    getUserProject();
    getUserIdFromApi();

  }, []);

  useEffect(() => {
    console.log(projectData ,'awais testing');
    console.log(userData ,'awais user')
    console.log(nameMembers ,'nameMembers user')
  }, [projectData, userData, nameMembers]);


  const getUserProject = async () => {
    let localDataForCsv = [];
    console.log("12121212");
   
    const response = await getAllTopEmployees( cancelTokenSource.token);
    console.log(response,'sdsds')

    if (response.success == true) {
      console.log("12121212");
  
      setProjectData(response.data);
    }
    // console.log(taskData, "awais data for all task");
  };

  const getUserIdFromApi = async () => {
    console.log("12121212");
   
    const response = await  getUserById(EmployeeId ,cancelTokenSource.token);
    console.log(response,'my project user')

    if (response.success == true) {
      console.log("awais",response.data);
  
      setUserData(response.user);
      // console.log(taskData, "awais data for all task");
    }
    // console.log(taskData, "awais data for all task");
  };


  function getImage(val){
    if(val >= 0 && val <=1)
    return badge1
    if(val >= 1 && val <=2)
    return badge2
    if(val >= 2 && val <=3)
    return badge3
    if(val >= 3 && val <=4)
    return badge4
    if(val >= 4 && val <=5)
    return badge5
  }

  return (
    <div className="page-wrapper">
      <Helmet>
        <title>MyProjects </title>
        <meta name="description" content="Login page" />
      </Helmet>
      {/* Page Content */}
      <div className="content container-fluid">
        {/* Page Header */}
        <div className="page-header">
          <div className="row align-items-center">
            <div className="col">
              <h3 className="page-title">Projects</h3>
              <ul className="breadcrumb">
                <li className="breadcrumb-item">
                  <a href="/app/main/dashboard/employee">Dashboard</a>
                </li>
                <li className="breadcrumb-item active">Projects</li>
              </ul>
            </div>
          </div>
        </div>
        {/* /Page Header */}
        <div
          className="row"
          style={{
            paddingBottom: "20px",
            marginBottom: "20px",
            textAlign: "center",
            fontFamily: "cursive",
            fontSize: "20px",
          }}
        >
          <div className="col-md-12" style={{}}>
            Hey! {userData.name} here is Top 5 Employees of the month
          </div>
        </div>

        <div className="row">
          <div className="col-md-12">
            <div className="table-responsive">
              <table className="table table-striped custom-table ">
                <thead>
                  <tr>
                    <th>Employee Name</th>
                    <th>Employee Email</th>
                    <th>Badge</th>
                  </tr>
                </thead>

                <tbody>
                  {projectData?projectData.map((item, index) => {
                    return (
                      <tr key={item.id}>
                        <td>{item.employ_name}</td>
                        <td>{item.employ_email}</td>
                        <td>
                        <div className="account-logo">
              <a href="/login">
                <img src={getImage(item.badge)} alt="Dreamguy's Technologies" />
              </a>
            </div>
                          </td>
                      </tr>
                    );
                  }):null}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      {/* /Page Content */}
    </div>
  );
};

export default badges;
