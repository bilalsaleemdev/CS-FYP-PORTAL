import React, { Component, useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import axios from "axios";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import { Link } from 'react-router-dom';
import FormControl from "@mui/material/FormControl";
import {Avatar_16,Avatar_02,Avatar_05,Avatar_09,Avatar_10,Avatar_11,Avatar_01,Avatar_12,PlaceHolder} from "../../../../../Entryfile/imagepath"
import moment from "moment";
import Select from "@mui/material/Select";

import ReactSummernote from "react-summernote";
import "react-summernote/dist/react-summernote.css";

import "../../../../index.css";

import {
  getAllTaskEmployee
} from "../../../../../api/network/customer/EmployeeApi";

import MenuItem from "@mui/material/MenuItem";
import ListItemText from "@mui/material/ListItemText";
import Checkbox from "@mui/material/Checkbox";
import { Input, Button } from "reactstrap";

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

const SubmitTask = (props) => {
  const cancelTokenSource = axios.CancelToken.source();
  const EmployeeId = localStorage.getItem('user_id');
  const [pendingTask, setPendingTask] = useState([]);
  const [idForEditSubmitTask, setIdForEditSubmitTask]= useState();
  const [editDescription, setEditDescription]= useState();
  const [editPriority, setEditPriority]= useState();
  const [editStartDate, setEditStartDate] = useState();
  const [editEndDate, setEditEndtDate] = useState();
  const [editTaskType, setEditTaskType] = useState();





  useEffect(() => {
    getEmployeeAllTask();
    
  }, []);
  useEffect(() => {
    console.log('here is all pending Task',pendingTask)
    
  }, [pendingTask]);
  useEffect(() => {
    console.log('here is edit onclick Task',idForEditSubmitTask)
    
  }, [idForEditSubmitTask]);

  const getEmployeeAllTask = async () => {
    console.log("sarting");
    const res = await getAllTaskEmployee(EmployeeId, cancelTokenSource.token);
    console.log("sdasdasd", res.data);
    if (res.success == true) {
      setPendingTask(res.data.pending_task);
    }
  };
  const setTaskEditModal = async (item) => {
    const Task_Type = item.task_type;
    setIdForEditSubmitTask(item.id);
    setEditDescription(item.description);
    setEditTaskType(item.task_type);
    setEditEndtDate(moment(item.deadline).format("MMM Do YYYY, h:mm:ss"))
    setEditStartDate(moment(item.created_at).format("MMM Do YYYY, h:mm:ss"))
    setEditPriority(item.priority)


    
  };





  return  (         
    <div className="page-wrapper">
      <Helmet>
          <title>Task Board - Gamified Employee Portal</title>
          <meta name="description" content="Login page"/>					
      </Helmet>
    {/* Page Content */}
    <div className="content container-fluid">
      {/* Page Header */}
      <div className="page-header">
        <div className="row">
          <div className="col-sm-12">
            <h3 className="page-title">Pending Task</h3>
            <ul className="breadcrumb">
              <li className="breadcrumb-item"><Link to="/app/main/dashboard">Dashboard</Link></li>
              <li className="breadcrumb-item active">Task Submission</li>
            </ul>
          </div>
        </div>
      </div>
      {/* /Page Header */}
  
      <div className="kanban-board card mb-0">
        <div className="card-body">
          <div className="kanban-cont">
        
            {
              pendingTask.map((item, index) => {
                return(
                  <div>
                    {item.task_status === 0 ? (
                      <div  key={item.id} style={{marginRight:'15px'}} className="kanban-list kanban-danger">
                      <div className="kanban-header">
                        <span className="status-title">Pending</span>
                        <div className="dropdown kanban-action">
                          <a href="" data-toggle="dropdown">
                            <i className="fa fa-ellipsis-v" />
                          </a>
                          <div className="dropdown-menu dropdown-menu-right">
                            <a className="dropdown-item" href="#" data-toggle="modal"  onClick={() => setTaskEditModal(item)} data-target="#edit_task_modal">Submit</a>
                           
                          </div>
                        </div>
                      </div>
                      <div className="kanban-wrap">
                     
                        <div className="card panel">
                          <div className="kanban-box">
                            <div className="task-board-header">
                              <span className="status-title"><a href="task-view.html">{item.description}</a></span>
                             
                            </div>
                            <div className="task-board-body">
                              
                              <div className="kanban-footer">
                                <span className="task-info-cont">
                                  <span style={{fontWeight:'900'}} className="task-date"><i className="fa fa-clock-o" /><b> Start at:{moment(item.created_at).format("MMM Do YYYY, h:mm:ss")}</b></span>
                                  <span style={{fontWeight:'900'}} className="task-date"><i className="fa fa-clock-o" /><b> Deadline:{moment(item.deadline).format("MMM Do YYYY, h:mm:ss")}</b></span>
                                  <span className="task-priority badge bg-inverse-warning">{item.priority}</span>
                                </span>
                              
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    ): <div>
                      All tasks are completed by you. Great Job!
                    </div>}
                  </div>
                );
              })
            }

            {/* 2nd section */}
           
      
          </div>
        </div>
      </div>
    </div>
    {/* /Page Content */}

   
    {/* Edit Task Modal */}
    <div id="edit_task_modal" className="modal custom-modal fade" role="dialog">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h4 className="modal-title">Submit Task</h4>
            <button type="button" className="close" data-dismiss="modal">×</button>
          </div>
          <div className="modal-body">
            <form>
              <div className="form-group">
                <label>Task Description</label>
                <p className="form-control">{editDescription}</p>
              </div>
              <div className="form-group">
                <label>Task Type</label>
                <p className="form-control">{editTaskType}</p>
              </div>
              <div className="form-group">
                <label>Priority</label>
                <p className="form-control">{editPriority}</p>
              </div>
              <div className="form-group">
                <label>Start at</label>
                <p className="form-control">{editStartDate}</p>
              </div>
              <div className="form-group">
              <label>Deadline</label>
              <p className="form-control">{editEndDate}</p>
            </div>
              <div className="form-group">
              <label>Task Justification</label>
              <input type="text" className="form-control"  value={editDescription} />
            </div>
              
              <div className="submit-section text-center">
                <button className="btn btn-primary submit-btn">Submit Task</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
    {/* /Edit Task Modal */}
  </div>
    );
};

export default SubmitTask;
