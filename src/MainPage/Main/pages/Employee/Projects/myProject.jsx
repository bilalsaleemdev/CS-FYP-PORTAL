import React, { Component, useState, useEffect } from "react";
import { Helmet } from "react-helmet";

import axios from "axios";

import "react-summernote/dist/react-summernote.css"; // import styles
import {
  createProjectAPI,
  updateProjectAPI,
  getEmployeeUserAPI,
  getUserProjectAPI,
  getProjectEmployee
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

const myProject = () => {
  const cancelTokenSource = axios.CancelToken.source();
  const [projectData, setProjectData] = useState([]);
  const [employeelUser, setEmployeeUser] = useState([]);
  const [userProjectList, setUserProjectList] = useState([]);
  const EmployeeId = localStorage.getItem('user_id');

  const [listOfIds, setListOfIds] = useState([]);
  const [listOfNames, setListOfNames] = useState([]);

  const [name, setName] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [description, setDescription] = useState("");
  const history = useHistory();

  const [editName, setEditName] = useState("");

  const [editStartDate, setEditStartDate] = useState("");
  const [editEndDate, setEditEndDate] = useState("");
  const [editDescription, setEditDescription] = useState("");
  const [editListOfIds, setEditListOfIds] = useState([]);
  const [editListOfNames, setEditListOfNames] = useState([]);
  const [editProject, setEditProject] = useState("");


  useEffect(() => {
    getUserProject();
  }, []);

  useEffect(() => {
    console.log(projectData ,'awais testing')
  }, [projectData]);


  const getUserProject = async () => {
    console.log("12121212");
   
    const response = await getProjectEmployee(EmployeeId ,cancelTokenSource.token);
    console.log(response,'sdsds')

    if (response.success == true) {
      console.log("12121212");
  
      setProjectData(response.data);
      // console.log(taskData, "awais data for all task");
    }
    // console.log(taskData, "awais data for all task");
  };

  const setEditModal = async (item) => {
    const project = item.project;
    setEditName(project.name);
    setEditEndDate(moment(project.end_at).format("YYYY-MM-DD"));
    setEditStartDate(moment(project.start_at).format("YYYY-MM-DD"));
    setEditDescription(project.description);
    setEditProject(project);
    setEditListOfIds();
  };

  const updateProject = async () => {
    const data = {
      name: editName,
      user_id: localStorage.getItem("user_id"),
      team_member: editListOfIds,
      start_at: editStartDate,
      end_at: editEndDate,
      description: editDescription,
    };
    const response = await updateProjectAPI(
      editProject.id,
      data,
      cancelTokenSource.token
    );
    if (response.success == true) {
      getUserProject();
    }
  };

  return (
    <div className="page-wrapper">
      <Helmet>
        <title>Projects </title>
        <meta name="description" content="Login page" />
      </Helmet>
      {/* Page Content */}
      <div className="content container-fluid">
        {/* Page Header */}
        <div className="page-header">
          <div className="row align-items-center">
            <div className="col">
              <h3 className="page-title">Projectss</h3>
              <ul className="breadcrumb">
                <li className="breadcrumb-item">
                  <a href="/app/main/dashboard">Dashboard</a>
                </li>
                <li className="breadcrumb-item active">Projects</li>
              </ul>
            </div>
           
          </div>
        </div>
        {/* /Page Header */}

        <div className="row">
          <div className="col-md-12">
            <div className="table-responsive">
              <table className="table table-striped custom-table ">
                <thead>
                  <tr>
                    <th>Project</th>
                    <th>Deadline</th>
                    <th>Leader</th>
                    <th>Open Task</th>
                    <th>Completed Task</th>

                    <th className="text-right">Action</th>
                  </tr>
                </thead>

                <tbody>
                  {projectData.map((item, index) => {
                    return (
                      <tr key={item.id}>
                        <td>
                          <a href="/app/projects/projects-view">
                            {item.name}
                          </a>
                        </td>
                        <td>
                          {moment(item.end_at).format("DD MM YYYY")}
                        </td>
                        <td>{item.projectManager}</td>

                        <td>
                          {item.user_id}
                        </td>
                        <td>
                          {item.user_id}
                        </td>

                        <td className="text-right">
                          <div className="dropdown dropdown-action">
                            <a
                              href="#"
                              className="action-icon dropdown-toggle"
                              data-toggle="dropdown"
                              aria-expanded="false"
                            >
                              <i className="material-icons">more_vert</i>
                            </a>

                            <div className="dropdown-menu dropdown-menu-right">
                              <a
                                className="dropdown-item"
                                href="#"
                                data-toggle="modal"
                                onClick={() => setEditModal(item)}
                                data-target="#edit_project"
                              >
                                <i className="fa fa-pencil m-r-5" /> Edit
                              </a>
                              <a
                                className="dropdown-item"
                                href="#"
                                data-toggle="modal"
                                data-target="#delete_project"
                              >
                                <i className="fa fa-trash-o m-r-5" /> Delete
                              </a>
                            </div>
                          </div>
                        </td>
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

export default myProject;
