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
import Dialog from "@material-ui/core/Dialog";
// import Button from "@material-ui/core/Button";

import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";

import ReactSummernote from "react-summernote";
import "react-summernote/dist/react-summernote.css";

import "../../../../index.css";

import {
  getAllTaskEmployee,updateTaskAPI
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
  const [justification, setJustification] = useState();
  const [ projectId, setProjectId] = useState();
  const [employeeId, setEmployeeId] = useState();
  const [open, setOpen] = useState(false);
  const [data, setData] = useState(true);




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
      setData(false)
    }
  };
  const setTaskEditModal = async (item) => {
    console.log('justification', item)
    const Task_Type = item.task_type;
    setIdForEditSubmitTask(item.id);
    // setJustification(item.justification)
    setProjectId(item.project_id)
    setEmployeeId(item.employee_id)

    setEditDescription(item.description);
    setEditTaskType(item.task_type);
    setEditEndtDate((item.deadline))
    setEditStartDate(moment(item.created_at).format("MMM Do YYYY, h:mm:ss"))
    setEditPriority(item.priority)


    
  };
  const updateTask = async () => {
    const data = {
      project_id: projectId,
      employee_id: employeeId,
      deadline: editEndDate,
      task_type: editTaskType,
      priority: editPriority,
      task_status: 1,
      description:editDescription,
      justification: justification

    };
    const response = await updateTaskAPI(
      idForEditSubmitTask,
      data,
      cancelTokenSource.token
    );
    if (response.success == true) {
      console.log('121212121')
      // getTask();
      setOpen(true);
     
      // setEditOpen(true);
    }
  };

  const handleCloseSubmitResponse = () => {
    setOpen(false);
    
    $("#edit_task_modal").modal("hide");
    window.location.reload()
    // setEditOpen(false);
  };



  return  (         
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
            Task Submitted Successfully..!
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
        
       {   pendingTask.map((item, index) => {
            
            return(
              <div>
                {item.task_status === 0 ? (
                  <div  key={item.id} style={{marginRight:'15px'}} className="kanban-list kanban-danger">
                  <div className="kanban-header">
                    <span className="status-title">Pending</span>
                    <div   style={{ width:'62%' , marginRight:'-93px'  }} className="dropdown kanban-action">
                      <a href="" data-toggle="dropdown" style={{ fontSize:'10px', width:'50%'}}>
                        Submit Task
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
          })}

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
              <input type="text" className="form-control"  value={justification}  onChange = {(e) =>{ setJustification(e.target.value)}}/>
            </div>
              
              <div className="submit-section text-center">
                <Button  onClick={() => updateTask()}>Submit Task</Button>
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
