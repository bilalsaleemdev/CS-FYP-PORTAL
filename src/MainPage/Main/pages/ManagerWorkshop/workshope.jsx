import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Helmet } from "react-helmet";
import ReactSummernote from 'react-summernote';
import 'react-summernote/dist/react-summernote.css'; // import styles
import {
  createWorkShopeAPI,
  getUserWorkshopesAPI,
  createUserWorkShopeAPI
} from "../../../../api/network/customer/EmployeeApi";

const Workshopes = () => {

  const cancelTokenSource = axios.CancelToken.source();
  var user_id = localStorage.getItem('user_id');

  const [purpose, setPurpose] = useState();
  const [day, setDay] = useState();
  const [start_at, setStart_at] = useState('2021-01-01');
  const [last_at, setLast_at] = useState('2021-01-01');
  const [url, setUrl] = useState();
  const [conferanceData, setConferanceData] = useState([]);

  // let conferanceData = [1,2];
  useEffect(() => {    
    getUserWorkshopes()
  }, [])

  $('#empid').on('change', function (e) {
    setDay(e.target.value)    
  });
  
  const createWorkShope = async() => {
    const data = { 'day': day , 'url':url,'start_at':start_at, 'last_at':last_at ,'purpose': purpose};
    const response = await createWorkShopeAPI(data,cancelTokenSource.token); 
    if(response.success == true){
      console.log('Data::',response.data.id)
      createUserWorkShope(localStorage.getItem('user_id'),response.data.id)
    }
  };

  const createUserWorkShope = async(user_id,workshope_id) => {
    const data = { 'user_id': user_id , 'conference_id':workshope_id};
    const response = await createUserWorkShopeAPI(data,cancelTokenSource.token); 
    if(response.success == true){
      getUserWorkshopes()
    }
  };

  const getUserWorkshopes = async() => {    
    const response = await getUserWorkshopesAPI( 
      user_id,    
      cancelTokenSource.token
    );    
    if(response.success == true){      
      setConferanceData([...[],...response.data])
    }
  };
  
  
  
  return (
    <>
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
                  <li className="breadcrumb-item"><a href="/app/main/dashboard">Dashboard</a></li>
                  <li className="breadcrumb-item active">workshop</li>
                </ul>
              </div>
              <div className="col-auto float-right ml-auto">
                <a href="#" className="btn add-btn" data-toggle="modal" data-target="#create_project"><i className="fa fa-plus" /> Create Workshope</a>                
              </div>
            </div>
          </div>

          <div className="row">
            { 
              conferanceData.map((key,item) => (
                <div className="col-lg-4 col-sm-6 col-md-4 col-xl-3">
                <div className="card">
                  <div className="card-body">
                    <div className="dropdown dropdown-action profile-action">
                      <a href="#" className="action-icon dropdown-toggle" data-toggle="dropdown" aria-expanded="false"><i className="material-icons">more_vert</i></a>
                      <div className="dropdown-menu dropdown-menu-right">
                        <a className="dropdown-item" href="#" data-toggle="modal" data-target="#edit_project"><i className="fa fa-pencil m-r-5" /> Edit</a>
                        <a className="dropdown-item" href="#" data-toggle="modal" data-target="#delete_project"><i className="fa fa-trash-o m-r-5" /> Delete</a>
                      </div>
                    </div>
              <h4 className="project-title"><a href="/app/projects/projects-view">Management WorkShop</a></h4>                    
                    <p className="text-muted">{key.purpose}
                  </p>
                    <div className="pro-deadline m-b-15">
                      <div className="sub-title">
                        day:
                    </div>
                      <div className="text-muted">
                      {key.day}
                    </div>
                    </div>
                    <div className="project-members m-b-15">
                      <div>Start At:<span>{key.start_at}</span></div>
                      <div>Start At:<span>{key.last_at}</span></div>                      
                    </div>                    
                  </div>
                </div>
              </div>
              ))              
            }            
          </div>
        </div>
        {/* /Page Content */}
        {/* Create Project Modal */}
        <div id="create_project" className="modal custom-modal fade" role="dialog">
          <div className="modal-dialog modal-dialog-centered modal-lg" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Create Workshope</h5>
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">×</span>
                </button>
              </div>
              <div className="modal-body">
                <form>
                  <div className="row">
                    <div className="col-sm-6">
                      <div className="form-group">
                        <label>Purpose</label>
                        <input value={purpose}
                          onChange={(e) => setPurpose(e.target.value)}
                          className="form-control"
                          type="text" />
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <div className="form-group">
                        <label>Days</label>
                        <select
                          id="empid"
                          value={day}
                          className="select">
                          <option value=''>---Select Days----</option>
                          <option value='1'>1</option>
                          <option value='2'>2</option>
                          <option value='3'>3</option>
                          <option value='4'>4</option>
                          <option value='5'>5</option>
                          <option value='6'>6</option>
                          <option value='7'>7</option>
                          <option value='8'>8</option>
                          <option value='9'>9</option>
                          <option value='10'>10</option>
                        </select>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-sm-6">
                      <div className="form-group">
                        <label>Start Datesss</label>
                        <div id="stdid" className="cal-icon">
                          <input                            
                            className="form-control datetimepicker"
                            type="text"
                            value={start_at}
                            onChange={(e)=>setStart_at(e.target.value)}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <div className="form-group">
                        <label>End Date</label>
                        <div className="cal-icon">
                          <input
                            value={last_at}
                            onChange={(e)=>setLast_at(e.target.value)}
                            className="form-control datetimepicker" type="text" />
                        </div>
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
                          className="form-control" type="text" />
                      </div>
                    </div>                    
                  </div>
                  <div className="submit-section">
                    <div onClick={createWorkShope}className="btn btn-primary">Submit</div>
                  </div>                  
                </form>
              </div>
            </div>
          </div>
        </div>
        {/* /Create Project Modal */}
        {/* Edit Project Modal */}
        <div id="edit_project" className="modal custom-modal fade" role="dialog">
          <div className="modal-dialog modal-dialog-centered modal-lg" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Edit Project</h5>
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">×</span>
                </button>
              </div>
              <div className="modal-body">
                <form>
                  <div className="row">
                    <div className="col-sm-6">
                      <div className="form-group">
                        <label>Project Name</label>
                        <input className="form-control" defaultValue="Project Management" type="text" />
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
                          <input className="form-control datetimepicker" type="text" />
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <div className="form-group">
                        <label>End Date</label>
                        <div className="cal-icon">
                          <input className="form-control datetimepicker" type="text" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-sm-3">
                      <div className="form-group">
                        <label>Rate</label>
                        <input placeholder="$50" className="form-control" defaultValue="$5000" type="text" />
                      </div>
                    </div>
                    <div className="col-sm-3">
                      <div className="form-group">
                        <label>&nbsp;</label>
                        <select className="select">
                          <option>Hourly</option>
                          <option >Fixed</option>
                        </select>
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <div className="form-group">
                        <label>Priority</label>
                        <select className="select">
                          <option >High</option>
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
                          <a href="#" data-toggle="tooltip" title="Jeffery Lalor" className="avatar">
                            <img alt="" />
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
                          <a href="#" data-toggle="tooltip" title="John Doe" className="avatar">
                            <img alt="" />
                          </a>
                          <a href="#" data-toggle="tooltip" title="Richard Miles" className="avatar">
                            <img alt="" />
                          </a>
                          <a href="#" data-toggle="tooltip" title="John Smith" className="avatar">
                            <img alt="" />
                          </a>
                          <a href="#" data-toggle="tooltip" title="Mike Litorus" className="avatar">
                            <img alt="" />
                          </a>
                          <span className="all-team">+2</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="form-group">
                    <label>Description</label>
                    <textarea rows={4} className="form-control" placeholder="Enter your message here" defaultValue={""} />
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
        {/* Delete Project Modal */}
        <div className="modal custom-modal fade" id="delete_project" role="dialog">
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
                      <a href="" className="btn btn-primary continue-btn">Delete</a>
                    </div>
                    <div className="col-6">
                      <a href="" data-dismiss="modal" className="btn btn-primary cancel-btn">Cancel</a>
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
}

export default Workshopes;
