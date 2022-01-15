import React, { Component, useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import {
  Avatar_16,
  Avatar_02,
  Avatar_05,
  Avatar_09,
  Avatar_10,
  Avatar_11,
  Avatar_01,
  PlaceHolder,
} from "../../../Entryfile/imagepath";
import { useHistory } from "react-router-dom";
import Dialog from "@material-ui/core/Dialog";
import Button from "@material-ui/core/Button";

import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import moment from "moment";
import axios from "axios";
import {
  getEmployeeUserAPI,
  getUserById,
  updateProjectAPI,
} from "../../../api/network/customer/EmployeeApi";

const Projects = (props) => {
  const cancelTokenSource = axios.CancelToken.source();
  const [employeelUser, setEmployeeUser] = useState([]);
  const [userProjectList, setUserProjectList] = useState([]);
  const [remainsEmployee, setRemainsEmployee] = useState([]);
  const [editEmployee, setEditEmployee] = useState([]);
  const [projectData, setProjectData] = useState({});
  const [editStart_at, setEditStart_at] = useState("");
  const [editDescription, setEditDescription] = useState("");
  const [editEnd_at, setEditEnd_at] = useState("");
  const [editName, setEditName] = useState("");
  const [editNotifications, setEditNotifications] = useState("");
  const [editProjectId, setEditProjectId] = useState("");
  const [editUserProjectId, setEditUserProjectId] = useState("");
  const [forData, setForData] = useState(false);
  const [stringEmployee, setStringEmployee] = useState("");
  const [open, setOpen] = useState(false);
  const [managerImage, setManagerImage] = useState("");
  const user_id_local = localStorage.getItem("user_id");

  useEffect(() => {
    console.log("awais bhai checking start created", editStart_at);
    console.log("awais bhai checking startdes", editDescription);
    if ((editDescription, editStart_at)) {
      setForData(true);
    }
  }, [editStart_at, editDescription]);

  const history = useHistory();
  const [project, setProject] = useState([]);

  // const []
  useEffect(() => {
    console.log("CONSRCUTOR::");
    getData();
  }, []);

  // const []
  useEffect(() => {
    console.log("awais bhai employee::", editEmployee);
  }, [editEmployee]);
  useEffect(() => {
    getEmployeeUser();
  }, []);
  useEffect(() => {
    if (userProjectList) {
      setEditEmployee(
        userProjectList.map((el) => {
          return el.id;
        })
      );
    }
  }, [userProjectList]);
  useEffect(() => {
    console.log("awais bhai", userProjectList);
  }, [userProjectList]);

  useEffect(() => {
    // getData();
    console.log("awais bhai 2", projectData);
    setUserProjectList(projectData.employee);
    // setProjectData(project.project);
  }, [projectData]);
  useEffect(() => {
    const result = employeelUser.filter((ad) =>
      userProjectList.every((fd) => fd.id !== ad.employee_id)
    );
    setRemainsEmployee(result);

    console.log("aaaaaaaaa res ", result);
  }, [projectData, userProjectList, employeelUser]);

  useEffect(() => {
    console.log("aaaaaaa project remainsEmployee", remainsEmployee);
  }, [remainsEmployee]);

  useEffect(() => {
    if (editEmployee.length) {
      let comma_seprated = editEmployee.join(",");
      console.log("awais bhai uddddd", comma_seprated);
      setStringEmployee(comma_seprated);
    }
  }, [editEmployee,stringEmployee]);
  const handleIdsChange = (id) => {
    console.log('awais bhai udd',id)
    setEditEmployee([...editEmployee, id]);
    console.log("awais bhai checking again", editName);

    setOpen(true);
    // updateProject();
  };
 

  const getUserIdFromApi = async (user_id_local) => {
    console.log("12121212");

    const response = await getUserById(user_id_local, cancelTokenSource.token);
    console.log("my project user", response);
 
    setManagerImage(response.user.image_url);

    if (response.success == true) {
      console.log("awais ch", response.user.type);

      // setImageCondition(response.user.image_url);
      // setNameCeo(response.user.type);
      // console.log(taskData, "awais data for all task");
    }
    // console.log(taskData, "awais data for all task");
  };
  useEffect(() => {
    getUserIdFromApi();
  }, [user_id_local])
  const getData = () => {
    console.log("awais bhai 0", props.history.location.state.project);
    setEditUserProjectId(props.history.location.state.project.user_id);
    setEditProjectId(props.history.location.state.project.id);
    setEditNotifications(props.history.location.state.project.notifications);
    setEditName(props.history.location.state.project.name);
    setEditEnd_at(props.history.location.state.project.end_at);
    setEditDescription(props.history.location.state.project.description);
    setEditStart_at(props.history.location.state.project.start_at);
    if (props?.history?.location?.state) {
      setProjectData(props.history.location.state);
      // setProjectData(props.history.location.state.proje/ct.project)
    } else {
      history.push("/app/main/Projects");
    }
  };

  const getEmployeeUser = async () => {
    console.log("aaaaaain");

    const response = await getEmployeeUserAPI(cancelTokenSource.token);

    if (response.success == true) {
      setEmployeeUser(response.data);

      console.log("aaaaaa employess all", response.data);
    }
  };

  const handleCloseSubmitResponse = () => {
    setOpen(false);
  };
  const updateProject = async () => {
    const data = {
      start_at: editStart_at,
      end_at: editEnd_at,
      description: editDescription,
      name: editName,
      notifications: editNotifications,
      user_id: editUserProjectId,
      team_member: stringEmployee,
    };
    const response = await updateProjectAPI(
      editProjectId,
      data,
      cancelTokenSource.token
    );
    if (response.success == true) {
      setOpen(false);
      history.push("/app/main/Projects");
      window.location.reload();
    }
  };
  return (
    <div className="page-wrapper">
      <Helmet>
        Projects
        <meta name="description" content="Login page" />
      </Helmet>
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
              Are, You really want to Add this Employee
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={() => updateProject()} color="secondary" autoFocus>
              Yes
            </Button>
            <Button
              style={{ marginRight: "130" }}
              onClick={handleCloseSubmitResponse}
              color="primary"
              autoFocus
            >
              No
            </Button>
          </DialogActions>
        </Dialog>
      )}
      {/* Page Content */}
      {forData && (
        <div className="content container-fluid">
          {/* Page Header */}
          <div className="page-header">
            <div className="row align-items-center">
              <div className="col">
                <h3 className="page-title">Project</h3>
                <ul className="breadcrumb">
                  <li className="breadcrumb-item">
                    <a href="/app/main/dashboard">Dashboard</a>
                  </li>
                  <li className="breadcrumb-item active">Project</li>
                </ul>
              </div>
            </div>
          </div>
          {/* /Page Header */}
          <div className="row">
            <div className="col-lg-8">
              <div className="card">
                <div className="card-body">
                  <div className="project-title">
                    <h5 className="card-title">{projectData?.project?.name}</h5>
                    <small className="block text-ellipsis m-b-15">
                      <span className="text-xs">
                        {
                          projectData?.task?.filter(
                            (x) => x.task_status === 0
                          )?.length
                        }{" "}
                      </span>{" "}
                      <span className="text-muted">open tasks, </span>
                      <span className="text-xs">
                        {" "}
                        {console.log('aaaaaaaaaaaaaaaaaaa',projectData.task)}
                        {
                          projectData?.task?.filter(
                            (x) => x.task_status === 1
                          )?.length
                        }
                      </span>
                      <span className="text-muted">tasks completed</span>
                    </small>
                  </div>
                  <p> {projectData?.project?.description} </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="card project-user">
                <div className="card-body">
                  <ul className="list-box">
                    <li>
                      <div className="list-item">
                        {console.log(
                          "awais bhai checking profile",
                          projectData
                        )}
                        {/* <div className="list-left">
                          <span className="avatar"><img alt="" src={Avatar_01} /></span>
                        </div> */}
                        <div className="list-body">
                          <span  style={{width:'100%'}} className="message-author">
                            {" "}
                            {projectData?.project?.projectManager}
                          </span>
                          <div className="clearfix" />
                          <span className="message-content">Team Leader</span>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            
          </div>
          <div className="row">
              <div className="col-lg-8">
                <div className="card project-user">
                  <div className="card-body">
                    <h6 className="card-title m-b-15">Project details</h6>
                    <table className="table table-striped table-border">
                      <tbody>
                        <tr>
                          <td>Created:</td>
                          <td className="text-right">
                            {" "}
                            {moment(projectData?.project?.created_at).format(
                              "DD MM YYYY"
                            )}
                          </td>
                        </tr>
                        <tr>
                          <td>Deadline:</td>
                          <td className="text-right">
                            {moment(projectData?.project?.end_at).format(
                              "DD MM YYYY"
                            )}
                          </td>
                        </tr>

                        <tr>
                          <td>Created by:</td>
                          <td className="text-right">
                            <a href="/app/profile/employee-profile">
                              {projectData?.project?.projectManager}
                            </a>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="card project-user">
                  <div className="card-body">
                    <h6 className="card-title m-b-20">
                      Assigned users
                      <button
                        type="button"
                        className="float-right btn btn-primary btn-sm"
                        data-toggle="modal"
                        data-target="#assign_user"
                      >
                        <i className="fa fa-plus" /> Add
                      </button>
                    </h6>
                    <ul className="list-box">
                      {console.log("awais bhai checking img", projectData)}
                      {projectData?.employee?.map((item, index) => {
                        return (
                          <li key={item.id}>
                            <a href="/app/profile/employee-profile">
                              <div className="list-item">
                                <div className="list-left">
                                  <span className="avatar">
                                    <img alt="" src={item.image_url} />
                                  </span>
                                </div>
                                <div className="list-body">
                                  <span className="message-author">
                                    {" "}
                                    {item.name}
                                  </span>
                                  <div className="clearfix" />
                                  <span className="message-content">
                                    {" "}
                                    {item.type}{" "}
                                  </span>
                                </div>
                              </div>
                            </a>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
        </div>
      )}
      {/* /Page Content */}
      {/* Assign Leader Modal */}
      <div id="assign_leader" className="modal custom-modal fade" role="dialog">
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Assign Leader to this project</h5>
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
              <div className="input-group m-b-30">
                <input
                  placeholder="Search to add a leader"
                  className="form-control search-input"
                  type="text"
                />
                <span className="input-group-append">
                  <button className="btn btn-primary">Search</button>
                </span>
              </div>
              <div>
                <ul className="chat-user-list">
                  <li>
                    <a href="#">
                      <div className="media">
                        <span className="avatar">
                          <img alt="" src={Avatar_09} />
                        </span>
                        <div className="media-body align-self-center text-nowrap">
                          <div className="user-name">Richard Miles</div>
                          <span className="designation">Web Developer</span>
                        </div>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <div className="media">
                        <span className="avatar">
                          <img alt="" src={Avatar_10} />
                        </span>
                        <div className="media-body align-self-center text-nowrap">
                          <div className="user-name">John Smith</div>
                          <span className="designation">Android Developer</span>
                        </div>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <div className="media">
                        <span className="avatar">
                          <img alt="" src={Avatar_16} />
                        </span>
                        <div className="media-body align-self-center text-nowrap">
                          <div className="user-name">Jeffery Lalor</div>
                          <span className="designation">Team Leader</span>
                        </div>
                      </div>
                    </a>
                  </li>
                </ul>
              </div>
              <div className="submit-section">
                <button className="btn btn-primary submit-btn">Submit</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* /Assign Leader Modal */}
      {/* Assign User Modal */}
      <div id="assign_user" className="modal custom-modal fade" role="dialog">
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Assign more user to this project</h5>
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
              <div>
                <ul className="chat-user-list">
                  {console.log("aaaaaaaaa in game", remainsEmployee)}

                  {remainsEmployee.map((employee) => (
                    <li>
                      <a href="#">
                        <div className="media">
                          <span className="avatar">
                            <img alt="" src={employee.image_url} />
                          </span>
                          {console.log('awais bhai udd',employee)}
                          <div className="media-body align-self-center text-nowrap">
                            <div className="user-name">{employee.name}</div>
                            <span className="designation">
                              {employee.designation}
                            </span>
                          </div>
                          <button
                            type="button"
                            className="float-right btn btn-primary btn-sm"
                            onClick={() => handleIdsChange(employee.employee_id)}
                          >
                            <i className="fa fa-plus" /> Add
                          </button>
                        </div>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

           
             
            </div>
          </div>
        </div>
      </div>
      {/* /Assign User Modal */}
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
                        className="form-control"
                        defaultValue="Project Management"
                        type="text"
                      />
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="form-group">
                      <label>Client</label>
                      <select className="select">
                        <option>Global Technologies</option>
                        <option>Delta Infotech</option>
                      </select>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-sm-6">
                    <div className="form-group">
                      <label>Start Date</label>
                      <div className="cal-icon">
                        <input
                          className="form-control datetimepicker"
                          type="text"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="form-group">
                      <label>End Date</label>
                      <div className="cal-icon">
                        <input
                          className="form-control datetimepicker"
                          type="text"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-sm-3">
                    <div className="form-group">
                      <label>Rate</label>
                      <input
                        placeholder="$50"
                        className="form-control"
                        defaultValue="$5000"
                        type="text"
                      />
                    </div>
                  </div>
                  <div className="col-sm-3">
                    <div className="form-group">
                      <label>&nbsp;</label>
                      <select className="select">
                        <option>Hourly</option>
                        <option>Fixed</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="form-group">
                      <label>Priority</label>
                      <select className="select">
                        <option>High</option>
                        <option>Medium</option>
                        <option>Low</option>
                      </select>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-sm-6">
                    <div className="form-group">
                      <label>Add Project Leader</label>
                      <input className="form-control" type="text" />
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="form-group">
                      <label>Team Leader</label>
                      <div className="project-members">
                        <a
                          className="avatar"
                          href="#"
                          data-toggle="tooltip"
                          title="Jeffery Lalor"
                        >
                          <img alt="" src={Avatar_16} />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-sm-6">
                    <div className="form-group">
                      <label>Add Team</label>
                      <input className="form-control" type="text" />
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="form-group">
                      <label>Team Members</label>
                      <div className="project-members">
                        <a
                          className="avatar"
                          href="#"
                          data-toggle="tooltip"
                          title="John Doe"
                        >
                          <img alt="" src={Avatar_02} />
                        </a>
                        <a
                          className="avatar"
                          href="#"
                          data-toggle="tooltip"
                          title="Richard Miles"
                        >
                          <img alt="" src={Avatar_09} />
                        </a>
                        <a
                          className="avatar"
                          href="#"
                          data-toggle="tooltip"
                          title="John Smith"
                        >
                          <img alt="" src={Avatar_10} />
                        </a>
                        <a
                          className="avatar"
                          href="#"
                          data-toggle="tooltip"
                          title="Mike Litorus"
                        >
                          <img alt="" src={Avatar_05} />
                        </a>
                        <span className="all-team">+2</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="form-group">
                  <label>Description</label>
                  <textarea
                    rows={4}
                    className="form-control"
                    placeholder="Enter your message here"
                    defaultValue={""}
                  />
                </div>
                <div className="form-group">
                  <label>Upload Files</label>
                  <input className="form-control" type="file" />
                </div>
                <div className="submit-section">
                  <button className="btn btn-primary submit-btn">Save</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      {/* /Edit Project Modal */}
    </div>
  );
};

export default Projects;
