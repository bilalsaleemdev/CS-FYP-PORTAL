import React, { Component, useState, useEffect } from "react";
import { Helmet } from "react-helmet";

import axios from "axios";

import "react-summernote/dist/react-summernote.css"; // import styles
import {
  createProjectAPI,
  updateProjectAPI,
  getUserById,
  getEmployeeUserAPI,
  getUserProjectAPI,
  getProjectEmployee,
  getAllProject
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

const allProject = () => {
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
   
    const response = await getAllProject( cancelTokenSource.token);
    console.log(response,'sdsds')

    if (response.success == true) {
      console.log("12121212");
  
      setProjectData(response.data);
      // setCsvArray(response.data);
      response.data.map((i) => {
        setNameMembers( i.project_member.map((a => a.name)));
      })

      response.data.map((item) => {

        localDataForCsv.push({
          'Project Name': item.name,
          ' Project Leader': item.project_leader,
          'Start Date': moment(item.start_at).format("DD MM YYYY"),
          'Deadline':moment(item.end_at).format("DD MM YYYY"),
          'Total Task': item.total_task,
          'Project Members Numbers': item.project_member_count,
          'Project Members': item.project_member.map((i => i.name))
        })

      })

      setCsvArray(localDataForCsv);

      // console.log(taskData, "awais data for all task");
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



  return (
    <div className="page-wrapper">
      <Helmet>
        <title>Company Projects</title>
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
                <li className="breadcrumb-item active">Company Projects</li>
              </ul>
            </div>
            <div className="col-auto float-right ml-auto">
              <CSVLink data={csvArray}>
                <Button variant="contained" color="secondary">
                  Download CSV File
                </Button>
              </CSVLink>
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
            Hey! {userData.name} Here is All the Projects in Your Company
          </div>
        </div>

        <div className="row">
          <div className="col-md-12">
            <div className="table-responsive">
              <table className="table table-striped custom-table ">
                <thead>
                  <tr>
                    <th>Project Name</th>
                    <th>Project Leader</th>
                    <th>Start Date</th>
                    <th>Deadline</th>
                    <th>Total Task</th>
                    <th>Project Members</th>
                    <th> Project Member Count</th>
                  </tr>
                </thead>

                <tbody>
                  {projectData.map((item, index) => {
                    return (
                      <tr key={item.id}>
                        <td>{item.name}</td>
                        <td>{item.project_leader}</td>
                        <td>{moment(item.start_at).format("DD MM YYYY")}</td>
                        <td>{moment(item.end_at).format("DD MM YYYY")}</td>

                        <td>{item.total_task}</td>
                        <td>{item.project_member.map((i => i.name)).join(' ,')}</td>
                        <td>{item.project_member_count}</td>
                      </tr>
                    );
                  })}
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

export default allProject;
