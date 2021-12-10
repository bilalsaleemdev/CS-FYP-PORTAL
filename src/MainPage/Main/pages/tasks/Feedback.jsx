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
import Dialog from "@material-ui/core/Dialog";
import Button from "@material-ui/core/Button";

import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
const Projects = () => {
  const cancelTokenSource = axios.CancelToken.source();
  const [taskList, setTaskList] = useState([]);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    getTask();
  }, []);

  const getTask = async () => {
    const response = await getTaskApi(cancelTokenSource.token);
    if (response.success == true) {
      setTaskList(response.data);
    }
  };

  const handleCloseSubmitResponse = () => {
    setOpen(false);
    setEditOpen(false);
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
      setOpen(true);
    }
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
            Feedback Added Successfully..!
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
                    <th>Project Name</th>
                    <th> Employee Name </th>
                    <th>Priority</th>
                    <th>Assign Date</th>
                    <th>Deadline</th>

                    <th>Status</th>
                    <th>Rating</th>
                  </tr>
                </thead>
                <tbody>
                {console.log('sssss',taskList )}
                  {taskList.map((item, index) => {
                    if(item.task_status == 1){
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
                    }
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
