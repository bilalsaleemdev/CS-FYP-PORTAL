import React, { Component, useEffect, useState } from "react";
import axios from "axios";
import { Helmet } from "react-helmet";
import { Avatar_12 } from "../../../../../Entryfile/imagepath";
import ReactStars from "react-rating-stars-component";
import {
  getUserProjectForTaskAPI,
  getProjectTaskAPI,
  getAllProjectOfEmployee,
} from "../../../../../api/network/customer/EmployeeApi";
import moment from "moment";
import { Input, Button } from "reactstrap";
const FeedCompletedTasks = () => {
  const cancelTokenSource = axios.CancelToken.source();
  const EmployeeId = localStorage.getItem('user_id');
  const [selectedProject, setSelectedProject] = useState("");
  const [projectTask, setProjectTask] = useState([]);
  const [userProjectList, setUserProjectList] = useState([]);

  //   useEffect(() => {
  //     getUserProject();
  //   }, []);

  useEffect(() => {
    console.log(userProjectList, "testing");
  }, [userProjectList]);

  useEffect(() => {
    getEmployeeAllProject();
  }, []);

  const getEmployeeAllProject = async () => {
    console.log("sarting");
    const res = await getAllProjectOfEmployee(EmployeeId, cancelTokenSource.token);
    console.log("sdasdasd", res.data);
    if (res.success == true) {
      setUserProjectList(res.data);
    }
  };

  const getProjectTask = async (id) => {
    const response = await getProjectTaskAPI(id, cancelTokenSource.token);
    if (response.success == true) {
      setProjectTask(response.data);
    }
  };
  return (
    <div className="page-wrapper">
      <Helmet>
        <title>Feedback</title>
        <meta name="description" content="Login page" />
      </Helmet>
      {/* Page Content */}
      <div className="content container-fluid">
        {/* Page Header */}
        <div className="page-header">
          <div className="row">
            <div className="col-sm-12">
              <ul className="breadcrumb">
                <li className="breadcrumb-item">
                  <a href="/app/main/dashboard">Dashboard</a>
                </li>
                <li className="breadcrumb-item active">Feedback</li>
              </ul>
            </div>
          </div>
        </div>
        {/* /Page Header */}
        <form>
          <div className="row">
            <div className="col-sm-6">
              <div className="form-group">
                <label>Choose Project</label>
                <Input
                  type="select"
                  value={selectedProject}
                  name="select"
                  onChange={(e) => {
                    console.log(e.target.value, "aaaa");
                    setSelectedProject(e.target.value);
                    if (e.target.value) {
                      getProjectTask(e.target.value);
                    }
                  }}
                  id="exampleSelect"
                >
                  <option value="">Select Project</option>
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
          </div>
        </form>
        <div className="kanban-board card mb-0">
          <div className="card-body">
            <div className="kanban-cont">
              {projectTask.map((item, index) => {
                return (
                  <div>
                  {console.log('feedback sdas',item)}
                    {(item.task_status === 1 && item.rating > 0 ) ? (
                      <div  key={item.id} style={{marginRight:'15px'}} className="kanban-list kanban-success">
                        <div className="kanban-header">
                          <span className="status-title">Completed</span>
                        </div>
                        <div className="kanban-wrap">
                          <div className="card panel">
                            <div className="kanban-box">
                              <div className="task-board-header">
                                <span className="status-title">
                                  {" "}
                                  {item.task_type}{" "}
                                </span>
                              </div>
                              <div className="task-board-body">
                                <div className="kanban-footer">
                                  <span className="task-info-cont">
                                    <span className="task-date">
                                      <i className="fa fa-clock-o" />{" "}
                                      {moment(item.deadline).format("DD MM YYYY")}{" "}
                                    </span>
                                    <span className="task-priority badge bg-inverses">
                                      {item.priority}
                                    </span>
                                  </span>
                                  <span className="task-users">
                                    <img
                                      src={Avatar_12}
                                      className="task-avatar"
                                      width={24}
                                      height={24}
                                    />
                                  </span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div style={{ display: "flex" }} className="form-group">
                        <label
                          style={{ paddingTop: "8px", paddingRight: "19px" }}
                        >
                          Work Quality:
                        </label>
                        <ReactStars
                          count={5}
                          edit={false}
                          // onClick={}
                         
                          // value={quesOneValue}
                          // onChange={(newRating) => {
                          //   updateRating(item, newRating);
                          // }}
                          value={item.rating}
                          size={24}
                          activeColor="#ffd700"
                        />
                      </div>
                      </div>
                    ) : (
                      <div className=""></div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeedCompletedTasks;
