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
const Feedback = () => {
  const cancelTokenSource = axios.CancelToken.source();
  const [quesOneValue, setQuesOneValue] = useState(0);
  const [quesTwoValue, setQuesTwoValue] = useState();
  const [feedbackTotalValue, setFeedbackTotalValue] = useState();
  const [iteem , setIteem] = useState({})

  const [taskList, setTaskList] = useState([]);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    getTask();
  }, []);
  useEffect(() => {
    console.log("awais checking rait", quesOneValue);
    if (quesOneValue > 0 && quesTwoValue > 0) {
      let raiting = (quesOneValue + quesTwoValue) / 2;
      setFeedbackTotalValue(raiting);
    }
  }, [quesOneValue, quesTwoValue]);

  useEffect(() => {console.log('awais item',iteem)} , [iteem])
  useEffect(() => {
    feedbackTotalValue;
    console.log("awais checking feedbackTotalValue", feedbackTotalValue);
  }, [feedbackTotalValue]);

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
    console.log("ssss 44", item);
    const data = {
      priority: item.priority,
      task_type: item.task_type,
      deadline: item.deadline,
      employee_id: item.employee_id,
      project_id: item.project_id,
      rating: rating,
      task_status: item.task_status,
      justification: item.justification,
      notifications: item.notifications,
      description: item.description,
    };
    const response = await putTaskApi(item.id, data, cancelTokenSource.token);
    if (response.success == true) {
      getTask();
      setOpen(true);
      $("#create_project").modal("hide");
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
                  {console.log("sssss", taskList)}
                  {taskList.map((item, index) => {
                    if (item.task_status == 1) {
                      return (
                        <tr key={item.id}>
                          <td>{item.project_name}</td>
                          <td> {item.employee_name} </td>
                          <td>{item.priority}</td>

                          <td>
                            {moment(item.created_at).format("DD MM YYYY")}
                          </td>
                          <td>{moment(item.deadline).format("DD MM YYYY")}</td>

                          <td>
                            {" "}
                            {item.task_status ? "Completed" : "Pending"}{" "}
                          </td>

                          <td>
                            <div onClick={() => setIteem(item)} className="col-auto float-right ml-auto">
                              <a


                                href="#"
                                className="btn add-btn"
                                data-toggle="modal"
                                data-target="#create_project"
                              >
                                <i className="fa fa-plus" /> Give Feedback
                              
                              </a>
                            </div>

                            {/* <ReactStars
                              count={5}
                              onClick={}
                              // onChange={(newRating) => {
                              //   updateRating(item, newRating);
                              // }}
                              value={item.rating}
                              size={24}
                              activeColor="#ffd700"
                           /> */}
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
              <h5 className="modal-title">Give Feedback</h5>
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
                <div className="row" style={{ display: "flex" }}>
                  <div
                    style={{ display: "flex" }}
                    className="col-lg-12 col-md-12 col-sm-12"
                  >
                    <div style={{ display: "flex" }} className="form-group">
                      <label
                        style={{ paddingTop: "8px", paddingRight: "19px" }}
                      >
                        question 1:
                      </label>
                      <ReactStars
                        count={5}
                        // onClick={}
                        onChange={(newRating) => {
                          setQuesOneValue(newRating);
                        }}
                        value={quesOneValue}
                        // onChange={(newRating) => {
                        //   updateRating(item, newRating);
                        // }}
                        // value={item.rating}
                        size={24}
                        activeColor="#ffd700"
                      />
                    </div>
                  </div>
                </div>

                <div className="row" style={{ display: "flex" }}>
                  <div
                    style={{ display: "flex" }}
                    className="col-lg-12 col-md-12 col-sm-12"
                  >
                    <div style={{ display: "flex" }} className="form-group">
                      <label
                        style={{ paddingTop: "8px", paddingRight: "19px" }}
                      >
                        question 2:
                      </label>
                      <ReactStars
                        count={5}
                        onChange={(newRating) => {
                          setQuesTwoValue(newRating);
                        }}
                        value={quesTwoValue}
                        // onClick={}
                        // onChange={(newRating) => {
                        //   updateRating(item, newRating);
                        // }}
                        // value={item.rating}
                        size={24}
                        activeColor="#ffd700"
                      />
                    </div>
                  </div>
                </div>

                <div className="submit-section">
                  <Button
                    className="btn-primary "
                    onClick={(newRating) => {
                      updateRating(iteem, feedbackTotalValue);
                    }}
                  >
                    Give Feedback
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feedback;
