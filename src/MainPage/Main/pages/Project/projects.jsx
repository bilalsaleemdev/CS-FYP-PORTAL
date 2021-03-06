import React, { Component, useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import axios from "axios";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";

import Select from "@mui/material/Select";

import ReactSummernote from "react-summernote";
import "react-summernote/dist/react-summernote.css";

import "../../../index.css";
import {
  Avatar_16,
  Avatar_05,
  Avatar_09,
  Avatar_10,
} from "../../../../Entryfile/imagepath";
import {
  createProjectAPI,
  getEmployeeUserAPI,
  updateProjectAPI,
  getUserProjectAPI,
  deleteProjectById
} from "../../../../api/network/customer/EmployeeApi";

import MenuItem from "@mui/material/MenuItem";
import ListItemText from "@mui/material/ListItemText";
import Checkbox from "@mui/material/Checkbox";
import { Input, Button } from "reactstrap";
import moment from "moment";
import { useHistory } from "react-router-dom";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const Projects = (props) => {
  const [selectedWorkShopId, setSelectedWorkShopId] = useState();
  const cancelTokenSource = axios.CancelToken.source();
  const [employeelUser, setEmployeeUser] = useState([]);
  const [userProjectList, setUserProjectList] = useState([]);
  const [personName, setPersonName] = React.useState([]);

  const [listOfIds, setListOfIds] = useState([]);
  const [listOfNames, setListOfNames] = useState([]);
  const [names, setNames] = useState([]);

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
      team_member: getEmployeeIds(personName),
      start_at: startDate,
      end_at: endDate,
      description: description,
    };
    const response = await createProjectAPI(data, cancelTokenSource.token);
    if (response.success == true) {
      $("#create_project").modal("hide");
      window.location.reload();
    }
  };

  useEffect(() => {
    getEmployeeUser();
    getUserProject();
  }, []);

  useEffect(() => {
   
  }, [userProjectList])
  const getUserProject = async () => {
    const response = await getUserProjectAPI(
      localStorage.getItem("user_id"),
      cancelTokenSource.token
    );
    if (response.success == true) {
      console.log('ahtasham', response.data)
      setUserProjectList(response.data);
    }
  };
  const getEmployeeUser = async () => {
    const response = await getEmployeeUserAPI(cancelTokenSource.token);
    if (response.success == true) {
      setEmployeeUser(response.data);
      getEnployeeName(response.data)
    }
  };

  const deleteSerVal = (id) => {
    console.log('ahtasham',id)
    setSelectedWorkShopId(id);
  };
  const deleteProjectApi = async () => {
    const response = await deleteProjectById(
      selectedWorkShopId,
      cancelTokenSource.token
    );
    if (response.success == true) {
      console.log("Data::", response.data.id);
      // getUserWorkshopes();
    }
  };

  function getEmployeeIds(employeesName){
    
    let ids = employeelUser.map((item)=>{
      if(employeesName.indexOf(item.name) !== -1){
        return item.employee_id
      }
    })
    var filtered = ids.filter(function (el) {
      return el != null;
    });
  
    return filtered.toString()
  }

  function getEnployeeName(employees){
    
    let arryName = employees.map((item)=>{
      return item.name
    })
    setNames(arryName)
  }

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
  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setPersonName(
      // On autofill we get a the stringified value.
      typeof value === "string" ? value.split(",") : value
    );
  };

  const isSelected = (name)=>{

    console.log(
      
      "test1",name);
    return (name == "testing")  ;
  }

  return (
    <div className="page-wrapper">
      <Helmet>
        <title>1Projects - Gamified Employee Portal</title>
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
                <a
                  href="/app/main/Projects"
                  className="grid-view btn btn-link active"
                >
                  <i className="fa fa-th" />
                </a>
                <a
                  href="/app/main/projectlist"
                  className="list-view btn btn-link"
                >
                  <i className="fa fa-bars" />
                </a>
              </div>
            </div>
          </div>
        </div>
        {/* /Page Header */}
        {/* Search Filter */}
        <div className="row">
        
          {userProjectList.map((item, index) => {
            return (
              <div
                key={item.project.id}
                className="col-lg-4 col-sm-6 col-md-4 col-xl-3"
              >
                <div className="card">
                  <div className="card-body">
                    <div className="dropdown dropdown-action profile-action">
                      <a
                        href="#"
                        className="action-icon dropdown-toggle"
                        data-toggle="dropdown"
                        aria-expanded="false"
                      >
                        <i className="material-icons">more_vert</i>
                      </a>
                      <div className="dropdown-menu dropdown-menu-right">
                      
                        {/*   <a
                          className="dropdown-item"
                          onClick={() => setEditModal(item)}
                          href="#"
                          data-toggle="modal"
                          data-target="#edit_project"
                        >
                          <i className="fa fa-pencil m-r-5" /> Edit
                        </a>*/}
                        <a
                          className="dropdown-item"
                          onClick={() => deleteSerVal(item.project.id)}
                          href="#"
                          data-toggle="modal"
                          data-target="#delete_project"
                        >
                          <i className="fa fa-trash-o m-r-5" /> Delete
                        </a>
                      </div>
                    </div>
                    <h4 className="project-title">
                      <a
                        onClick={() =>
                          history.push({
                            pathname: "/app/projects/projects-view",
                            state: item,
                        
                          })
                        }
                      >
                      {console.log('awaisitem',item)}
                        {item.project.name}
                      </a>
                    </h4>

                    <small className="block text-ellipsis m-b-15">
                      <span className="text-xs">
                        {" "}
                        {
                          item.task.filter((x) => x.task_status === 0).length
                        }{" "}
                      </span>{" "}
                      <span className="text-muted">open tasks, </span>
                      <span className="text-xs">
                        {" "}
                        {
                          item.task.filter((x) => x.task_status === 1).length
                        }{" "}
                      </span>{" "}
                      <span className="text-muted">tasks completed</span>
                    </small>
                    <p className="text-muted"> {item.project.description}</p>
                    <div className="pro-deadline m-b-15">
                      <div className="sub-title">Deadline:</div>
                      <div className="text-muted">
                        {moment(item.project.end_at).format("DD MM YYYY")}
                      </div>
                    </div>
                    <div className="project-members m-b-15">
                      <div>Project Leader : {item.project.projectManager}</div>
                    </div>

                    <p className="m-b-5">
                      Progress{" "}
                      <span className="text-success float-right">
                        {" "}
                        {(item.task.filter((x) => x.task_status === 1).length /
                          item.task.filter((x) => x.task_status === 0).length ||
                          0) * 100}
                        %
                      </span>
                    </p>
                    <div className="progress progress-xs mb-0">
                      <div
                        className="progress-bar bg-success"
                        role="progressbar"
                        data-toggle="tooltip"
                        title="40%"
                        style={{
                          width: `${
                            (item.task.filter((x) => x.task_status === 1)
                              .length /
                              item.task.filter((x) => x.task_status === 0)
                                .length || 0) * 100 || 0
                          }%`,
                        }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
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
                <span aria-hidden="true">??</span>
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
                    <FormControl sx={{ m: 1, width: 300  }}>
                    
                      <InputLabel id="demo-multiple-checkbox-label">
                        Employees
                      </InputLabel>
                      <Select
                        labelId="demo-multiple-checkbox-label"
                        id="demo-multiple-checkbox"
                        multiple
                        value={personName}
                        onChange={handleChange}
                        input={<OutlinedInput label="Tag" />}
                        renderValue={(selected) => selected.join(", ")}
                        MenuProps={MenuProps}
                      >
                        {names.map((name) => (
                          <MenuItem key={name} value={name}>
                            <Checkbox checked={personName.indexOf(name) > -1} />
                            <ListItemText primary={name} />
                          </MenuItem>
                        ))}
                      </Select>
                    </FormControl>
                    
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
                    Create Project
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

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
                <span aria-hidden="true">??</span>
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
                  <FormControl sx={{ m: 1, width: 300  }}>
                  {
                    console.log('personname',personName)
                  }
                    <InputLabel id="demo-multiple-checkbox-label">
                      Employees
                    </InputLabel>
                    <Select
                      labelId="demo-multiple-checkbox-label"
                      id="demo-multiple-checkbox"
                      multiple
                      value={editListOfNames}
                      selected={editListOfNames}
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
                      MenuProps={MenuProps}
                    >
                      {names.map((name) => (
                        <MenuItem key={name} value={name}>
                          <Checkbox checked={isSelected(name)}   />
                          <ListItemText primary={name} />
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                  
                </div>
                  <div className="col-sm-6">
                    <div className="form-group">
                      <label>Employee</label>
                      {console.log('ssasasa', editListOfNames)}
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
                    <a href="" className="btn btn-primary continue-btn" onClick={() => deleteProjectApi()}>
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
