
import React, { Component, useState, useEffect } from 'react';
import { Helmet } from "react-helmet";
import {Avatar_16,Avatar_02,Avatar_05,Avatar_09,Avatar_10,Avatar_11,Avatar_01,PlaceHolder} from "../../../Entryfile/imagepath"
import { useHistory } from 'react-router-dom'
import moment from "moment";

const Projects = (props) => {
  const history = useHistory()
  const [project, setProject] = useState('')
  // const []
  useEffect(() => {
    getData();

  }, [])
  const getData = () => {
    if(props?.history?.location?.state) {
      setProject(props.history.location.state)
    } else {
      history.push('/app/main/Projects')
    }


  }
      return (         
      <div className="page-wrapper" >
        <Helmet>
        Projects
            <meta name="description" content="Login page"/>					
        </Helmet>
      {/* Page Content */}
      <div className="content container-fluid">
        {/* Page Header */}
        <div className="page-header">
          <div className="row align-items-center">
            <div className="col">
              <h3 className="page-title">Project</h3>
              <ul className="breadcrumb">
                <li className="breadcrumb-item"><a href="/app/main/dashboard">Dashboard</a></li>
                <li className="breadcrumb-item active">Project</li>
              </ul>
            </div>
            <div className="col-auto float-right ml-auto">
              <a href="#" className="btn add-btn" data-toggle="modal" data-target="#edit_project"><i className="fa fa-plus" /> Edit Project</a>
              <a href="/app/projects/task-board" className="btn btn-white float-right m-r-10" data-toggle="tooltip" title="Task Board"><i className="fa fa-bars" /></a>
            </div>
          </div>
        </div>
        {/* /Page Header */}
        <div className="row">
          <div className="col-lg-8 col-xl-9">
            <div className="card">
              <div className="card-body">
                <div className="project-title">
                  <h5 className="card-title">{ project?.project?.name}</h5>
                  <small className="block text-ellipsis m-b-15"><span className="text-xs">{project?.task?.filter(x => x.task_status === 0 )?.length} </span> <span className="text-muted">open tasks, </span><span className="text-xs"> {project?.task?.filter(x => x.task_status === 1 )?.length}</span> 
                  <span className="text-muted">tasks completed</span></small>
                </div>
                <p> { project?.project?.description} </p>
            </div>
            </div>
     
          
           
          </div>
          <div className="col-lg-4 col-xl-3">
            <div className="card">
              <div className="card-body">
                <h6 className="card-title m-b-15">Project details</h6>
                <table className="table table-striped table-border">
                  <tbody>
                  
                 
                    <tr>
                      <td>Created:</td>
                      <td className="text-right"> {moment(project?.project?.created_at).format("DD MM YYYY") }</td>
                    </tr>
                    <tr>
                      <td>Deadline:</td>
                      <td className="text-right">{moment(project?.project?.end_at).format("DD MM YYYY") }</td>
                    </tr>
                
                    <tr>
                      <td>Created by:</td>
                      <td className="text-right"><a href="/app/profile/employee-profile">{project?.project?.projectManager}</a></td>
                    </tr>
                   
                  </tbody>
                </table>
                <p className="m-b-5">Progress <span className="text-success float-right">40%</span></p>
                <div className="progress progress-xs mb-0">
                  <div className="progress-bar bg-success" role="progressbar" data-toggle="tooltip" title="40%" style={{width: '40%'}} />
                </div>
              </div>
            </div>
            <div className="card project-user">
              <div className="card-body">
                <ul className="list-box">
                  <li>
                    <a href="/app/profile/employee-profile">
                      <div className="list-item">
                        {/* <div className="list-left">
                          <span className="avatar"><img alt="" src={Avatar_01} /></span>
                        </div> */}
                        <div className="list-body">
                          <span className="message-author"> {project?.project?.projectManager}</span>
                          <div className="clearfix" />
                          <span className="message-content">Team Leader</span>
                        </div>
                      </div>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="card project-user">
              <div className="card-body">
                <h6 className="card-title m-b-20">
                  Assigned users 
                  <button type="button" className="float-right btn btn-primary btn-sm" data-toggle="modal" data-target="#assign_user"><i className="fa fa-plus" /> Add</button>
                </h6>
                <ul className="list-box">
                  {project?.employee?.map((item, index) => {
                    return (
                     <li key={item.id}>
                     <a href="/app/profile/employee-profile">
                       <div className="list-item">
                         <div className="list-left">
                           <span className="avatar"><img alt="" src={Avatar_02} /></span>
                         </div>
                         <div className="list-body">
                           <span className="message-author"> {item.name}</span>
                           <div className="clearfix" />
                           <span className="message-content"> {item.type} </span>
                         </div>
                       </div>
                     </a>
                   </li>
                    )
                  })}
                 
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* /Page Content */}
      {/* Assign Leader Modal */}
      <div id="assign_leader" className="modal custom-modal fade" role="dialog">
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Assign Leader to this project</h5>
              <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">×</span>
              </button>
            </div>
            <div className="modal-body">
              <div className="input-group m-b-30">
                <input placeholder="Search to add a leader" className="form-control search-input" type="text" />
                <span className="input-group-append">
                  <button className="btn btn-primary">Search</button>
                </span>
              </div>
              <div>
                <ul className="chat-user-list">
                  <li>
                    <a href="#">
                      <div className="media">
                        <span className="avatar"><img alt="" src={Avatar_09} /></span>
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
                        <span className="avatar"><img alt="" src={Avatar_10} /></span>
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
              <h5 className="modal-title">Assign the user to this project</h5>
              <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">×</span>
              </button>
            </div>
            <div className="modal-body">
              <div className="input-group m-b-30">
                <input placeholder="Search a user to assign" className="form-control search-input" type="text" />
                <span className="input-group-append">
                  <button className="btn btn-primary">Search</button>
                </span>
              </div>
              <div>
                <ul className="chat-user-list">
                  <li>
                    <a href="#">
                      <div className="media">
                        <span className="avatar"><img alt="" src={Avatar_09} /></span>
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
                        <span className="avatar"><img alt="" src={Avatar_10} /></span>
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
      {/* /Assign User Modal */}
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
                        <a className="avatar" href="#" data-toggle="tooltip" title="Jeffery Lalor">
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
                        <a className="avatar" href="#" data-toggle="tooltip" title="John Doe">
                          <img alt="" src={Avatar_02} />
                        </a>
                        <a className="avatar" href="#" data-toggle="tooltip" title="Richard Miles">
                          <img alt="" src={Avatar_09} />
                        </a>
                        <a className="avatar" href="#" data-toggle="tooltip" title="John Smith">
                          <img alt="" src={Avatar_10} />
                        </a>
                        <a className="avatar" href="#" data-toggle="tooltip" title="Mike Litorus">
                          <img alt="" src={Avatar_05} />
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
    </div>
      );
   
}

export default Projects;
