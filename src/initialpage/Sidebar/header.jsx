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
  getEmployeeConferenceNotification,
} from "../../api/network/customer/EmployeeApi";
import { notification } from 'antd';
import { format } from 'date-fns';

function Header(props) {
    const cancelTokenSource = axios.CancelToken.source();
    const [countNotification, setCountNotification] = useState(0)
    const [conferenceNotification, setConferenceNotification] = useState([])
    useEffect(()=>{
      getNotificationConference()
    },[])
    
    const {  location } = props
    let pathname = location.pathname
    const type = localStorage.getItem("EmployeeType");
    const path = `/purple/app/profile/${type}-profile`;


    const getNotificationConference = async () =>{
      localStorage.getItem('user_id')
      let response = await getEmployeeConferenceNotification(localStorage.getItem('user_id'),cancelTokenSource.token);
      if (response.success == true) {
        setConferenceNotification(response.data)
        setCountNotification(response.data.length)
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
    
      return (
         <div className="header" style={{right:"0px"}}>
        {/* Logo */}
        <div className="header-left">
          <a href="/purple/app/main/dashboard" className="logo">
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
              <form action="/purple/app/pages/search">
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
              <div className="topnav-dropdown-header">
                <span className="notification-title">Notifications</span>
                {/* <a href="" className="clear-noti"> Clear All </a> */}
              </div>
              <div className="noti-content">
              <ul className="notification-list">
              {conferenceNotification && conferenceNotification.map(item =>(
                <li className="notification-message" key = {item.id}>
                    <div 
                    >
                      <div className="media">
                        <span className="avatar">
                          <img alt="" src={Avatar_02} />
                        </span>
                        <div className="media-body">
                          <p className="noti-details"><span className="noti-title">{item.purpose}</span> Start At {item.start_at}<span className="noti-title">Start At {item.last_at}</span></p>
                          <p className="noti-time"><span className="notification-time">Days {item.day}</span></p>
                          <p className="noti-details"><span onClick={(e)=>notificationCancle(item,e)} className="noti-title" >Clear Notification X</span></p>
                        </div>
                      </div>
                    </div>
                  </li>
              ))
              }
              </ul>
                
                  
                  {/* <li className="notification-message">
                    <a href="/purple/app/administrator/activities">
                      <div className="media">
                        <span className="avatar">
                          <img alt="" src={Avatar_03} />
                        </span>
                        <div className="media-body">
                          <p className="noti-details"><span className="noti-title">Tarah Shropshire</span> changed the task name <span className="noti-title">Appointment booking with payment gateway</span></p>
                          <p className="noti-time"><span className="notification-time">6 mins ago</span></p>
                        </div>
                      </div>
                    </a>
                  </li>
                  <li className="notification-message">
                    <a href="/purple/app/administrator/activities">
                      <div className="media">
                        <span className="avatar">
                          <img alt="" src={Avatar_06} />
                        </span>
                        <div className="media-body">
                          <p className="noti-details"><span className="noti-title">Misty Tison</span> added <span className="noti-title">Domenic Houston</span> and <span className="noti-title">Claire Mapes</span> to project <span className="noti-title">Doctor available module</span></p>
                          <p className="noti-time"><span className="notification-time">8 mins ago</span></p>
                        </div>
                      </div>
                    </a>
                  </li>
                  <li className="notification-message">
                    <a href="/purple/app/administrator/activities">
                      <div className="media">
                        <span className="avatar">
                          <img alt="" src={Avatar_17} />
                        </span>
                        <div className="media-body">
                          <p className="noti-details"><span className="noti-title">Rolland Webber</span> completed task <span className="noti-title">Patient and Doctor video conferencing</span></p>
                          <p className="noti-time"><span className="notification-time">12 mins ago</span></p>
                        </div>
                      </div>
                    </a>
                  </li>
                  <li className="notification-message">
                    <a href="/purple/app/administrator/activities">
                      <div className="media">
                        <span className="avatar">
                          <img alt="" src={Avatar_13} />
                        </span>
                        <div className="media-body">
                          <p className="noti-details"><span className="noti-title">Bernardo Galaviz</span> added new task <span className="noti-title">Private chat module</span></p>
                          <p className="noti-time"><span className="notification-time">2 days ago</span></p>
                        </div>
                      </div>
                    </a>
                  </li>
                </ul> */}
              </div>
              {/* <div className="topnav-dropdown-footer">
                <a href="/purple/app/administrator/activities">View all Notifications</a>
              </div> */}
            </div>
          </li>
          {/* /Notifications */}
          {/* Message Notifications */}
          {/* <li className="nav-item dropdown">
            <a href="#" className="dropdown-toggle nav-link" data-toggle="dropdown">
              <i className="fa fa-comment-o" /> <span className="badge badge-pill">8</span>
            </a>
            <div className="dropdown-menu notifications">
              <div className="topnav-dropdown-header">
                <span className="notification-title">Messages</span>
                <a href="" className="clear-noti"> Clear All </a>
              </div>
              <div className="noti-content">
                <ul className="notification-list">
                  <li className="notification-message">
                    <a href="/purple/conversation/chat">
                      <div className="list-item">
                        <div className="list-left">
                          <span className="avatar">
                            <img alt="" src={Avatar_09} />
                          </span>
                        </div>
                        <div className="list-body">
                          <span className="message-author">Richard Miles </span>
                          <span className="message-time">12:28 AM</span>
                          <div className="clearfix" />
                          <span className="message-content">Lorem ipsum dolor sit amet, consectetur adipiscing</span>
                        </div>
                      </div>
                    </a>
                  </li>
                  <li className="notification-message">
                    <a href="/purple/conversation/chat">
                      <div className="list-item">
                        <div className="list-left">
                          <span className="avatar">
                            <img alt="" src={Avatar_02} />
                          </span>
                        </div>
                        <div className="list-body">
                          <span className="message-author">John Doe</span>
                          <span className="message-time">6 Mar</span>
                          <div className="clearfix" />
                          <span className="message-content">Lorem ipsum dolor sit amet, consectetur adipiscing</span>
                        </div>
                      </div>
                    </a>
                  </li>
                  <li className="notification-message">
                    <a href="/purple/conversation/chat">
                      <div className="list-item">
                        <div className="list-left">
                          <span className="avatar">
                            <img alt="" src={Avatar_03} />
                          </span>
                        </div>
                        <div className="list-body">
                          <span className="message-author"> Tarah Shropshire </span>
                          <span className="message-time">5 Mar</span>
                          <div className="clearfix" />
                          <span className="message-content">Lorem ipsum dolor sit amet, consectetur adipiscing</span>
                        </div>
                      </div>
                    </a>
                  </li>
                  <li className="notification-message">
                    <a href="/purple/conversation/chat">
                      <div className="list-item">
                        <div className="list-left">
                          <span className="avatar">
                            <img alt="" src={Avatar_05} />
                          </span>
                        </div>
                        <div className="list-body">
                          <span className="message-author">Mike Litorus</span>
                          <span className="message-time">3 Mar</span>
                          <div className="clearfix" />
                          <span className="message-content">Lorem ipsum dolor sit amet, consectetur adipiscing</span>
                        </div>
                      </div>
                    </a>
                  </li>
                  <li className="notification-message">
                    <a href="/purple/conversation/chat">
                      <div className="list-item">
                        <div className="list-left">
                          <span className="avatar">
                            <img alt="" src={Avatar_08} />
                          </span>
                        </div>
                        <div className="list-body">
                          <span className="message-author"> Catherine Manseau </span>
                          <span className="message-time">27 Feb</span>
                          <div className="clearfix" />
                          <span className="message-content">Lorem ipsum dolor sit amet, consectetur adipiscing</span>
                        </div>
                      </div>
                    </a>
                  </li>
                </ul>
              </div>
              <div className="topnav-dropdown-footer">
                <a href="/purple/conversation/chat">View all Messages</a>
              </div>
            </div>
          </li> */}
          {/* /Message Notifications */}
          <li className="nav-item dropdown has-arrow main-drop">
            <a href="#" className="dropdown-toggle nav-link" data-toggle="dropdown">
              <span className="user-img"><img src={Avatar_21} alt="" />
                <span className="status online" /></span>
              <span>Admin</span>
            </a>
            <div className="dropdown-menu">
              <a className="dropdown-item" href={path}>My Profile</a>
              <a className="dropdown-item" href="/purple/login">Logout</a>
            </div>
          </li>
        </ul>
        {/* /Header Menu */}
        {/* Mobile Menu */}
        <div className="dropdown mobile-user-menu">
          <a href="#" className="nav-link dropdown-toggle" data-toggle="dropdown" aria-expanded="false"><i className="fa fa-ellipsis-v" /></a>
          <div className="dropdown-menu dropdown-menu-right">
            <a className="dropdown-item" href={path}>My Profile</a>
            <a className="dropdown-item" href="/purple/login">Logout</a>
          </div>
        </div>
        {/* /Mobile Menu */}
      </div>
       
      );
}

export default withRouter(Header);