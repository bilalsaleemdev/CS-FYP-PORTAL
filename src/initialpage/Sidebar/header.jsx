/**
 * App Header
 */
import React, { Component, useEffect, useState } from 'react';
import { withRouter } from 'react-router-dom';
import {headerlogo,lnEnglish,lnFrench,lnSpanish,lnGerman, Avatar_02,Avatar_03,Avatar_05,
  Avatar_06,Avatar_08,Avatar_09,Avatar_13,Avatar_17,Avatar_21} from '../../Entryfile/imagepath'
import axios, { CancelTokenSource } from "axios";
import {
  conferenceUpdate,
  getEmployeeOfTheMonth,
  getEmployeeConferenceNotification,
  getEmployeeTaskNotification,
  taskConferenceUpdate,
  getEmployeeProjectNotification,
  projectConferenceUpdate
} from "../../api/network/customer/EmployeeApi";
import { notification } from 'antd';
import { format } from 'date-fns';
import { purple } from '@material-ui/core/colors';

function Header(props) {
    const cancelTokenSource = axios.CancelToken.source();
    const [countNotification, setCountNotification] = useState(0)
    const [conferenceNotification, setConferenceNotification] = useState([])
    const [taskNotification, setTaskNotification] = useState([])
    const [projectNotification, setProjectNotification] = useState([])
    const [topEmployee, setTopEmployee] = useState([])
    useEffect(()=>{
      getNotificationConference(),
      getTopEmployee(),
      getNotificationTask(),
      getNotificationProject()
    },[])
    
    const {  location } = props
    let pathname = location.pathname
    const type = localStorage.getItem("EmployeeType");
    const path = `/purple/app/profile/${type}-profile`;

    const getNotificationProject = async () =>{
      let response = await getEmployeeProjectNotification(localStorage.getItem('user_id'),cancelTokenSource.token);
      if (response.success == true) {
        setProjectNotification(response.data)
        // setCountNotification(response.data.length)        
      }
    }
    const getNotificationTask = async () =>{
      let response = await getEmployeeTaskNotification(localStorage.getItem('user_id'),cancelTokenSource.token);
      if (response.success == true) {
        setTaskNotification(response.data)
        // setCountNotification(response.data.length)        
      }
    }
    const getNotificationConference = async () =>{
      localStorage.getItem('user_id')
      let response = await getEmployeeConferenceNotification(localStorage.getItem('user_id'),cancelTokenSource.token);
      if (response.success == true) {
        setConferenceNotification(response.data)
        setCountNotification(response.data.length)        
      }
    }
    const getTopEmployee = async () =>{
      let response = await getEmployeeOfTheMonth(cancelTokenSource.token);
      if (response.success == true) {
        setTopEmployee([response.data[0]])
      }
    }
    const  notificationCancle =  async(item,e) => {  

        let users_conference_sceen = []
        // console.log('users_conference_sceen::',users_conference_sceen)
        let myArr = []
        if(item.notifications){          
          myArr = item.notifications.split(",");
          myArr.forEach(element => {
            users_conference_sceen.push(element)
          })      
        }
        users_conference_sceen.push(localStorage.getItem('user_id')+"")
        console.log('users_conference_sceen::',users_conference_sceen)
      let data = {
        day:item.day,
        url:item.url,
        start_at:format(new Date(item.start_at), 'yyyy-MM-dd'),
        last_at:format(new Date(item.last_at), 'yyyy-MM-dd'),
        purpose:item.purpose,
        notifications:users_conference_sceen.toString()        
    }
      let response = await conferenceUpdate(item.id,data,cancelTokenSource.token);
      if (response.success == true) {
        window.location.reload(true);
      }
      else{
        console.log(response)
      }      
      
    }

    const  taskNotificationCancle =  async(item,e) => {
      
      let data = {
        project_id:item.project_id,
        employee_id:item.employee_id,
        deadline:format(new Date(item.deadline), 'yyyy-MM-dd'),
        task_type:item.task_type,
        priority:item.priority,
        rating:item.rating,
        task_status:item.task_status,
        notifications:0        
    }
    console.log(data)
    let response = await taskConferenceUpdate(item.id,data,cancelTokenSource.token);
    if (response.success == true) {
      window.location.reload(true);
    }
    else{
      console.log(response)
    }      
    
  }

  const  ProjectNotificationCancle =  async(item,e) => {
      
    let users_conference_sceen = []
        // console.log('users_conference_sceen::',users_conference_sceen)
        let myArr = []
        if(item.notifications){          
          myArr = item.notifications.split(",");
          myArr.forEach(element => {
            users_conference_sceen.push(element)
          })      
        }
        users_conference_sceen.push(localStorage.getItem('user_id')+"")

    let data = {
      name:item.name,
      user_id:item.user_id,
      start_at:format(new Date(item.start_at), 'yyyy-MM-dd'),
      end_at:format(new Date(item.end_at), 'yyyy-MM-dd'),
      team_member:item.team_member,
      description:item.description,
      notifications:users_conference_sceen.toString()              
  }
  console.log(data)
  let response = await projectConferenceUpdate(item.id,data,cancelTokenSource.token);
  if (response.success == true) {
    window.location.reload(true);
  }
  else{
    console.log(response)
  }      
  
}
    
      return (
         <div className="header" style={{right:"0px"}}>
        {/* Logo */}
        <div className="header-left">
          <a href={`/app/main/dashboard/${typeDashboard}`} className="logo">
            <img src={headerlogo} width={40} height={40} alt="" />
          </a>
        </div>
        {/* /Logo */}
        <a id="toggle_btn" href="" style={{display: pathname.includes('tasks') ?"none" :pathname.includes('compose') ? "none" :""}}>
          <span className="bar-icon"><span />
            <span />
            <span />
          </span>
        </a>
        {/* Header Title */}
        <div className="page-title-box">
          <h3>Gamified Employee Portal</h3>
        </div>
        {/* /Header Title */}
        <a id="mobile_btn" className="mobile_btn" href="#sidebar"><i className="fa fa-bars" /></a>
        {/* Header Menu */}
        <ul className="nav user-menu">
          {/* Search */}
          {/* <li className="nav-item">
            <div className="top-nav-search">
              <a href="" className="responsive-search">
                <i className="fa fa-search" />
              </a>
              <form action="/app/pages/search">
                <input className="form-control" type="text" placeholder="Search here" />
                <button className="btn" type="submit"><i className="fa fa-search" /></button>
              </form>
            </div>
          </li> */}
          {/* /Search */}
          {/* Flag */}
          {/* <li className="nav-item dropdown has-arrow flag-nav">
            <a className="nav-link dropdown-toggle" data-toggle="dropdown" href="#" role="button">
              <img src={lnEnglish} alt="" height={20} /> <span>English</span>
            </a>
            <div className="dropdown-menu dropdown-menu-right">
            <a href="" className="dropdown-item">
                    <img src={lnEnglish} alt="" height={16} /> English
                  </a>
                  <a href="" className="dropdown-item">
                    <img src={lnFrench} alt="" height={16} /> French
                  </a>
                  <a href="" className="dropdown-item">
                    <img src={lnSpanish} alt="" height={16} /> Spanish
                  </a>
                  <a href="" className="dropdown-item">
                    <img src={lnGerman} alt="" height={16} /> German
                  </a>
            </div>
          </li> */}
          {/* /Flag */}
          {/* Notifications */}
          <li className="nav-item dropdown">
            <a href="#" className="dropdown-toggle nav-link" data-toggle="dropdown">
              <i className="fa fa-bell-o" /> <span className="badge badge-pill">{countNotification}</span>
            </a>
            <div className="dropdown-menu notifications">
            
            <div style={{backgroundColor:"#bcc8ff"}} className="topnav-dropdown-header">
                <span className="notification-title">Employee Of The Month</span>
                {/* <a href="" className="clear-noti"> Clear All </a> */}
              </div>
            <ul className="notification-list">
              
              {topEmployee && topEmployee.map(item =>(
                <li className="notification-message" key = {item.id}>
                    <a>
                      <div className="media">
                        <span className="avatar">
                          <img alt="" src={item.url} />
                        </span>
                        <div className="media-body">
                          <p className="noti-details"><span className="noti-title">Name</span> {item.employ_name}</p>
                          {/* <p className="noti-time"><span className="notification-time">Days {item.day}</span></p> */}
                          <p className="noti-details"><span onClick={(e)=>notificationCancle(item,e)} className="noti-title" >Email {item.employ_email}</span></p>
                        </div>
                      </div>
                    </a>
                  </li>
              ))
              }
              </ul>


              {
                conferenceNotification.length > 0 && <>
                <div style={{backgroundColor:"#bcc8ff"}} className="topnav-dropdown-header">
                <span className="notification-title">Conference</span>
                {/* <a href="" className="clear-noti"> Clear All </a> */}
              </div>
              <div className="noti-content">
              <ul className="notification-list">
              {conferenceNotification && conferenceNotification.map(item =>(
                <li className="notification-message" key = {item.id}>
                    <a>
                      <div className="media">
                        {/* <span className="avatar">
                          <img alt="" src={Avatar_02} />
                        </span> */}
                        <div className="media-body">
                          <p className="noti-details"><span className="noti-title">{item.purpose}</span> Start At {item.start_at}<span className="noti-title">Start At {item.last_at}</span></p>
                          <p className="noti-time"><span className="notification-time">Days {item.day}</span></p>
                          <p className="noti-details"><span onClick={(e)=>notificationCancle(item,e)} style = {{color: 'salmon'}} className="noti-title" >Clear Notification</span></p>
                        </div>
                      </div>
                    </a>
                  </li>
              ))
              }
              </ul>
              </div>
                </>
              }                          

              {taskNotification.length > 0  && <>
                <div style={{backgroundColor:"#bcc8ff"}} className="topnav-dropdown-header">
                <span  className="notification-title">Tasks</span>
                {/* <a href="" className="clear-noti"> Clear All </a> */}
              </div>
              <div className="noti-content">
              <ul className="notification-list">
              {taskNotification && taskNotification.map(item =>(
                <li className="notification-message" key = {item.id}>
                    <a>
                      <div className="media">
                        {/* <span className="avatar">
                          <img alt="" src={Avatar_02} />
                        </span> */}
                        <div className="media-body">
                          <p className="noti-details"><span className="noti-title">Type: {item.task_type}</span> Priority: {item.priority}<span className="noti-title"> Description {item.description}</span></p>
                          <p className="noti-time"><span className="notification-time">Deadline {item.deadline}</span></p>
                          <p className="noti-details"><span onClick={(e)=>taskNotificationCancle(item,e)} style = {{color: 'salmon'}} className="noti-title" >Clear Notification</span></p>
                        </div>
                      </div>
                    </a>
                  </li>
              ))
              }
              </ul>
              </div>
              </>
              }
              {
                projectNotification > 0 && <>
                <div style={{backgroundColor:"#bcc8ff"}} className="topnav-dropdown-header">
                <span className="notification-title">Projects</span>
                {/* <a href="" className="clear-noti"> Clear All </a> */}
              </div>
              <div className="noti-content">
              <ul className="notification-list">
              {projectNotification && projectNotification.map(item =>(
                <li className="notification-message" key = {item.id}>
                    <a>
                      <div className="media">
                        {/* <span className="avatar">
                          <img alt="" src={Avatar_02} />
                        </span> */}
                        <div className="media-body">
                          <p className="noti-details"><span className="noti-title">Name: {item.name}</span> Description {item.description}</p>
                          <p className="noti-details"><span onClick={(e)=>ProjectNotificationCancle(item,e)} style = {{color: 'salmon'}} >
                            Clear Notification
                            </span>
                          </p>
                        </div>
                      </div>
                    </a>
                  </li>
              ))
              }
              </ul>
              </div>
                </>
              }              
            </div>
          </li>
    
          {/* /Message Notifications */}
          <li className="nav-item dropdown has-arrow main-drop">
            <a href="#" className="dropdown-toggle nav-link" data-toggle="dropdown">
              <span className="user-img"><img src={Avatar_21} alt="" />
                <span className="status online" /></span>
              <span>Admin</span>
            </a>
            <div className="dropdown-menu">
              <a className="dropdown-item" href={path}>My Profile</a>
              <a className="dropdown-item" href="/login">Logout</a>
            </div>
          </li>
        </ul>
        {/* /Header Menu */}
        {/* Mobile Menu */}
        <div className="dropdown mobile-user-menu">
          <a href="#" className="nav-link dropdown-toggle" data-toggle="dropdown" aria-expanded="false"><i className="fa fa-ellipsis-v" /></a>
          <div className="dropdown-menu dropdown-menu-right">
            <a className="dropdown-item" href={path}>My Profile</a>
            <a className="dropdown-item" href="/login">Logout</a>
          </div>
        </div>
        {/* /Mobile Menu */}
      </div>
       
      );
}

export default withRouter(Header);