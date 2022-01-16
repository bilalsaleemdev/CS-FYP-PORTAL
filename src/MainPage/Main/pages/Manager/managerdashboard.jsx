/**
 * Signin Firebase
 */

 import React, { Component, useEffect, useState } from "react";
 import { Helmet } from "react-helmet";
 import { withRouter } from "react-router-dom";
 
 import {
   getUserById,
   getEmployeeUserAPI,
   getAllProject,
   getProjectEmployee,
   getAllTaskEmployee,
   getAllProgressOfEmployee,
   getUsersPendingRequestAPI,
   getManagerUser,
   getTaskApi,
   getUserProjectForTaskAPI
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
 
 import "../../../index.css";
 
 const ManagerDashboard = () => {
   const [ onlyMyProject,setOnlyMyProject] = useState();
   const [allPendingTaskCount, setAllPendingTaskCount] = useState();
   const [allTask, setAllTask] = useState();
   const [allProject, setAllProject] = useState();
   const [employeeName, setEmployeeName] = useState("");
   const [employeeUser, setEmployeeUser] = useState([]);
   const [employeeUserLength, setEmployeeUserLength] = useState();
   const [employeeProjectLength, setEmployeeProjectLength] = useState();
   const user_id_local = localStorage.getItem("user_id");
   const cancelTokenSource = axios.CancelToken.source();
   const [allNameChart, setAllNameChart] = useState("");
   const [countCompletedTask, setCountCompletedTask] = useState();
   const [countCompletedTaskPercentage, setCountCompletedTaskPercentage] =
     useState();
   const [countPendingTask, setCountPendingTask] = useState();
   const [countPendingTaskPercentage, setCountPendingTaskPercentage] =
     useState();
   const [countAllTask, setCountAllTask] = useState();
   const [progresUser, setProgressUser] = useState([]);
   const [prgressUserAvail, setPrgressUserAvail] = useState(false);
   const [topUser, setTopUser] = useState({});
   const [pendingsRequests, setPendingsRequests] = useState();
   const [allManagerUser, setAllManagerUser] = useState();
 
   useEffect(() => {
     getUserIdFromApi(user_id_local);
     getEmployeeUser();
     getAllManagerUser();
     getUserProject();
     getEmployeeAllTask();
     getAllProjectData();
     getAllPosition();
     getAllPendingRequests();
     getAllSystemTask();
     getUserProjectOnly();
   }, [user_id_local]);

  //  useEffect(() => {
    
  //  }, [count])
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
   const getAllPendingRequests = async () => {
     const res = await getUsersPendingRequestAPI(cancelTokenSource.token);
     let count = 0 ;

     res.data.forEach((el)=>{

       if(el.type == 'employee'){
         ++count;
       }
       else{
         return;
       }
       console.log('adfdasfasdf', count)

     })
     if (res) {
       
       setPendingsRequests(count);
     }
   };
 
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
     console.log("awais checking progress for chart", res.data);
     let nameChart = [];
     let compChart = [];
     let topRatedChart = [];
 
     res.data.forEach((el) => {
       nameChart.push(el.name);
       compChart.push(el.CompletedTasks);
       topRatedChart.push(el.FiveStars)
 
     });
 
     // setAllNameChart()
     console.log("raaaaazzi bhai", nameChart,compChart,topRatedChart);
 
     // let comma_seprated = editEmployee.join(",");
 
     if (res.success == true) {
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
       setProgressUser(res.data);
       setPrgressUserAvail(true);
       setTopUser(res.data[0]);
     }
   };
   const getUserProjectOnly = async () => {
    const response = await getUserProjectForTaskAPI(
      user_id_local,
      cancelTokenSource.token
    );
    if (response.success == true) {
      console.log('asdsadasdasdasdfg', response.data)
      setOnlyMyProject(response.data.length);
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
 
   const getAllProjectData = async () => {
     const response = await getAllProject(cancelTokenSource.token);
     if (response) {
       console.log("aaaa miral", response.data.length);
       setAllProject(response.data.length);
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
 
   const getAllSystemTask = async () => {
     console.log("12121212");
 
     const response = await getTaskApi(cancelTokenSource.token);
     console.log("awais checking task in all", response.data);
     if (response) {
       setAllTask(response.data.length);
 
       let pendTask = [];
       if (response.data.length) {
         response.data.forEach((item) => {
           if (item.task_status == 0) {
             pendTask.push(item);
             console.log("awais checking task innnn", pendTask);
           }
         });
       }
       setAllPendingTaskCount(pendTask.length);
     }
 
     // console.log(taskData, "awais data for all task");
   };
 
   const getAllManagerUser = async () => {
     const res = await getManagerUser(cancelTokenSource.token);
     if (res) {
       console.log("aaaaaaaaaaaaaaaaaaa", res);
       setAllManagerUser(res.data.length);
     }
   };
 
   return (
     <div className="page-wrapper">
       <Helmet>
         <title>Manager Dashboard</title>
         <meta name="description" content="Dashboard" />
       </Helmet>
       <div className="content container-fluid">
         {/* Page Header */}
         <div className="page-header">
           <div className="row">
             <div className="col-sm-12">
               <h3 className="page-title">Welcome {employeeName} </h3>
               <ul className="breadcrumb">
                 <li className="breadcrumb-item active">Manager Dashboard</li>
               </ul>
             </div>
           </div>
         </div>
         {/* /Page Header */}
 
         <div className="row">
           <div className="col-md-4 col-sm-6 col-lg-4 col-xl-4">
             <div className="card dash-widget">
               <div className="card-body">
                 <span className="dash-widget-icon">
                   <div
                     className="profile-img-wrap"
                     style={{
                       position: "inherit",
                       height: "83px",
                       overflow: "none",
                     }}
                   >
                     <img
                       style={{ height: "86px", width: "120px" }}
                       alt=""
                       src={topUser.image_url}
                     />
                   </div>
                 </span>
                 <div className="dash-widget-info">
                   <h4>{topUser.name}</h4>
                   <h5>{topUser.email}</h5>
                   <b>
                     <span>{`Employee Of the Month`}</span>
                   </b>
                 </div>
               </div>
             </div>
           </div>
 
           <div className="col-md-4 col-sm-4 col-lg-4 col-xl-4">
             <div className="card dash-widget">
               <div className="card-body">
                 <span className="dash-widget-icon">
                   <i className="fas fa-project-diagram" />
                 </span>
                 <div className="dash-widget-info">
                   <h3>{onlyMyProject && `${onlyMyProject}`}</h3>
                   <span>{`My Projects`}</span>
                 </div>
               </div>
             </div>
           </div>
           <div className="col-md-4 col-sm-4 col-lg-4 col-xl-4">
             <div className="card dash-widget">
               <div className="card-body">
                 <span className="dash-widget-icon">
                   <i className="fas fa-tasks" />
                 </span>
                 <div className="dash-widget-info">
                   <h3>{allTask}</h3>
                   <span>Total Tasks</span>
                 </div>
               </div>
             </div>
           </div>
         </div>
 
         {/**/}
         <div className="row">
           <div className="col-md-3 col-sm-3 col-lg-3 col-xl-3">
             <div className="card dash-widget">
               <div className="card-body">
                 <span className="dash-widget-icon">
                   <i className="fas fa-user-friends" />
                 </span>
                 <div className="dash-widget-info">
                   <h3>{employeeUserLength}</h3>
                   <span>Total Employees</span>
                 </div>
               </div>
             </div>
           </div>
 
           <div className="col-md-3 col-sm-3 col-lg-3 col-xl-3">
             <div className="card dash-widget">
               <div className="card-body">
                 <span className="dash-widget-icon">
                   <i className="fas fa-building" />
                 </span>
                 <div className="dash-widget-info">
                   <h3>{allProject}</h3>
                   <span>Company Projects</span>
                 </div>
               </div>
             </div>
           </div>
 
           <div className="col-md-3 col-sm-3 col-lg-3 col-xl-3">
             <div className="card dash-widget">
               <div className="card-body">
                 <span className="dash-widget-icon">
                   <i className="fas fa-user-plus" />
                 </span>
                 <div className="dash-widget-info">
                   <h3>{pendingsRequests}</h3>
                   <span>Account Requests</span>
                 </div>
               </div>
             </div>
           </div>
           <div className="col-md-3 col-sm-3 col-lg-3 col-xl-3">
             <div className="card dash-widget">
               <div className="card-body">
                 <span className="dash-widget-icon">
                   <i className="fas fa-code-branch" />
                 </span>
                 <div className="dash-widget-info">
                   <h3>{allPendingTaskCount}</h3>
                   <span>Pending Tasks</span>
                 </div>
               </div>
             </div>
           </div>
         </div>
 
         {}
         {/*
          <div className="row">
           <div className="col-md-12 col-sm-12 col-lg-12 col-xl-12">
             <div style={{paddingTop:'10px'}} className="card dash-widget">
             
             <h3 style={{justifyContent:'center', alignSelf:'center'}}>Employee Of the Month</h3>
               <div
                 style={{ display:'flex',justifyContent:'space-around'}}
                 className="card-body"
               >
                 <div >
                   <img
                     class="rounded-circle"
                     width="105"
                     height="85"
                     src={topUser.image_url}
                     alt="no image"
                   />
                   <h5 style={{ marginTop: "5px", marginBottom: "5px" }}>
                     {topUser.name}
                   </h5>
                 </div>
                 <div style={{justifyContent:'center', alignSelf:'center', alignItems:'center'}}className="dash-widget-info">
                   <h4 style={{justifyContent:'center', alignSelf:'center'}}>Level</h4>
                   <br />
                   <span>Email: {topUser.email}</span>
                   <br />
                   <span>No Of Comleted Task: {topUser.CompletedTasks}</span>
                   <br />
                   <span>No Of FiveStars Task: {topUser.FiveStars}</span>
                   <br />
                 </div>
                 <div className="dash-widget">
                   <span>Name: {topUser.name}</span>
                   <br />
                   <span>Email: {topUser.email}</span>
                   <br />
                   <span>No Of Comleted Task: {topUser.CompletedTasks}</span>
                   <br />
                   <span>No Of FiveStars Task: {topUser.FiveStars}</span>
                   <br />
                 </div>
               </div>
             </div>
           </div>
         </div>
 */}
 
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
                         <th>Five Star Tasks</th>
                       </tr>
                     </thead>
 
                     {prgressUserAvail
                       ? progresUser.map((item) => {
                           return (
                             <tbody>
                               <tr key={item.id}>
                                 {item.id == user_id_local ? (
                                   <td
                                     style={{
                                       backgroundColor: "#6699cc",
                                       color: "white",
                                     }}
                                   >
                                     ME {item.SerialNo}
                                   </td>
                                 ) : (
                                   <td>{item.SerialNo}</td>
                                 )}
                                 <td>
                                   <h2>{item.name}</h2>
                                 </td>
                                 <td>{item.email}</td>
                                 <td>{item.CompletedTasks}</td>
                                 <td>{item.FiveStars}</td>
                               </tr>
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
 
         {/* /Page Content */}
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
       </div>
     </div>
   );
 };
 
 export default withRouter(ManagerDashboard);
 