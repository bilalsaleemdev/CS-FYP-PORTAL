import axios from "axios";
import ReactStars from "react-rating-stars-component";

import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import {
  putTaskApi,
  getTaskApi,
} from "../../../../api/network/customer/EmployeeApi";

import "react-summernote/dist/react-summernote.css"; // import styles

import "../../../index.css";
import moment from "moment";

const Projects = () => {
  const cancelTokenSource = axios.CancelToken.source();
  const [taskList, setTaskList] = useState([]);

  useEffect(() => {
    getTask();
  }, []);

  const getTask = async () => {
    const response = await getTaskApi(cancelTokenSource.token);
    if (response.success == true) {
      setTaskList(response.data);
    }
  };

  const updateRating = async (item, rating) => {
    const data = {
      priority: item.priority,
      task_type: item.task_type,
      deadline: moment(item.deadline).format("YYYY-MM-DD"),
      employee_id: item.employee_id,
      project_id: item.project_id,
      rating: rating,
      task_status: item.task_status
    };
    const response = await putTaskApi(item.id, data, cancelTokenSource.token);
    if (response.success == true) {
      getTask();
    }
  };

  return (
    <div className="page-wrapper">
      <Helmet>
        <title>Projects - HRMS Admin Template</title>
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

                    <th>Status</th>
                    <th>Rating</th>
                  </tr>
                </thead>
                <tbody>
                  {taskList.map((item, index) => {
                    return (
                      <tr key={item.id}>
                        <td>{item.project_id}</td>
                        <td> {item.employee_id} </td>
                        <td>{item.priority}</td>

                        <td>{moment(item.created_at).format("DD MM YYYY")}</td>
                        <td>{moment(item.deadline).format("DD MM YYYY")}</td>

                        <td> {item.task_status ? "Completed" : "Pending"} </td>

                        <td>
                          <ReactStars
                            count={5}
                            onChange={(newRating) => {
                              updateRating(item, newRating);
                            }}
                            value={item.rating}
                            size={24}
                            activeColor="#ffd700"
                          />
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
    </div>
  );
};

export default Projects;
