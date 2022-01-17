/**
 * Signin Firebase
 */

import React, { Component, useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { withRouter } from "react-router-dom";
import {
  getUserById,
  getEmployeeUserAPI,
  getProjectEmployee,
  getAllTaskEmployee,
  getAllProgressOfEmployee,
} from "../../../../api/network/customer/EmployeeApi";
import {
  User,
  Avatar_19,
  Avatar_07,
  Avatar_06,
  Avatar_14,
} from "../../../../Entryfile/imagepath";

import {
  BarChart,
  Bar,
  Cell,
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";
import axios, { CancelTokenSource } from "axios";
import { useHistory } from "react-router-dom";

import "../../../index.css";

const EmployeeDashboard = () => {
  const history = useHistory();
  const [topUser, setTopUser] = useState({});
  const [employeeName, setEmployeeName] = useState("");
  const [employeeUser, setEmployeeUser] = useState([]);
  const [employeeUserLength, setEmployeeUserLength] = useState();
  const [employeeProjectLength, setEmployeeProjectLength] = useState();
  const user_id_local = localStorage.getItem("user_id");
  const cancelTokenSource = axios.CancelToken.source();
  const [countCompletedTask, setCountCompletedTask] = useState();
  const [countCompletedTaskPercentage, setCountCompletedTaskPercentage] =
    useState();
  const [countPendingTask, setCountPendingTask] = useState();
  const [countPendingTaskPercentage, setCountPendingTaskPercentage] =
    useState();
  const [countAllTask, setCountAllTask] = useState();
  const [progresUser, setProgressUser] = useState([]);
  const [prgressUserAvail, setPrgressUserAvail] = useState(false);
  const [forProfile, setForProfile] = useState(false);
  const [widthProgress, setWidthProgress] = useState();
  // useEffect(() => {

  //   history.push("/app/main/dashboard/manager");
  // }, [])
  useEffect(() => {
    let temp = Math.round((countCompletedTask / countAllTask) * 100);
    setWidthProgress(temp);
  }, [countAllTask, countPendingTask, countCompletedTask]);

  useEffect(() => {
    getUserIdFromApi(user_id_local);
    getEmployeeUser();
    getUserProject();
    getAllPosition();
    getEmployeeAllTask();
  }, [user_id_local]);
  useEffect(() => {
    if (progresUser) {
      setPrgressUserAvail(true);
    }
  }, [progresUser]);
  useEffect(() => {
    getEmployeeUser;
  }, []);
  useEffect(() => {
    if (employeeUser) {
      let numOfEmployees;
      numOfEmployees = employeeUser.length;
      setEmployeeUserLength(numOfEmployees);
    }
  }, [employeeUser]);

  useEffect(() => {
    console.log("awais checking length p", progresUser);
  }, [employeeProjectLength, progresUser]);

  useEffect(() => {
    if (countAllTask) {
      let completedCountPercentage = Math.round(
        (countCompletedTask / countAllTask) * 100
      );
      setCountCompletedTaskPercentage(completedCountPercentage);
      let pendingTask = Math.round((countPendingTask / countAllTask) * 100);
      setCountPendingTaskPercentage(pendingTask);
    }
  }, [countAllTask, countPendingTask, countCompletedTask]);

  const getEmployeeAllTask = async () => {
    const res = await getAllTaskEmployee(
      user_id_local,
      cancelTokenSource.token
    );
    console.log("awais checking task", res.data);
    if (res.success == true) {
      setCountPendingTask(res.data.pending_task.length);
      setCountCompletedTask(res.data.completed_task.length);
      setCountAllTask(res.data.total_task.length);
    }
  };

  
  const getAllPosition = async () => {
    const res = await getAllProgressOfEmployee(cancelTokenSource.token);
    let nameChart = [];
    let compChart = [];
    let topRatedChart = [];

    res.data.forEach((el) => {
      nameChart.push(el.name);
      compChart.push(el.CompletedTasks);
      topRatedChart.push(el.FiveStars)

    });

    Highcharts.chart("container", {
      chart: {
        type: "column",
      },
      title: {
        text: "Progress Leaderboard",
      },

      xAxis: {
        categories:nameChart,
        crosshair: true,
      },
      yAxis: {
        min: 0,
        title: {
          text: "tasks",
        },
      },
      tooltip: {
        headerFormat:
          '<span style="font-size:10px">{point.key}</span><table>',
        pointFormat:
          '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
          '<td style="padding:0"><b>{point.y} </b></td></tr>',
        footerFormat: "</table>",
        shared: true,
        useHTML: true,
      },
      plotOptions: {
        column: {
          pointPadding: 0.2,
          borderWidth: 0,
        },
      },
      series: [
        {
          name: "Completed Tasks",
          data: compChart,
        },
        {
          name: "Top Rated Tasks",
          data: topRatedChart,
        },
      ],
    });

    console.log("awais checking progress", res.data[0]);
    if (res.success == true) {
      setProgressUser(res.data);
      setPrgressUserAvail(true);
      if (setTopUser(res.data[0])) {
        setTopUser(res.data[0]);
        setForProfile(true);
      }
    }



  };

  const getUserIdFromApi = async (user_id_local) => {
    console.log("12121212");

    const response = await getUserById(user_id_local, cancelTokenSource.token);
    console.log("my project user", response.user.type);

    setEmployeeName(response.user.name);

    // console.log(taskData, "awais data for all task");
  };

  const getEmployeeUser = async () => {
    const response = await getEmployeeUserAPI(cancelTokenSource.token);
    console.log("awais checking length 11", response);
    if (response.success == true) {
      setEmployeeUser(response.data);
      console.log("awais checking length 11", response);
    }
  };

  const getUserProject = async () => {
    console.log("12121212");

    const response = await getProjectEmployee(
      user_id_local,
      cancelTokenSource.token
    );
    console.log("awais checking project", response);

    if (response.success == true) {
      console.log("12121212");
      setEmployeeProjectLength(response.data.length);

      // console.log(taskData, "awais data for all task");
    }
    // console.log(taskData, "awais data for all task");
  };

  return (
    <div className="page-wrapper" style={{ minHeight: "706px" }}>
      <Helmet>
        <title>Employee Dashboard</title>
        <meta name="description" content="Dashboard" />
      </Helmet>
      <div className="content container-fluid">
        {/* Page Header */}
        <div className="page-header">
          <div className="row">
            <div className="col-sm-12">
              <h3 className="page-title">Welcome {employeeName} </h3>
              <ul className="breadcrumb">
                <li className="breadcrumb-item active">Employee Dashboard</li>
              </ul>
            </div>
          </div>
        </div>
        {/* /Page Header */}

        {forProfile && (
          <div className="row">
            <div className="col-md-6 col-sm-6 col-lg-6 col-xl-4">
              <div
                style={{
                  backgroundColor: "rgb(169 ,167, 198)",
                  color: "white",
                }}
                className="card dash-widget"
              >
                <div className="card-body">
                  <span className="dash-widget-icon">
                    <i style={{ color: "#6087aa" }} class="fas fa-medal"></i>
                  </span>
                  <div className="dash-widget-info">
                    <img
                      class="rounded-circle"
                      width="85"
                      height="55"
                      src={topUser.image_url}
                      alt="no image"
                    />
                    <h5 style={{ marginTop: "11px" }}>
                      <span stle={{ color: "white" }}>
                        {" "}
                        {`Current Employee Of The Month is ${topUser.name}`}
                      </span>
                    </h5>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-6 col-sm-6 col-lg-6 col-xl-4">
              <div className="card dash-widget">
                <div className="card-body">
                  <span className="dash-widget-icon">
                    <i style={{ color: "#6087aa" }} class="fas fa-medal"></i>
                  </span>
                  <div className="dash-widget-info">
                    <h3>Gold</h3>
                    <span>Your Current Level</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-sm-6 col-lg-6 col-xl-4">
              <div className="card dash-widget">
                <div className="card-body">
                  <span className="dash-widget-icon">
                    <i className="fa fa-user" />
                  </span>
                  <div className="dash-widget-info">
                    <h3>1</h3>
                    <span>Your Position</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
        {/**/}
        <div className="row">
          <div className="col-md-6 col-sm-6 col-lg-6 col-xl-3">
            <div className="card dash-widget">
              <div className="card-body">
                <span className="dash-widget-icon">
                  <i className="fas fa-project-diagram" />
                </span>
                <div className="dash-widget-info">
                  <h3>{employeeProjectLength}</h3>
                  <span>{`Projects`}</span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-sm-6 col-lg-6 col-xl-3">
            <div className="card dash-widget">
              <div className="card-body">
                <span className="dash-widget-icon">
                  <i className="fas fa-code-branch" />
                </span>
                <div className="dash-widget-info">
                  <h3>{countPendingTask}</h3>
                  <span>Pending Tasks</span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-sm-6 col-lg-6 col-xl-3">
            <div className="card dash-widget">
              <div className="card-body">
                <span className="dash-widget-icon">
                  <i className="fas fa-tasks" />
                </span>
                <div className="dash-widget-info">
                  <h3>{countCompletedTask}</h3>
                  <span>Completed Tasks</span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-sm-6 col-lg-6 col-xl-3">
            <div className="card dash-widget">
              <div className="card-body">
                <span className="dash-widget-icon">
                  <i className="fas fa-user-friends" />
                </span>
                <div className="dash-widget-info">
                  <h3>{employeeUserLength}</h3>
                  <span>Employees</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/**/}

        <div className="row">
          <div className="col-md-12 col-lg-12 col-xl-12 d-flex">
            <div className="card flex-fill">
              <div className="card-body">
                <h4 className="card-title">Task Statistics</h4>
                <div className="statistics">
                  <div className="row">
                    <div className="col-md-6 col-6 text-center">
                      <div className="stats-box mb-4">
                        <p>Total Tasks</p>
                        <h3>{countCompletedTask}</h3>
                      </div>
                    </div>
                    <div className="col-md-6 col-6 text-center">
                      <div className="stats-box mb-4">
                        <p>Overdue Tasks</p>
                        <h3>{countPendingTask}</h3>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="progress mb-2">
                  <div
                    className="progress-bar bg-purple"
                    role="progressbar"
                    style={{ width: "50%" }}
                    aria-valuenow={50}
                    aria-valuemin={0}
                    aria-valuemax={100}
                  >
                    {countCompletedTaskPercentage}%
                  </div>

                  <div
                    className="progress-bar bg-danger"
                    role="progressbar"
                    style={{ width: "50%" }}
                    aria-valuenow={14}
                    aria-valuemin={0}
                    aria-valuemax={`${countPendingTaskPercentage}`}
                  >
                    {countPendingTaskPercentage}%
                  </div>
                </div>
                <div>
                  <p>
                    <i className="fa fa-dot-circle-o text-purple mr-2" />
                    Completed Tasks{" "}
                    <span className="float-right">{countCompletedTask}</span>
                  </p>

                  <p>
                    <i className="fa fa-dot-circle-o text-danger mr-2" />
                    Pending Tasks{" "}
                    <span className="float-right">{countPendingTask}</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-md-12 col-lg-12 d-flex">
            <div className="card flex-fill">
              <div className="card-body">
                <h4 className="card-title">Progress Rate</h4>
                <span>
                <div
                    style={{ fontSize: "16px" }}
                    className="text-success float-right"
                  >
                    {" "}
                    {countAllTask > 0
                      ? Math.round((countCompletedTask / countAllTask) * 100)
                      : "0"}
                    %
                  </div></span>
                  
                
                <div
                  style={{
                    width: `100%`,
                    marginLeft: "-11px",
                    marginRight: "-17px",
                  }}
                  className="progress progress-xs mb-0"
                >
                  <div
                    className="progress-bar bg-success"
                    role="progressbar"
                    data-toggle="tooltip"
                    style={{
                      width: `${widthProgress}%`,
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* content for table
         */}
        <div className="row">
          <div className="col-md-12 d-flex">
            <div className="card card-table flex-fill">
              <div className="card-header">
                <h3 className="card-title mb-0">Employees Leaderboard</h3>
              </div>
              <div className="card-body">
                <div className="table-responsive">
                  <table className="table table-nowrap custom-table mb-0">
                    <thead>
                      <tr>
                        <th>Position</th>
                        <th>Name</th>
                        <th>Email Address</th>
                        <th>Completed Tasks</th>
                        <th>Five Tasks</th>
                      </tr>
                    </thead>

                    {prgressUserAvail
                      ? progresUser.map((item) => {
                          return (
                            <tbody>
                              {item.id == user_id_local ? (
                                <tr
                                  style={{
                                    backgroundColor: "#6699cc",
                                    color: "white",
                                  }}
                                >
                                <td>{item.SerialNo}</td>

                                <td>
                                  {item.name}
                                </td>
                                <td>{item.email}</td>
                                <td>{item.CompletedTasks}</td>
                                <td>{item.FiveStars}</td>
                                </tr>
                              ) : (
                                <tr>
                                  <td>{item.SerialNo}</td>

                                  <td>
                                    <h2>{item.name}</h2>
                                  </td>
                                  <td>{item.email}</td>
                                  <td>{item.CompletedTasks}</td>
                                  <td>{item.FiveStars}</td>
                                </tr>
                              )}
                            </tbody>
                          );
                        })
                      : null}
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
          {/** chart*/}
          <div className="row">
          <div className="col-md-12 d-flex">
            <div className="card card-table flex-fill">
              <div className="card-header">
                <h3 className="card-title mb-0">Progress Leaderboard</h3>
              </div>
              <div className="container" id="container"></div>
            </div>
          </div>
        </div>

        {/* /Page Content */}
      </div>
    </div>
  );
};

export default withRouter(EmployeeDashboard);
