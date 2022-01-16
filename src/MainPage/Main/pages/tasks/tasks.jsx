import axios from "axios";

import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import {
  updateTaskAPI,
  createTaskAPI,
  getTaskApi,
  getProjectEmployeeAPI,
  getUserProjectForTaskAPI,
  getAllTaskManager,
} from "../../../../api/network/customer/EmployeeApi";
import { Input, Button } from "reactstrap";
import "react-summernote/dist/react-summernote.css"; // import styles
import Dialog from "@material-ui/core/Dialog";
// import Button from "@material-ui/core/Button";

import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";

import "../../../index.css";
import moment from "moment";

const Projects = () => {
  const cancelTokenSource = axios.CancelToken.source();
  const [userProjectList, setUserProjectList] = useState([]);
  const [selectedProject, setSelectedProject] = useState("");
  const [selectedEmployee, setSelectedEmployee] = useState("");
  const [deadline, setDeadline] = useState("");
  const [taskType, setTaskType] = useState("");
  const [priority, setPriority] = useState("");

  const [descriptionTask, setDescription] = useState("");
  const [projectEmployeeList, setProjectEmployeeList] = useState([]);
  const [taskList, setTaskList] = useState([]);

  const [editSelectedProject, setEditSelectedProject] = useState("");
  const [editSelectedEmployee, setEditSelectedEmployee] = useState("");
  const [editDeadline, setEditDeadline] = useState("");
  const [editTaskType, setEditTaskType] = useState("");
  const [editPriority, setEditPriority] = useState("");
  const [editTask, setEditTask] = useState("");
  const [editdescription, setEditdescription] = useState("");
  const[oneTime, setOneTime] = useState(false);
  const [open, setOpen] = useState(false);
  const [editopen, setEditOpen] = useState(false);

  useEffect(() => {
    getUserProject();
    getTask();
  }, []);

  const getUserProject = async () => {
    const response = await getUserProjectForTaskAPI(
      localStorage.getItem("user_id"),
      cancelTokenSource.token
    );
    if (response.success == true) {
      setUserProjectList(response.data);
    }
  };
  const getTask = async () => {
    const response = await getAllTaskManager(
      localStorage.getItem("user_id"),
      cancelTokenSource.token
    );
    if (response.data) {
      setTaskList(response.data);
      console.log('aaaaaaaaasdsd dd',response.data)
      
      
    }
    else{
      setOneTime(true);
    }
  };

  const getProjectEmployee = async (id) => {
    const response = await getProjectEmployeeAPI(id, cancelTokenSource.token);
    if (response.success == true) {
      setProjectEmployeeList(response.data);
    }
  };

  const createTask = async () => {
    const data = {
      project_id: selectedProject,
      employee_id: selectedEmployee,
      deadline: deadline,
      task_type: taskType,
      priority: priority,
      task_status: 0,
      description:descriptionTask,
      rating:0
    };
    console.log('121212', data)
    const response = await createTaskAPI(data, cancelTokenSource.token);
    if (response.success == true) {
      getTask();
      setOneTime(false);
      setOpen(true);
    }
  };

  const updateTask = async () => {
    const data = {
      project_id: editSelectedProject,
      employee_id: editSelectedEmployee,
      deadline: editDeadline,
      task_type: editTaskType,
      priority: editPriority,
      task_status: 0,
      description:editdescription

    };
    const response = await updateTaskAPI(
      editTask.id,
      data,
      cancelTokenSource.token
    );
    if (response.success == true) {
      console.log('121212121')
      getTask();
      setEditOpen(true);
    }
  };

  const setEditModal = async (item) => {
    setEditTask(item);
    getProjectEmployee(item.project_id);
    console.log('sdasdasd', item)

    setEditSelectedProject(item.project_id);
    setEditSelectedEmployee(item.employee_id);
    setEditDeadline(moment(item.deadline).format("YYYY-MM-DD"));
    setEditTaskType(item.task_type);
    setEditdescription(item.description)
    setEditPriority(item.priority);
  };
  
  const handleCloseSubmitResponse = () => {
    setOpen(false);
    setEditOpen(false);
  };

  return (
    <div className="page-wrapper">
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
            Task Assign Successfully..!
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          
          <Button
            style={{ marginRight: "130" }}
            onClick={handleCloseSubmitResponse}
            color="primary"
            autoFocus
          >
            Ok
          </Button>
        </DialogActions>
      </Dialog>
    )}
    {editopen && (
      <Dialog
        open={editopen}
        onClose={handleCloseSubmitResponse}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Confirmation message"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Task Edited Successfully..!
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          
          <Button
            style={{ marginRight: "130" }}
            onClick={handleCloseSubmitResponse}
            color="primary"
            autoFocus
          >
            Ok
          </Button>
        </DialogActions>
      </Dialog>
    )}
      <Helmet>
        <title>Projects - Gamified Employee Portal</title>
        <meta name="description" content="Login page" />
      </Helmet>
      <div className="content container-fluid">
        <div className="page-header">
          <div className="row align-items-center">
            <div className="col">
              <h3 className="page-title">Tasks</h3>
              <ul className="breadcrumb">
                <li className="breadcrumb-item">
                  <a href="/app/main/dashboard">Dashboard</a>
                </li>
                <li className="breadcrumb-item active">Tasks</li>
              </ul>
            </div>
          </div>
        </div>
        <div style={{marginBottom:'40px', height:'40%'}} className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Assign Task</h5>
          </div>
          <div className="modal-body">
          <form>
          <div className="row">
            <div className="col-sm-6">
              <div className="form-group">
                <label>Project </label>
                <Input
                  type="select"
                  value={selectedProject}
                  name="select"
                  onChange={(e) => {
                    setSelectedProject(e.target.value);
                    if (e.target.value) {
                      getProjectEmployee(e.target.value);
                    }
                  }}
                  id="exampleSelect"
                >
                  <option value=""> Select Project</option>
                  {userProjectList.map((item, index) => {
                    return (
                      <option key={item.id} value={item.id}>
                        {" "}
                        {item.name}
                      </option>
                    );
                  })}
                </Input>
              </div>
            </div>
            <div className="col-sm-6">
              <div className="form-group">
                <label>Employee</label>
                <Input
                  type="select"
                  name="select"
                  value={selectedEmployee}
                  disabled={!selectedProject}
                  onChange={(e) => {
                    setSelectedEmployee(e.target.value);
                  }}
                  id="exampleSelect"
                >
                  <option value=""> Select Employee</option>
                  {projectEmployeeList.map((item, index) => {
                    return (
                      <option key={item.id} value={item.id}>
                        {" "}
                        {item.name}
                      </option>
                    );
                  })}
                </Input>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-6">
              <div className="form-group">
                <label>Task Description</label>
                <div>
                  <Input
                    className="form-control"
                    type="text"
                    name="taskType"
                    id="text-basic"
                    value={descriptionTask}
                    onChange={(e) => setDescription(e.target.value)}
                  ></Input>
                </div>
              </div>
            </div>
            
            <div className="col-sm-6">
              <div className="form-group">
                <label>Task Type</label>
                <div>
                  <Input
                    className="form-control"
                    type="text"
                    name="taskType"
                    id="text-basic"
                    value={taskType}
                    onChange={(e) => setTaskType(e.target.value)}
                  ></Input>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-6">
              <div className="form-group">
                <label>Priority</label>
                <Input
                  type="select"
                  name="select"
                  value={priority}
                  onChange={(e) => {
                    setPriority(e.target.value);
                  }}
                  id="exampleSelect"
                >
                  <option value=""> Select Priority</option>
                  <option value="HIGH">HIGH</option>
                  <option value="MEDIUM">MEDIUM</option>
                  <option value="LOW">LOW</option>
                </Input>
              </div>
            </div>
            <div className="col-sm-6">
              <div className="form-group">
                <label>Deadline</label>
                <div>
                  <Input
                    className="form-control"
                    type="date"
                    name="select"
                    id="select-basic"
                    value={deadline}
                    onChange={(e) => setDeadline(e.target.value)}
                  ></Input>{" "}
                </div>
              </div>
            </div>
          </div>

          <div className="submit-section">
            <Button
              onClick={() => createTask()}
              disabled={
                !priority ||
                !taskType ||
                !deadline ||
                !selectedEmployee ||
                !selectedProject ||
                !descriptionTask
              }
              className="btn-primary"
            >
              Assign
            </Button>
          </div>
        </form>
            
          </div>
        </div>

        <div className="row">
          <div className="col-md-12">
            <div className="table-responsive">
              <table className="table table-striped custom-table ">
                <thead>
                  <tr>
                    <th>Project</th>
                    <th> Employee </th>
                    <th>Priority</th>
                    <th>Assign Date</th>
                    <th>Deadline</th>

                    <th>Type</th>
                    <th>Status</th>
                    <th className="text-right">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {console.log("task::", taskList)}
                  {taskList.map((item, index) => {
                    if (item.task_status == 0) {
                      return (
                        <tr key={item.id}>
                          <td>{item.projectName}</td>
                          <td> {item.UserName} </td>
                          <td>{item.priority}</td>

                          <td>
                            {moment(item.created_at).format("DD MM YYYY")}
                          </td>
                          <td>{moment(item.deadline).format("DD MM YYYY")}</td>
                          <td>{item.task_type}</td>
                          <td>
                            {" "}
                            {item.task_status ? "Completed" : "Pending"}{" "}
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
                                <span onClick={() => setEditModal(item)}>
                                  <a
                                    className="dropdown-item"
                                    href="#"
                                    data-toggle="modal"
                                    data-target="#edit_project"
                                  >
                                    <i className="fa fa-pencil m-r-5" /> Edit
                                  </a>
                                </span>
                               
                              </div>
                            </div>
                          </td>
                        </tr>
                      );
                    } 
                  })}
                
                </tbody>
                {console.log('aaaaaaaaasdsd', oneTime)}
              </table>
              {
                oneTime && <div>No Data Available</div>  
              }
            </div>
          </div>
        </div>
      </div>
      {/* /Page Content */}
      {/* Create Project Modal */}

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

                      <Input
                        type="select"
                        value={editSelectedProject}
                        name="select"
                        onChange={(e) => {
                          setEditSelectedProject(e.target.value);
                          if (e.target.value) {
                            getProjectEmployee(e.target.value);
                          }
                        }}
                        id="exampleSelect"
                      >
                        <option value=""> Select Project</option>
                        {userProjectList.map((item, index) => {
                          return (
                            <option key={item.id} value={item.id}>
                              {" "}
                              {item.name}
                            </option>
                          );
                        })}
                      </Input>
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="form-group">
                      <label>Employee</label>

                      <Input
                        type="select"
                        name="select"
                        value={editSelectedEmployee}
                        disabled={!editSelectedProject}
                        onChange={(e) => {
                          setEditSelectedEmployee(e.target.value);
                        }}
                        id="exampleSelect"
                      >
                        <option value=""> Select Employee</option>
                        {projectEmployeeList.map((item, index) => {
                          return (
                            <option key={item.id} value={item.id}>
                              {" "}
                              {item.name}
                            </option>
                          );
                        })}
                      </Input>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-sm-6">
                    <div className="form-group">
                      <label>Deadline</label>
                      <div>
                        <Input
                          className="form-control"
                          type="date"
                          name="select"
                          id="select-basic"
                          value={editDeadline}
                          onChange={(e) => setEditDeadline(e.target.value)}
                        ></Input>{" "}
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="form-group">
                      <label>Task Description</label>
                      <div>
                        <Input
                          className="form-control"
                          type="text"
                          name="taskType"
                          id="text-basic"
                          value={editdescription}
                          onChange={(e) => setEditdescription(e.target.value)}
                        ></Input>{" "}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-sm-6">
                    <div className="form-group">
                      <label>Priority</label>
                      <Input
                        type="select"
                        name="select"
                        value={editPriority}
                        onChange={(e) => {
                          setEditPriority(e.target.value);
                        }}
                        id="exampleSelect"
                      >
                        <option value=""> Select Priority</option>
                        <option value="HIGH">HIGH</option>
                        <option value="MEDIUM">MEDIUM</option>
                        <option value="LOW">LOW</option>
                      </Input>{" "}
                    </div>
                  </div>
                  <div className="col-sm-6">
                  <div className="form-group">
                    <label>Task Type</label>
                    <div>
                      <Input
                        className="form-control"
                        type="text"
                        name="taskType"
                        id="text-basic"
                        value={editTaskType}
                        onChange={(e) => setEditTaskType(e.target.value)}
                      ></Input>{" "}
                    </div>
                  </div>
                </div>
                </div>

                <div className="submit-section">
                  <Button
                    onClick={() => updateTask()}
                    disabled={
                      !editPriority ||
                      !editTaskType ||
                      !editDeadline ||
                      !editSelectedEmployee ||
                      !editSelectedProject
                    }
                    className="btn-primary"
                  >
                    Update
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
                    <a onClick="" className="btn btn-primary continue-btn">
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
