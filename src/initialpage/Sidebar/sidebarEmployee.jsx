/**
 * App Header
 */
import React, { Component } from "react";
import { withRouter } from "react-router-dom";

class Sidebar extends Component {
  render() {
    const { location } = this.props;
    let pathname = location.pathname;
    return (
      <div className="sidebar" id="sidebar">
        <div className="sidebar-inner slimscroll">
          <div id="sidebar-menu" className="sidebar-menu">
            <ul>
              <li className="menu-title">
                <span>EMPLOYEE</span>
              </li>
              <li
                className={
                  pathname.includes("/app/main/dashboard/employee")
                    ? "active"
                    : ""
                }
              >
                <a href="/app/main/dashboard/employee">
                  <i className="la la-dashboard" /> <span>Dashboard</span>
                </a>
              </li>
              {/* <li className="submenu">
                 
                 <a href="#"><i className="la la-dashboard" /> <span> Dashboard</span> <span className="menu-arrow" /></a>
                 <ul style={{display: 'none'}}>
                   <li><a className={pathname.includes('main/dashboard') ?"active" :""} href="/app/main/dashboard">Admin Dashboard</a></li>
                   <li><a className={pathname.includes('main/employee-') ?"active" :""} href="/app/main/employee-dashboard">Employee Dashboard</a></li>
                 </ul>
               </li> */}

              {/* <li className="submenu">
                 <a href="#"><i className="la la-cube" /> <span> Apps</span> <span className="menu-arrow" /></a>
                 <ul style={{display: 'none'}}>
                   <li><a href="/conversation/chat">Chat</a></li>
                   <li className="submenu">
                     <a href="#"><span> Calls</span> <span className="menu-arrow" /></a>
                     <ul style={{display: 'none'}}>
                       <li><a href="/conversation/voice-call">Voice Call</a></li>
                       <li><a href="/conversation/video-call">Video Call</a></li>
                       <li><a href="/conversation/outgoing-call">Outgoing Call</a></li>
                       <li><a href="/conversation/incoming-call">Incoming Call</a></li>
                     </ul>
                   </li>
                   <li><a className={pathname.includes('apps/calendar') ?"active" :""} href="/app/apps/calendar">Calendar</a></li>
                   <li><a className={pathname.includes('contacts') ?"active" :""} href="/app/apps/contacts">Contacts</a></li>
                   <li><a href="/email/inbox">Email</a></li>
                   <li><a className={pathname.includes('file-manager') ?"active" :""} href="/app/apps/file-manager">File Manager</a></li>
                 </ul>
               </li> */}
              {/* <li className="menu-title"> 
                 <span>Employees</span>
               </li> */}
              <li className="submenu">
                <a href="#" className="noti-dot">
                  <i className="la la-user" /> <span> Projects</span>{" "}
                  <span className="menu-arrow" />
                </a>
                <ul style={{ display: "none" }}>
                  <li>
                    <a
                      className={
                        pathname.includes("allemployees")
                          ? "active"
                          : pathname.includes("employees-list")
                          ? "active"
                          : ""
                      }
                      href="/app/main/company_projects"
                    >
                      Company Projects
                    </a>
                  </li>
                  <li>
                    <a
                      className={pathname.includes("holidays") ? "active" : ""}
                      href="/app/main/employeemyprojects"
                    >
                      My Projects
                    </a>
                  </li>
                  {/* <li><a className={pathname.includes('es-admin') ?"active" :""} href="/app/employee/leaves-admin">Leaves (Admin) <span className="badge badge-pill bg-primary float-right">1</span></a></li>
                   <li><a className={pathname.includes('ves-employee') ?"active" :""} href="/app/employee/leaves-employee">Leaves (Employee)</a></li>
                   <li><a className={pathname.includes('e-settings') ?"active" :""} href="/app/employee/leave-settings">Leave Settings</a></li>
                   <li><a className={pathname.includes('nce-admin') ?"active" :""} href="/app/employee/attendance-admin">Attendance (Admin)</a></li>
                   <li><a className={pathname.includes('ce-employee') ?"active" :""} href="/app/employee/attendance-employee">Attendance (Employee)</a></li>
                   <li><a className={pathname.includes('departments') ?"active" :""} href="/app/employee/departments">Departments</a></li>
                   <li><a className={pathname.includes('designations') ?"active" :""} href="/app/employee/designations">Designations</a></li>
                   <li><a className={pathname.includes('timesheet') ?"active" :""} href="/app/employee/timesheet">Timesheet</a></li>
                   <li><a className={pathname.includes('shift-scheduling') || pathname.includes('shift-list') ?"active" :""} 
                         href="/app/employee/shift-scheduling">Shift &amp; Schedule</a></li>
                   <li><a className={pathname.includes('overtime') ?"active" :""} href="/app/employee/overtime">Overtime</a></li> */}
                </ul>
              </li>
              {/* <li className={pathname.includes('clients') ?"active" :""}> 
                 <a href="/app/employees/clients"><i className="la la-users" /> <span>Clients</span></a>
               </li> */}
              <li className="submenu">
                <a href="#">
                  <i className="la la-rocket" /> <span> Tasks</span>{" "}
                  <span className="menu-arrow" />
                </a>
                <ul style={{ display: "none" }}>
                  <li>
                    <a
                      className={
                        pathname.includes("t_dashboard")
                          ? "active"
                          : pathname.includes("projects-list")
                          ? "active"
                          : pathname.includes("cts-view")
                          ? "active"
                          : ""
                      }
                      href="/app/main/submit-task"
                    >
                      Pending Tasks
                    </a>
                  </li>
                  <li>
                    <a href="/app/main/completedTaskEmployee">Completed Tasks</a>
                  </li>
                </ul>
              </li>

            
           
              <li className={pathname.includes("activities") ? "active" : ""}>
                <a href="/app/main/feedback_completed_task">
                  <i className="la la-bell" /> <span>Feedbacks</span>
                </a>
              </li>
              <li
                className={
                  pathname.includes("administrator/users") ? "active" : ""
                }
              >
                <a href="/app/main/employeeworkshop">
                  <i className="la la-user-plus" /> <span>Workshops</span>
                </a>
              </li>
             
              {/* <li className="menu-title"> 
                 <span>Pages</span>
               </li> */}
              {/* <li className="submenu">
                 <a href="#"><i className="la la-user" /> <span> Profile </span> <span className="menu-arrow" /></a>
                 <ul style={{display: 'none'}}>
                   <li><a className={pathname.includes('profile/employee-') ?"active" :""} href="/app/profile/employee-profile"> Employee Profile </a></li>
                   <li><a className={pathname.includes('client-') ?"active" :""} href="/app/profile/client-profile"> Client Profile </a></li>
                 </ul>
               </li>
               <li className="submenu">
                 <a href="#"><i className="la la-key" /> <span> Authentication </span> <span className="menu-arrow" /></a>
                 <ul style={{display: 'none'}}>
                   <li><a href="/login"> Login </a></li>
                   <li><a href="/register"> Register </a></li>
                   <li><a href="/forgotpassword"> Forgot Password </a></li>
                   <li><a href="/otp"> OTP </a></li>
                   <li><a href="/lockscreen"> Lock Screen </a></li>
                 </ul>
               </li>
               <li className="submenu">
                 <a href="#"><i className="la la-exclamation-triangle" /> <span> Error Pages </span> <span className="menu-arrow" /></a>
                 <ul style={{display: 'none'}}>
                   <li><a href="/error-404">404 Error </a></li>
                   <li><a href="/error-500">500 Error </a></li>
                 </ul>
               </li>
               <li className="submenu">
                 <a href="#"><i className="la la-hand-o-up" /> <span> Subscriptions </span> <span className="menu-arrow" /></a>
                 <ul style={{display: 'none'}}>
                   <li><a className={pathname.includes('subscriptionadmin') ?"active" :""} href="/app/subscription/subscriptionadmin"> 
                   Subscriptions (Admin) </a></li>
                   <li><a className={pathname.includes('subscriptioncompany') ?"active" :""} href="/app/subscription/subscriptioncompany">
                      Subscriptions (Company) </a></li>
                   <li><a className={pathname.includes('subscribedcompanies') ?"active" :""} href="/app/subscription/subscribedcompanies">
                      Subscribed Companies</a></li>
                 </ul>
               </li>
               <li className="submenu">
                 <a href="#"><i className="la la-columns" /> <span> Pages </span> <span className="menu-arrow" /></a>
                 <ul style={{display: 'none'}}>
                   <li><a className={pathname.includes('pages/search') ?"active" :""} href="/app/pages/search"> Search </a></li>
                   <li><a className={pathname.includes('pages/faq') ?"active" :""} href="/app/pages/faq"> FAQ </a></li>
                   <li><a className={pathname.includes('pages/terms') ?"active" :""} href="/app/pages/terms"> Terms </a></li>
                   <li><a className={pathname.includes('privacypolicy') ?"active" :""} href="/app/pages/privacypolicy"> Privacy Policy </a></li>
                   <li><a className={pathname.includes('pages/blank') ?"active" :""} href="/app/pages/blank"> Blank Page </a></li>
                 </ul>
               </li>
               <li className="menu-title"> 
                 <span>UI Interface</span>
               </li>
               <li> 
                 <a href="/ui-components"><i className="la la-puzzle-piece" /> <span>Components</span></a>
               </li>
               <li className="submenu">
                 <a href="#"><i className="la la-object-group" /> <span> Forms </span> <span className="menu-arrow" /></a>
                 <ul style={{display: 'none'}}>
                   <li><a className={pathname.includes('basicinputs') ?"active" :""}
                       href="/app/ui-interface/forms/basicinputs">Basic Inputs </a></li>
                   <li><a className={pathname.includes('inputgroups') ?"active" :""} 
                       href="/app/ui-interface/forms/inputgroups">Input Groups </a></li>
                   <li><a className={pathname.includes('horizontalform') ?"active" :""}
                      href="/app/ui-interface/forms/horizontalform">Horizontal Form </a></li>
                   <li><a className={pathname.includes('verticalform') ?"active" :""} 
                     href="/app/ui-interface/forms/verticalform"> Vertical Form </a></li>
                   <li><a className={pathname.includes('formmask') ?"active" :""}
                       href="/app/ui-interface/forms/formmask"> Form Mask </a></li>
                   <li><a className={pathname.includes('formvalidation') ?"active" :""}
                       href="/app/ui-interface/forms/formvalidation"> Form Validation </a></li>
                 </ul>
               </li>
               <li className="submenu">
                 <a href="/app/ui-interface/tables/basic"><i className="la la-table" /> <span> Tables </span> <span className="menu-arrow" /></a>
                 <ul style={{display: 'none'}}>
                   <li><a className={pathname.includes('tables/basic') ?"active" :""} href="/app/ui-interface/tables/basic">Basic Tables </a></li>
                   <li><a className={pathname.includes('tables/data-table') ?"active" :""} href="/app/ui-interface/tables/data-table">Data Table </a></li>
                 </ul>
               </li> */}
              {/* <li className="menu-title"> 
                 <span>Extras</span>
               </li>
               <li> 
                 <a href="#"><i className="la la-file-text" /> <span>Documentation</span></a>
               </li>
               <li> 
                 <a href=""><i className="la la-info" /> <span>Change Log</span> <span className="badge badge-primary ml-auto">v3.4</span></a>
               </li>
               <li className="submenu">
                 <a href=""><i className="la la-share-alt" /> <span>Multi Level</span> <span className="menu-arrow" /></a>
                 <ul style={{display: 'none'}}>
                   <li className="submenu">
                     <a href=""> <span>Level 1</span> <span className="menu-arrow" /></a>
                     <ul style={{display: 'none'}}>
                       <li><a href=""><span>Level 2</span></a></li>
                       <li className="submenu">
                         <a href=""> <span> Level 2</span> <span className="menu-arrow" /></a>
                         <ul style={{display: 'none'}}>
                           <li><a href="">Level 3</a></li>
                           <li><a href="">Level 3</a></li>
                         </ul>
                       </li>
                       <li><a href=""> <span>Level 2</span></a></li>
                     </ul>
                   </li>
                   <li>
                     <a href=""> <span>Level 1</span></a>
                   </li>
                 </ul>
               </li> */}
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(Sidebar);
