import axios from "axios";
import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import ReactSummernote from "react-summernote";
import "react-summernote/dist/react-summernote.css"; // import styles
import {
  deleteWorkShopeAPI,
  updateWorkShopeAPI,
  createWorkShopeAPI,
  getUserWorkshopesAPI,
  createUserWorkShopeAPI,
} from "../../../../api/network/customer/EmployeeApi";
import moment from "moment";
import Dialog from "@material-ui/core/Dialog";
import Button from "@material-ui/core/Button";

import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import "date-fns";
import DateFnsUtils from "@date-io/date-fns";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from "@material-ui/pickers";
import "../../../antdstyle.css"

const Workshopes = () => {
  const cancelTokenSource = axios.CancelToken.source();
  var user_id = localStorage.getItem("user_id");
  const [open, setOpen] = useState(false);

  const [selectedWorkShopId, setSelectedWorkShopId] = useState();
  const [workShopeId, setWorkShopeId] = useState();
  const [create_update, setCreate_Update] = useState(true);
  const [purpose, setPurpose] = useState();
  const [day, setDay] = useState(1);
  const [start_at, setStart_at] = useState(new Date());
  const [last_at, setLast_at] = useState(new Date());
  const [url, setUrl] = useState();
  const [conferanceData, setConferanceData] = useState([]);
  const [ noData, setNoData] = useState(false);

  useEffect(() => {
    
    let someDate = new Date();
    console.log('oold1',someDate);
    let numberOfDaysToAdd = day;
    someDate= new Date(new Date().getTime()+(day*24*60*60*1000));

    console.log('oold12',someDate);
    console.log('oold123', start_at)
    console.log('oold1233', last_at)
    setLast_at(someDate)
    

  }, [day])

  useEffect(() => {
    getUserWorkshopes();
  }, []);

  $("#empid").on("change", function (e) {
    setDay(e.target.value);
  });
  function createWprkshope() {
    setCreate_Update(true);
  }
  const createWorkShope = async () => {
    const data = {
      day: parseInt(day),
      url: url,
      start_at: start_at,
      last_at: last_at,
      purpose: purpose,
    };
    const response = await createWorkShopeAPI(data, cancelTokenSource.token);
    if (response.success == true) {
      setOpen(true);
      console.log("Data::", response.data.id);
      createUserWorkShope(localStorage.getItem("user_id"), response.data.id);
    }
   
  };
  const updateWorkShope = async () => {
    const data = {
      id: workShopeId,
      day: parseInt(day),
      url: url,
      start_at: start_at,
      last_at: last_at,
      purpose: purpose,
    };
    console.log("Data::", data);
    const response = await updateWorkShopeAPI(data, cancelTokenSource.token);
    if (response.success == true) {
      console.log("Data::", response.data.id);
      getUserWorkshopes();
      window.location.reload();
    }
  };
  const deleteWorkShope = async () => {
    const response = await deleteWorkShopeAPI(
      selectedWorkShopId,
      cancelTokenSource.token
    );
    if (response.success == true) {
      console.log("Data::", response.data.id);
      // getUserWorkshopes();
    }
  };
  const createUserWorkShope = async (user_id, workshope_id) => {
    const data = { user_id: user_id, conference_id: workshope_id };
    const response = await createUserWorkShopeAPI(
      data,
      cancelTokenSource.token
    );
    if (response.success == true) {
      getUserWorkshopes();
    }
  };

  const getUserWorkshopes = async () => {
    const response = await getUserWorkshopesAPI(
      user_id,
      cancelTokenSource.token
    );
    if (response.success == true) {
      setConferanceData([...[], ...response.data]);
      
    }
    else if(!response.data) {
      console.log('innnnn')
      setNoData(true)
    }
  };
  const editWorkshope = (item) => {
    setCreate_Update(false);
    setWorkShopeId(item.id);
    setPurpose(item.purpose);
    setDay(item.day);
    setLast_at(moment(item.last_at).format("YYYY-DD-MM"));
    setStart_at(moment(item.start_at).format("YYYY-DD-MM"));
    setUrl(item.url);
  };
  const deleteSerVal = (id) => {
    setSelectedWorkShopId(id);
  };
  const handleCloseSubmitResponse = () => {
    // setIsEditOpen(false);
    setOpen(false);
    //  window.location.reload();
    $("#create_project").modal("hide");
    window.location.reload();
   
  };

  return (
    <>
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
              Hey! Workshop created successfully..!
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button
              onClick={handleCloseSubmitResponse}
              color="primary"
              autoFocus
            >
              Ok
            </Button>
          </DialogActions>
        </Dialog>
      )}
      <div className="page-wrapper">
        <Helmet>
          <title>Manager - WorkShop</title>
          <meta name="description" content="Login page" />
        </Helmet>
        {/* Page Content */}
        <div className="content container-fluid">
          {/* Page Header */}
          <div className="page-header">
            <div className="row align-items-center">
              <div className="col">
                <h3 className="page-title">Workshop</h3>
                <ul className="breadcrumb">
                  <li className="breadcrumb-item">
                    <a href="/app/main/dashboard">Dashboard</a>
                  </li>
                  <li className="breadcrumb-item active">workshop</li>
                </ul>
              </div>
              <div className="col-auto float-right ml-auto">
                <a
                  href="#"
                  className="btn add-btn"
                  onClick={() => createWprkshope()}
                  data-toggle="modal"
                  data-target="#create_project"
                >
                  <i className="fa fa-plus" /> Create Workshope
                </a>
              </div>
            </div>
          </div>

          {
            !noData ? (<div className="row">
            {conferanceData.map((key, item) => (
              <div className="col-lg-4 col-sm-6 col-md-4 col-xl-3">
                <div className="card">
                  <div className="card-body">
                    <div className="dropdown dropdown-action profile-action">
                      <div
                        className="action-icon dropdown-toggle"
                        data-toggle="dropdown"
                        aria-expanded="false"
                      >
                        <i className="material-icons">more_vert</i>
                      </div>
                      <div className="dropdown-menu dropdown-menu-right">
                        {/* data-toggle="modal" */}
                        <a
                          className="dropdown-item"
                          onClick={() => editWorkshope(key)}
                          data-toggle="modal"
                          data-target="#create_project"
                        >
                          <i className="fa fa-pencil m-r-5" /> Edit
                        </a>
                        <a
                          className="dropdown-item"
                          onClick={() => deleteSerVal(key.id)}
                          href="#"
                          data-toggle="modal"
                          data-target="#delete_project"
                        >
                          <i className="fa fa-trash-o m-r-5" /> Delete
                        </a>
                      </div>
                    </div>
                    <h4 className="project-title">
                      <a href="/app/projects/projects-view">
                        Manager WorkShope
                      </a>
                    </h4>
                    <p className="text-muted">{key.purpose}</p>
                    <div className="pro-deadline m-b-15">
                      <div className="sub-title">day:</div>
                      <div className="text-muted">{key.day}</div>
                    </div>
                    <div className="project-members m-b-15">
                      <div>
                        Start At: <span style={{fontWeight:'200', fontSize:'13px'}}> {(moment(key.start_at).format('MMM Do YY'))}</span>
                      </div>
                      <div>
                        End At: <span style={{fontWeight:'400', fontSize:'14px'}}>{(moment(key.last_at).format('MMM Do YY'))}</span>
                      </div>
                    </div>
                    <div className="project-members m-b-15">
                      <div>
                        URL:<span>{key.url}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>): (
            <p>No WorkShop Available For this Account.!</p>
          )
          }
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
                {create_update && (
                  <h5 className="modal-title">Create Workshope</h5>
                )}
                {!create_update && (
                  <h5 className="modal-title">Update Workshope</h5>
                )}

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
                        <label>Purpose</label>
                        <input
                          value={purpose}
                          onChange={(e) => setPurpose(e.target.value)}
                          className="form-control"
                          type="text"
                          required
                        />
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <div className="form-group">
                        <label>Days</label>
                        <select id="empid" value={day} className="select">
                          <option value="">---Select Days----</option>
                          <option value="1">1</option>
                          <option value="2">2</option>
                          <option value="3">3</option>
                          <option value="4">4</option>
                          <option value="5">5</option>
                          <option value="6">6</option>
                          <option value="7">7</option>
                          <option value="8">8</option>
                          <option value="9">9</option>
                          <option value="10">10</option>
                        </select>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-sm-6">
                      <div className="form-group">
                      <label>Start Date (DD/MM/YY)</label>
                          <MuiPickersUtilsProvider utils={DateFnsUtils}>
                            <KeyboardDatePicker
                              variant="inline"
                              autoOk={true}
                              style={{color:'black' , width:'100%'}}
                              format="yyyy-MM-dd"
                              margin="normal"
                              id="date-picker-inline"
                              // label="Start Date (DD/MM/YY)"
                              value={start_at}
                              onChange={(newDate) => setStart_at(newDate)}
                              KeyboardButtonProps={{
                                "aria-label": "change date",
                              }}
                            />
                          </MuiPickersUtilsProvider>
                          
                 
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <div className="form-group">
                      <label>Last Date (DD/MM/YY)</label>
                        <MuiPickersUtilsProvider utils={DateFnsUtils}>
                            <KeyboardDatePicker
                              variant="inline"
                              autoOk={true}
                              style={{color:'black' , width:'100%'}}
                              format="yyyy-MM-dd"
                              margin="normal"
                              id="date-picker-inline"
                              // label="Last Date (DD/MM/YY)"
                              value={last_at}
                              onChange={(newDate) => setLast_at(newDate)}
                              KeyboardButtonProps={{
                                "aria-label": "change date",
                              }}
                            />
                          </MuiPickersUtilsProvider>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-sm-6">
                      <div className="form-group">
                        <label>URL</label>
                        <input
                          value={url}
                          onChange={(e) => setUrl(e.target.value)}
                          className="form-control"
                          type="text"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="submit-section">
                    {create_update && (
                      <Button
                      style={{backgroundColor:'#77aafc'}}
                        onClick={() => createWorkShope()}
                        className="btn btn-primary"
                        disabled = {!url || !day || !purpose}
                      >
                        Create
                      </Button>
                    )}
                    {!create_update && (
                      <Button
                      style={{backgroundColor:'#77aafc'}}
                      onClick={() => updateWorkShope()}
                        className="btn btn-primary"
                        disabled = {!url || !day || !purpose}
                      >
                        Update
                      </Button>
                    )}
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        {/* /Create Project Modal */}

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
                  <h3>Delete WorkShop</h3>
                  <p>Are you sure want to delete?</p>
                </div>
                <div className="modal-btn delete-action">
                  <div className="row">
                    <div className="col-6">
                      <a
                        href=""
                        onClick={() => deleteWorkShope()}
                        className="btn btn-primary continue-btn"
                      >
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
    </>
  );
  //  }
};

export default Workshopes;
