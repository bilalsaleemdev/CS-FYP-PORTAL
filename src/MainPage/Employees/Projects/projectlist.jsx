import React, { Component, useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import {
  Avatar_16,
  Avatar_02,
  Avatar_05,
  Avatar_09,
  Avatar_10,
  Avatar_11,
  Avatar_12,
  Avatar_13,
  Avatar_01,
} from "../../../Entryfile/imagepath";
import axios from "axios";

import "react-summernote/dist/react-summernote.css"; // import styles
import {
  createProjectAPI,
  updateProjectAPI,
  getEmployeeUserAPI,
  getUserProjectAPI,
} from "../../../api/network/customer/EmployeeApi";
import OutlinedInput from "@mui/material/OutlinedInput";
import MenuItem from "@mui/material/MenuItem";
import ListItemText from "@mui/material/ListItemText";
import Select from "@mui/material/Select";
import Checkbox from "@mui/material/Checkbox";
import "../../index.css";
import { Input, Button } from "reactstrap";
import moment from "moment";
import { useHistory } from "react-router-dom";

const Projects = () => {
  const cancelTokenSource = axios.CancelToken.source();
  const [employeelUser, setEmployeeUser] = useState([]);
  const [userProjectList, setUserProjectList] = useState([]);

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

  const createProject = async () => {
    const data = {
      name: name,
      user_id: localStorage.getItem("user_id"),
      team_member: listOfIds,
      start_at: startDate,
      end_at: endDate,
      description: description,
    };
    const response = await createProjectAPI(data, cancelTokenSource.token);
    if (response.success == true) {
    }
  };

  useEffect(() => {
    getEmployeeUser();
    getUserProject();
  }, []);

  const getUserProject = async () => {
    const response = await getUserProjectAPI(
      localStorage.getItem("user_id"),
      cancelTokenSource.token
    );
    if (response.success == true) {
      setUserProjectList(response.data);
    }
  };
  const getEmployeeUser = async () => {
    const response = await getEmployeeUserAPI(cancelTokenSource.token);
    if (response.success == true) {
      setEmployeeUser(response.data);
    }
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
            <div className="col-auto float-right ml-auto">
              <a
                href="#"
                className="btn add-btn"
                data-toggle="modal"
                data-target="#create_project"
              >
                <i className="fa fa-plus" /> Create Project
              </a>
              <div className="view-icons">
                <a href="/app/main/Projects" className="grid-view btn btn-link">
                  <i className="fa fa-th" />
                </a>
                <a
                  href="/app/projects/projects-list"
                  className="list-view btn btn-link active"
                >
                  <i className="fa fa-bars" />
                </a>
              </div>
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
                  {userProjectList.map((item, index) => {
                    return (
                      <tr key={item.project.id}>
                        <td>
                          <a href="/app/projects/projects-view">
                            {item.project.name}
                          </a>
                        </td>
                        <td>
                          {moment(item.project.end_at).format("DD MM YYYY")}
                        </td>
                        <td>{item.project.projectManager}</td>

                        <td>
                          {item.task.filter((x) => x.task_status === 0).length}{" "}
                        </td>
                        <td>
                          {item.task.filter((x) => x.task_status === 1).length}
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
      {/* Create Project Modal */}

      <div
        id="create_project"
        className="modal custom-modal fade"
        role="dialog"
      >
        <div
          className="modal-dialog modal-dialog-centered modal-lg"
          role="document"
        >
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Create Project</h5>
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
                  <div className="col-sm-6">
                    <div className="form-group">
                      <label>Project Name</label>
                      <input
                        className="form-control "
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        type="text"
                      />
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="form-group">
                      <label>Start Date</label>
                      <div>
                        <Input
                          className="form-control"
                          type="date"
                          name="select"
                          id="select-basic"
                          value={startDate}
                          onChange={(e) => setStartDate(e.target.value)}
                        ></Input>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-sm-6">
                    <div className="form-group">
                      <label>End Date</label>
                      <div>
                        <Input
                          type="date"
                          name="select"
                          id="select-basic"
                          value={endDate}
                          onChange={(e) => setEndDate(e.target.value)}
                        ></Input>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="form-group">
                      <label>Employee</label>

                      <Select
                        labelId="demo-multiple-checkbox-label"
                        id="demo-multiple-checkbox"
                        multiple
                        value={listOfNames}
                        onChange={(e) => {
                          const employee = e.target.value;
                          if (employee) {
                            let name = [];
                            let id = [];
                            employee.map((item, index) => {
                              name.push(item.name);
                              id.push(item.id);
                            });
                            setListOfIds(id);
                            setListOfNames(name);
                          }
                        }}
                        input={<OutlinedInput label="Tag" />}
                        renderValue={(selected) => selected.join(", ")}
                      >
                        {employeelUser.map((name) => (
                          <MenuItem key={name.id} value={name}>
                            <Checkbox
                              checked={listOfIds.indexOf(name.id) > -1}
                            />
                            <ListItemText primary={name.name} />
                          </MenuItem>
                        ))}
                      </Select>
                    </div>
                  </div>
                </div>

                <div className="form-group">
                  <label>Description</label>
                  <textarea
                    rows="3"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    className="form-control"
                    type="text"
                  />
                </div>

                <div className="submit-section">
                  <Button
                    onClick={() => createProject()}
                    disabled={
                      !name ||
                      !startDate ||
                      !endDate ||
                      !description ||
                      !listOfIds
                    }
                    className="btn-primary "
                  >
                    Submit
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      {/* /Create Project Modal */}
      {/* Edit Project Modal */}
      <div id="edit_project" className="modal custom-modal fade" role="dialog">
        <div
          className="modal-dialog modal-dialog-centered modal-lg"
          role="document"
        >
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Edit Project</h5>
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
                  <div className="col-sm-6">
                    <div className="form-group">
                      <label>Project Name</label>
                      <input
                        className="form-control "
                        value={editName}
                        onChange={(e) => setEditName(e.target.value)}
                        type="text"
                      />
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="form-group">
                      <label>Start Date</label>
                      <Input
                        className="form-control"
                        type="date"
                        name="select"
                        id="select-basic"
                        value={editStartDate}
                        onChange={(e) => setEditStartDate(e.target.value)}
                      ></Input>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-sm-6">
                    <div className="form-group">
                      <label>End Date</label>
                      <div>
                        <Input
                          type="date"
                          name="select"
                          id="select-basic"
                          value={editEndDate}
                          onChange={(e) => setEditEndDate(e.target.value)}
                        ></Input>{" "}
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="form-group">
                      <label>Employee</label>
                      <div>
                        <Select
                          labelId="demo-multiple-checkbox-label"
                          id="demo-multiple-checkbox"
                          multiple
                          value={editListOfNames}
                          onChange={(e) => {
                            const employee = e.target.value;
                            if (employee) {
                              let name = [];
                              let id = [];
                              employee.map((item, index) => {
                                name.push(item.name);
                                id.push(item.id);
                              });
                              setEditListOfIds(id);
                              setEditListOfNames(name);
                            }
                          }}
                          input={<OutlinedInput label="Tag" />}
                          renderValue={(selected) => selected.join(", ")}
                        >
                          {employeelUser.map((name) => (
                            <MenuItem key={name.id} value={name}>
                              <Checkbox
                                checked={editListOfIds?.indexOf(name.id) > -1}
                              />
                              <ListItemText primary={name.name} />
                            </MenuItem>
                          ))}
                        </Select>{" "}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-sm-6">
                    <div className="form-group">
                      <label>Description</label>
                      <textarea
                        rows="3"
                        value={editDescription}
                        onChange={(e) => setEditDescription(e.target.value)}
                        className="form-control"
                        type="text"
                      />
                    </div>
                  </div>
                </div>

                <div className="submit-section">
                  <Button
                    onClick={() => updateProject()}
                    disabled={
                      !editName ||
                      !editStartDate ||
                      !editEndDate ||
                      !editDescription ||
                      !editListOfIds
                    }
                    className="btn-primary "
                  >
                    Submit
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      {/* /Edit Project Modal */}
      {/* Delete Project Modal */}
      <div
        className="modal custom-modal fade"
        id="delete_project"
        role="dialog"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-body">
              <div className="form-header">
                <h3>Delete Project</h3>
                <p>Are you sure want to delete?</p>
              </div>
              <div className="modal-btn delete-action">
                <div className="row">
                  <div className="col-6">
                    <a href="" className="btn btn-primary continue-btn">
                      Delete
                    </a>
                  </div>
                  <div className="col-6">
                    <a
                      href=""
                      data-dismiss="modal"
                      className="btn btn-primary cancel-btn"
                    >
                      Cancel
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* /Delete Project Modal */}
    </div>
  );
};

export default Projects;
