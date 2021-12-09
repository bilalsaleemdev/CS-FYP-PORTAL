/**
 * App Header
 */
import React, { Component, useEffect, useState } from "react";
import { withRouter } from "react-router-dom";
import {
  headerlogo,
  lnEnglish,
  lnFrench,
  lnSpanish,
  lnGerman,
  Avatar_02,
  Avatar_03,
  Avatar_05,
  Avatar_06,
  Avatar_08,
  Avatar_09,
  Avatar_13,
  Avatar_17,
  Avatar_21,
} from "../../Entryfile/imagepath";
import axios, { CancelTokenSource } from "axios";
import {
  conferenceUpdate,
  getUserById,
  getEmployeeOfTheMonth,
  getEmployeeConferenceNotification,
  getEmployeeTaskNotification,
  taskConferenceUpdate,
  getEmployeeProjectNotification,
  projectConferenceUpdate,
} from "../../api/network/customer/EmployeeApi";
import { notification } from "antd";
import { format } from "date-fns";
import { purple } from "@material-ui/core/colors";

function Header(props) {
  const cancelTokenSource = axios.CancelToken.source();
  const [countNotification, setCountNotification] = useState(0);
  const [conferenceNotification, setConferenceNotification] = useState([]);
  const [taskNotification, setTaskNotification] = useState([]);
  const [projectNotification, setProjectNotification] = useState([]);
  const [topEmployee, setTopEmployee] = useState([]);
  const [userType, setUserType] = useState();
  const [userName, setUserName] = useState();
  const [imageUrl, setImageUrl] = useState();

  const user_id_local = localStorage.getItem("user_id");
  useEffect(() => {
    getNotificationConference(),
      getTopEmployee(),
      getNotificationTask(),
      getNotificationProject();
  }, []);

  useEffect(() => {
    getUserIdFromApi(user_id_local);
  }, [user_id_local]);
  const { location } = props;
  let pathname = location.pathname;
  const type = localStorage.getItem("EmployeeType");
  const path = `/app/profile/${type}-profile`;
  //for header
  const getUserIdFromApi = async (user_id_local) => {
    console.log("12121212");

    const response = await getUserById(user_id_local, cancelTokenSource.token);
    console.log("my project user", response.user.type);
    setUserType(response.user.type);
    setUserName(response.user.name);
    setImageUrl(response.user.image_url);

    if (response.success == true) {
      console.log("awais ch", response.user.type);

      // setImageCondition(response.user.image_url);
      // setNameCeo(response.user.type);
      // console.log(taskData, "awais data for all task");
    }
    // console.log(taskData, "awais data for all task");
  };

  const getNotificationProject = async () => {
    let response = await getEmployeeProjectNotification(
      localStorage.getItem("user_id"),
      cancelTokenSource.token
    );
    if (response.success == true) {
      setProjectNotification(response.data);
      // setCountNotification(response.data.length)
    }
  };
  const getNotificationTask = async () => {
    let response = await getEmployeeTaskNotification(
      localStorage.getItem("user_id"),
      cancelTokenSource.token
    );
    if (response.success == true) {
      setTaskNotification(response.data);
      // setCountNotification(response.data.length)
    }
  };
  const getNotificationConference = async () => {
    localStorage.getItem("user_id");
    let response = await getEmployeeConferenceNotification(
      localStorage.getItem("user_id"),
      cancelTokenSource.token
    );
    if (response.success == true) {
      setConferenceNotification(response.data);
      setCountNotification(response.data.length);
    }
  };
  const getTopEmployee = async () => {
    let response = await getEmployeeOfTheMonth(cancelTokenSource.token);
    if (response.success == true) {
      setTopEmployee([response.data[0]]);
    }
  };
  const notificationCancle = async (item, e) => {
    let users_conference_sceen = [];
    // console.log('users_conference_sceen::',users_conference_sceen)
    let myArr = [];
    if (item.notifications) {
      myArr = item.notifications.split(",");
      myArr.forEach((element) => {
        users_conference_sceen.push(element);
      });
    }
    users_conference_sceen.push(localStorage.getItem("user_id") + "");
    console.log("users_conference_sceen::", users_conference_sceen);
    let data = {
      day: item.day,
      url: item.url,
      start_at: format(new Date(item.start_at), "yyyy-MM-dd"),
      last_at: format(new Date(item.last_at), "yyyy-MM-dd"),
      purpose: item.purpose,
      notifications: users_conference_sceen.toString(),
    };
    let response = await conferenceUpdate(
      item.id,
      data,
      cancelTokenSource.token
    );
    if (response.success == true) {
      window.location.reload(true);
    } else {
      console.log(response);
    }
  };

  const taskNotificationCancle = async (item, e) => {
    let data = {
      project_id: item.project_id,
      employee_id: item.employee_id,
      deadline: format(new Date(item.deadline), "yyyy-MM-dd"),
      task_type: item.task_type,
      priority: item.priority,
      rating: item.rating,
      task_status: item.task_status,
      notifications: 0,
    };
    console.log(data);
    let response = await taskConferenceUpdate(
      item.id,
      data,
      cancelTokenSource.token
    );
    if (response.success == true) {
      window.location.reload(true);
    } else {
      console.log(response);
    }
  };

  const ProjectNotificationCancle = async (item, e) => {
    let users_conference_sceen = [];
    // console.log('users_conference_sceen::',users_conference_sceen)
    let myArr = [];
    if (item.notifications) {
      myArr = item.notifications.split(",");
      myArr.forEach((element) => {
        users_conference_sceen.push(element);
      });
    }
    users_conference_sceen.push(localStorage.getItem("user_id") + "");

    let data = {
      name: item.name,
      user_id: item.user_id,
      start_at: format(new Date(item.start_at), "yyyy-MM-dd"),
      end_at: format(new Date(item.end_at), "yyyy-MM-dd"),
      team_member: item.team_member,
      description: item.description,
      notifications: users_conference_sceen.toString(),
    };
    console.log(data);
    let response = await projectConferenceUpdate(
      item.id,
      data,
      cancelTokenSource.token
    );
    if (response.success == true) {
      window.location.reload(true);
    } else {
      console.log(response);
    }
  };

  return (
    <div className="header" style={{ right: "0px" }}>
      {/* Logo */}
      <div className="header-left">
        <a href="/app/main/dashboard" className="logo">
          <img src={headerlogo} width={40} height={40} alt="" />
        </a>
      </div>
      {/* /Logo */}
      <a
        id="toggle_btn"
        href=""
        style={{
          display: pathname.includes("tasks")
            ? "none"
            : pathname.includes("compose")
            ? "none"
            : "",
        }}
      >
        <span className="bar-icon">
          <span />
          <span />
          <span />
        </span>
      </a>
      {/* Header Title */}
      <div className="page-title-box">
        <h3>Gamified Employee Portal</h3>
      </div>
      {/* /Header Title */}
      <a id="mobile_btn" className="mobile_btn" href="#sidebar">
        <i className="fa fa-bars" />
      </a>
      {/* Header Menu */}
      <ul className="nav user-menu">
        {/* Notifications */}
        {userType != "ceo" && userType != "manager" ? (
          <li className="nav-item dropdown">
            <a
              href="#"
              className="dropdown-toggle nav-link"
              data-toggle="dropdown"
            >
              <i className="fa fa-bell-o" />{" "}
              <span className="badge badge-pill">{countNotification}</span>
            </a>
            <div className="dropdown-menu notifications">
              <div
                style={{ backgroundColor: "#bcc8ff" }}
                className="topnav-dropdown-header"
              >
                <span className="notification-title">
                  Employee Of The Month
                </span>
                {/* <a href="" className="clear-noti"> Clear All </a> */}
              </div>
              </div>
              </li>
              ) :
              (<div> </div>) 
            }
          
       

        {/* /Message Notifications */}
        <li className="nav-item dropdown has-arrow main-drop">
          <a
            href="#"
            className="dropdown-toggle nav-link"
            data-toggle="dropdown"
          >
            <span className="user-img">
              {imageUrl == null ? (
                <img src={Avatar_21} alt="" />
              ) : (
                <img src={imageUrl} alt="" />
              )}
              <span className="status online" />
            </span>
            <span>{`${userName}`}</span>
          </a>
          <div className="dropdown-menu">
            <a className="dropdown-item" href={path}>
              My Profile
            </a>
            <a className="dropdown-item" href="/login">
              Logout
            </a>
          </div>
        </li>
      </ul>
      {/* /Header Menu */}
      {/* Mobile Menu */}
      <div className="dropdown mobile-user-menu">
        <a
          href="#"
          className="nav-link dropdown-toggle"
          data-toggle="dropdown"
          aria-expanded="false"
        >
          <i className="fa fa-ellipsis-v" />
        </a>
        <div className="dropdown-menu dropdown-menu-right">
          <a className="dropdown-item" href={path}>
            My Profile
          </a>
          <a className="dropdown-item" href="/login">
            Logout
          </a>
        </div>
      </div>
      {/* /Mobile Menu */}
    </div>
  );
}

export default withRouter(Header);
