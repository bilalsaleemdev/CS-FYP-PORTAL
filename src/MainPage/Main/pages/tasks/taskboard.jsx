import React, { Component, useEffect, useState } from "react";
import axios from "axios";
import { Helmet } from "react-helmet";
import { Avatar_12 } from "../../../../Entryfile/imagepath";
import {
  getUserProjectForTaskAPI,
  getProjectTaskAPI,
} from "../../../../api/network/customer/EmployeeApi";
import { Input, Button } from "reactstrap";
const TaskBoard = () => {
  const cancelTokenSource = axios.CancelToken.source();

  const [selectedProject, setSelectedProject] = useState("");
  const [projectTask, setProjectTask] = useState([]);
  const [userProjectList, setUserProjectList] = useState([]);

  useEffect(() => {
    getUserProject();
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
  const getProjectTask = async (id) => {
    const response = await getProjectTaskAPI(id, cancelTokenSource.token);
    if (response.success == true) {
      setProjectTask(response.data);
    }
  };
  return (
    <div className="page-wrapper">
      <Helmet>
        <title>awais Task Board our</title>
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
                <li className="breadcrumb-item active">Task Board</li>
              </ul>
            </div>
          </div>
        </div>
        {/* /Page Header */}
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
                      getProjectTask(e.target.value);
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
          </div>
        </form>
        <div className="kanban-board card mb-0">
          <div className="card-body">
            {projectTask.map((item, index) => {
              return (
                <div key={item.id} className="kanban-cont">
                  {item.task_status === 0 ? (
                    <div className="kanban-list kanban-danger">
                      <div className="kanban-header">
                        <span className="status-title">Pending</span>
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
                                    {item.deadline}{" "}
                                  </span>
                                  <span className="task-priority badge bg-inverse-danger">
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
                    </div>
                  ) : (
                    <div className="kanban-list kanban-danger"></div>
                  )}
                  <div> </div>

                  {item.task_status === 1 ? (
                    <div className="kanban-list kanban-success">
                      <div className="kanban-header">
                        <span className="status-title">Completed</span>
                      </div>
                      <div className="task-board-header">
                        <span className="status-title"> {item.task_type} </span>
                      </div>
                    </div>
                  ) : null}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TaskBoard;
