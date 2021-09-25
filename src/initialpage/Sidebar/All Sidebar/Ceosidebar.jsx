/**
 * App Header
 */
import React, { Component } from "react";
import { withRouter } from "react-router-dom";


const CeoSidebar = (props) => {
  

  const { location } = props;
  console.log('location', location);
  let pathname = location.pathname;
  return (
    <div className="sidebar" id="sidebar">
      <div className="sidebar-inner slimscroll">
        <div id="sidebar-menu" className="sidebar-menu">
          <ul>
            <li className="menu-title">
              <span>Main</span>
            </li>
            <li
              className={pathname.includes("main/dashboard") ? "active" : ""}
            >
              <a href="/purple/app/main/dashboard/ceo">
                <i className="la la-dashboard" /> <span>Ceo Dashboard</span>
              </a>
            </li>
            {/* <li className="submenu">
               
               <a href="#"><i className="la la-dashboard" /> <span> Dashboard</span> <span className="menu-arrow" /></a>
               <ul style={{display: 'none'}}>
                 <li><a className={pathname.includes('main/dashboard') ?"active" :""} href="/purple/app/main/dashboard">Admin Dashboard</a></li>
                 <li><a className={pathname.includes('main/employee-') ?"active" :""} href="/purple/app/main/employee-dashboard">Employee Dashboard</a></li>
               </ul>
             </li> */}

            <li className="submenu">
              <a href="#">
                <i className="la la-key" />
                <span> Approve Request</span> <span className="menu-arrow" />
              </a>
              <ul style={{ display: "none" }}>
                <li>
                  <a
                    className={
                      pathname.includes("/main/approve-request")
                        ? "active"
                        : ""
                    }
                    href="/purple/app/main/approve-request"
                  >
                  Requests
                  </a>
                </li>
                {/*       <li><a className={pathname.includes('main/employee-') ?"active" :""} href="/purple/app/main/employee-dashboard">Approve Request</a></li>
                 */}
              </ul>
            </li>

            {/* <li className="submenu">
               <a href="#"><i className="la la-cube" /> <span> Apps</span> <span className="menu-arrow" /></a>
               <ul style={{display: 'none'}}>
                 <li><a href="/purple/conversation/chat">Chat</a></li>
                 <li className="submenu">
                   <a href="#"><span> Calls</span> <span className="menu-arrow" /></a>
                   <ul style={{display: 'none'}}>
                     <li><a href="/purple/conversation/voice-call">Voice Call</a></li>
                     <li><a href="/purple/conversation/video-call">Video Call</a></li>
                     <li><a href="/purple/conversation/outgoing-call">Outgoing Call</a></li>
                     <li><a href="/purple/conversation/incoming-call">Incoming Call</a></li>
                   </ul>
                 </li>
                 <li><a className={pathname.includes('apps/calendar') ?"active" :""} href="/purple/app/apps/calendar">Calendar</a></li>
                 <li><a className={pathname.includes('contacts') ?"active" :""} href="/purple/app/apps/contacts">Contacts</a></li>
                 <li><a href="/purple/email/inbox">Email</a></li>
                 <li><a className={pathname.includes('file-manager') ?"active" :""} href="/purple/app/apps/file-manager">File Manager</a></li>
               </ul>
             </li> */}
            {/* <li className="menu-title"> 
               <span>Employees</span>
             </li> */}
            <li className="submenu">
              <a href="#" className="noti-dot">
                <i className="la la-user" /> <span> Employees</span>{" "}
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
                    href="/purple/app/employee/allemployees"
                  >
                    All Employees
                  </a>
                </li>
                <li>
                  <a
                    className={pathname.includes("holidays") ? "active" : ""}
                    href="/purple/app/employee/holidays"
                  >
                    Employees Progress
                  </a>
                </li>
                {/* <li><a className={pathname.includes('es-admin') ?"active" :""} href="/purple/app/employee/leaves-admin">Leaves (Admin) <span className="badge badge-pill bg-primary float-right">1</span></a></li>
                 <li><a className={pathname.includes('ves-employee') ?"active" :""} href="/purple/app/employee/leaves-employee">Leaves (Employee)</a></li>
                 <li><a className={pathname.includes('e-settings') ?"active" :""} href="/purple/app/employee/leave-settings">Leave Settings</a></li>
                 <li><a className={pathname.includes('nce-admin') ?"active" :""} href="/purple/app/employee/attendance-admin">Attendance (Admin)</a></li>
                 <li><a className={pathname.includes('ce-employee') ?"active" :""} href="/purple/app/employee/attendance-employee">Attendance (Employee)</a></li>
                 <li><a className={pathname.includes('departments') ?"active" :""} href="/purple/app/employee/departments">Departments</a></li>
                 <li><a className={pathname.includes('designations') ?"active" :""} href="/purple/app/employee/designations">Designations</a></li>
                 <li><a className={pathname.includes('timesheet') ?"active" :""} href="/purple/app/employee/timesheet">Timesheet</a></li>
                 <li><a className={pathname.includes('shift-scheduling') || pathname.includes('shift-list') ?"active" :""} 
                       href="/purple/app/employee/shift-scheduling">Shift &amp; Schedule</a></li>
                 <li><a className={pathname.includes('overtime') ?"active" :""} href="/purple/app/employee/overtime">Overtime</a></li> */}
              </ul>
            </li>
            {/* <li className={pathname.includes('clients') ?"active" :""}> 
               <a href="/purple/app/employees/clients"><i className="la la-users" /> <span>Clients</span></a>
             </li> */}
            <li className="submenu">
              <a href="#">
                <i className="la la-rocket" /> <span> Projects</span>{" "}
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
                    href="/purple/app/projects/project_dashboard"
                  >
                    Projects
                  </a>
                </li>
                <li>
                  <a href="/purple/tasks/tasks">Tasks</a>
                </li>
                <li>
                  <a
                    className={
                      pathname.includes("task-board") ? "active" : ""
                    }
                    href="/purple/app/projects/task-board"
                  >
                    Task Board
                  </a>
                </li>
              </ul>
            </li>
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
                    href="/purple/app/projects/project_dashboard"
                  >
                    Projects
                  </a>
                </li>
                <li>
                  <a href="/purple/tasks/tasks">Tasks</a>
                </li>
                <li>
                  <a
                    className={
                      pathname.includes("task-board") ? "active" : ""
                    }
                    href="/purple/app/projects/task-board"
                  >
                    Task Board
                  </a>
                </li>
              </ul>
            </li>
            {/* <li className={pathname.includes('leads') ?"active" :""}> 
               <a href="/purple/app/employees/leads"><i className="la la-user-secret" /> <span>Leads</span></a>
             </li>
             <li className={pathname.includes('tickets') ?"active" :""}> 
               <a href="/purple/app/employees/tickets"><i className="la la-ticket" /> <span>Tickets</span></a>
             </li> */}
            {/* <li className="menu-title"> 
               <span>HR</span>
             </li>
             <li className="submenu">
               <a href="#"><i className="la la-files-o" /> <span> Sales </span> <span className="menu-arrow" /></a>
               <ul style={{display: 'none'}}>
                 <li><a className={pathname.includes('estimates') ?"active" :""} href="/purple/app/sales/estimates">Estimates</a></li>
                 <li><a className={pathname.includes('invoices') ?"active" :""} href="/purple/app/sales/invoices">Invoices</a></li>
                 <li><a className={pathname.includes('payments') ?"active" :""} href="/purple/app/sales/payments">Payments</a></li>
                 <li><a className={pathname.includes('expenses') ?"active" :""} href="/purple/app/sales/expenses">Expenses</a></li>
                 <li><a className={pathname.includes('provident-fund') ?"active" :""} href="/purple/app/sales/provident-fund">Provident Fund</a></li>
                 <li><a className={pathname.includes('taxes') ?"active" :""} href="/purple/app/sales/taxes">Taxes</a></li>
               </ul>
             </li>
             <li className="submenu">
               <a href="#"><i className="la la-files-o" /> <span> Accounting </span> <span className="menu-arrow" /></a>
               <ul style={{display: 'none'}}>
                 <li><a className={pathname.includes('categories') || pathname.includes('sub-category') ?"active" :""} href="/purple/app/accounts/categories">Categories</a></li>
                 <li><a className={pathname.includes('budgets') ?"active" :""} href="/purple/app/accounts/budgets">Budgets</a></li>
                 <li><a className={pathname.includes('budget-expenses') ?"active" :""} href="/purple/app/accounts/budget-expenses">Budget Expenses</a></li>
                 <li><a className={pathname.includes('budget-revenues') ?"active" :""} href="/purple/app/accounts/budget-revenues">Budget Revenues</a></li>
               </ul>
             </li>
             <li className="submenu">
               <a href="#"><i className="la la-money" /> <span> Payroll </span> <span className="menu-arrow" /></a>
               <ul style={{display: 'none'}}>
                 <li><a className={pathname.includes('_salary') ?"active" :""} href="/purple/app/payroll/_salary"> Employee Salary </a></li>
                 <li><a className={pathname.includes('y-view') ?"active" :""} href="/purple/app/payroll/salary-view"> Payslip </a></li>
                 <li><a className={pathname.includes('payroll-items') ?"active" :""} href="/purple/app/payroll/payroll-items"> Payroll Items </a></li>
               </ul>
             </li>
             <li className={pathname.includes('policies') ?"active" :""}> 
               <a href="/purple/app/hr/policies"><i className="la la-file-pdf-o" /> <span>Policies</span></a>
             </li>
             <li className="submenu">
               <a href="#"><i className="la la-pie-chart" /> <span> Reports </span> <span className="menu-arrow" /></a>
               <ul style={{display: 'none'}}>
                 <li><a className={pathname.includes('expense-') ?"active" :""} href="/purple/app/reports/expense-reports"> Expense Report </a></li>
                 <li><a className={pathname.includes('invoice-') ?"active" :""} href="/purple/app/reports/invoice-reports"> Invoice Report </a></li>
                 <li><a className={pathname.includes('payments-') ?"active" :""} href="/purple/app/reports/payments-reports"> Payments Report </a></li>
                 <li><a className={pathname.includes('project-') ?"active" :""} href="/purple/app/reports/project-reports"> Project Report </a></li>
                 <li><a className={pathname.includes('task-') ?"active" :""} href="/purple/app/reports/task-reports"> Task Report </a></li>
                 <li><a className={pathname.includes('user-') ?"active" :""} href="/purple/app/reports/user-reports"> User Report </a></li>
                 <li><a className={pathname.includes('employee-') ?"active" :""} href="/purple/app/reports/employee-reports"> Employee Report </a></li>
                 <li><a className={pathname.includes('payslip-') ?"active" :""} href="/purple/app/reports/payslip-reports"> Payslip Report </a></li>
                 <li><a className={pathname.includes('attendance-') ?"active" :""} href="/purple/app/reports/attendance-reports"> Attendance Report </a></li>
                 <li><a className={pathname.includes('leave-') ?"active" :""} href="/purple/app/reports/leave-reports"> Leave Report </a></li>
                 <li><a className={pathname.includes('daily-') ?"active" :""} href="/purple/app/reports/daily-reports"> Daily Report </a></li>
               </ul>
             </li>
             <li className="menu-title"> 
               <span>Performance</span>
             </li>
             <li className="submenu">
               <a href="#"><i className="la la-graduation-cap" /> <span> Performance </span> <span className="menu-arrow" /></a>
               <ul style={{display: 'none'}}>
                 <li><a className={pathname.includes('-indicator') ?"active" :""} href="/purple/app/performances/performance-indicator"> Performance Indicator </a></li>
                 <li><a className={pathname.includes('-review') ?"active" :""} href="/purple/app/performances/performance-review"> Performance Review </a></li>
                 <li><a className={pathname.includes('-appraisal') ?"active" :""} href="/purple/app/performances/performance-appraisal"> Performance Appraisal </a></li>
               </ul>
             </li>
             <li className="submenu">
               <a href="#"><i className="la la-crosshairs" /> <span> Goals </span> <span className="menu-arrow" /></a>
               <ul style={{display: 'none'}}>
                 <li><a className={pathname.includes('-tracking') ?"active" :""} href="/purple/app/goals/goal-tracking"> Goal List </a></li>
                 <li><a className={pathname.includes('l-type') ?"active" :""} href="/purple/app/goals/goal-type"> Goal Type </a></li>
               </ul>
             </li>
             <li className="submenu">
               <a href="#"><i className="la la-edit" /> <span> Training </span> <span className="menu-arrow" /></a>
               <ul style={{display: 'none'}}>
                 <li><a className={pathname.includes('training-list') ?"active" :""} href="/purple/app/training/training-list"> Training List </a></li>
                 <li><a className={pathname.includes('trainer') ?"active" :""} href="/purple/app/training/trainer"> Trainers</a></li>
                 <li><a className={pathname.includes('training-type') ?"active" :""} href="/purple/app/training/training-type"> Training Type </a></li>
               </ul>
             </li>
             <li className={pathname.includes('promotion') ?"active" :""}><a href="/purple/app/performance/promotion"><i className="la la-bullhorn" /> <span>Promotion</span></a></li>
             <li className={pathname.includes('resignation') ?"active" :""}><a href="/purple/app/performance/resignation"><i className="la la-external-link-square" /> <span>Resignation</span></a></li>
             <li className={pathname.includes('termination') ?"active" :""}><a href="/purple/app/performance/termination"><i className="la la-times-circle" /> <span>Termination</span></a></li> */}
            <li className="menu-title">
              <span>Administration</span>
            </li>
            {/* <li className={pathname.includes('assets') ?"active" :""}> 
               <a href="/purple/app/administrator/assets"><i className="la la-object-ungroup" /> <span>Assets</span></a>
             </li>
             <li className="submenu">
               <a href="#"><i className="la la-briefcase" /> <span> Jobs </span> <span className="menu-arrow" /></a>
               <ul style={{display: 'none'}}>
                 <li><a className={pathname.includes('user-dashboard') || pathname.includes('user-all-jobs')|| pathname.includes('saved-jobs')
                     || pathname.includes('applied-jobs')|| pathname.includes('interviewing')|| pathname.includes('offered-jobs')|| 
                     pathname.includes('visited-jobs') || pathname.includes('archived-jobs')
                     || pathname.includes('job-aptitude') || pathname.includes('questions') ?"active" :""} 
                     href="/purple/app/administrator/user-dashboard"> User Dasboard </a></li>
                 <li><a className={pathname.includes('jobs-dashboard') ?"active" :""} href="/purple/app/administrator/jobs-dashboard"> Jobs Dasboard </a></li>
                 <li><a className={pathname === ('/app/administrator/jobs') ?"active" :""} href="/purple/app/administrator/jobs"> Manage Jobs </a></li>
                 <li><a className={pathname.includes('manage-resumes') ?"active" :""} href="/purple/app/administrator/manage-resumes"> Manage Resumes </a></li>
                 <li><a className={pathname.includes('shortlist-candidates') ?"active" :""} href="/purple/app/administrator/shortlist-candidates"> Shortlist Candidates </a></li>
                 <li><a className={pathname === ('/app/administrator/interview-questions') ?"active" :""} href="/purple/app/administrator/interview-questions"> Interview Questions </a></li>
                 <li><a className={pathname.includes('offer_approvals') ?"active" :""} href="/purple/app/administrator/offer_approvals"> Offer Approvals </a></li>
                 <li><a className={pathname.includes('experiance-level') ?"active" :""} href="/purple/app/administrator/experiance-level"> Experience Level </a></li>
                 <li><a className={pathname === ('/app/administrator/candidates') ?"active" :""} href="/purple/app/administrator/candidates"> Candidates List </a></li>
                 <li><a className={pathname.includes('schedule-timing') ?"active" :""} href="/purple/app/administrator/schedule-timing"> Schedule timing </a></li>
                 <li><a className={pathname.includes('apptitude-result') ?"active" :""} href="/purple/app/administrator/apptitude-result"> Aptitude Results </a></li>
                 
               </ul>
             </li>
             <li className={pathname.includes('knowledgebase') ?"active" :""}> 
               <a href="/purple/app/administrator/knowledgebase"><i className="la la-question" /> <span>Knowledgebase</span></a>
             </li> */}
            <li className="submenu">
              <a href="#">
                <i className="la la-user" /> <span> Profile </span>{" "}
                <span className="menu-arrow" />
              </a>
              <ul style={{ display: "none" }}>
                <li>
                  <a
                    className={
                      pathname.includes("profile/employee-") ? "active" : ""
                    }
                    href="/purple/app/profile/employee-profile"
                  >
                    {" "}
                    Employee Profile{" "}
                  </a>
                </li>
                <li>
                  <a
                    className={pathname.includes("client-") ? "active" : ""}
                    href="/purple/app/profile/client-profile"
                  >
                    {" "}
                    Client Profile{" "}
                  </a>
                </li>
              </ul>
            </li>
            <li className={pathname.includes("activities") ? "active" : ""}>
              <a href="/purple/app/administrator/activities">
                <i className="la la-bell" /> <span>Activities</span>
              </a>
            </li>
            <li
              className={
                pathname.includes("administrator/users") ? "active" : ""
              }
            >
              <a href="/purple/app/administrator/users">
                <i className="la la-user-plus" /> <span>Users</span>
              </a>
            </li>
            <li>
              <a href="/purple/settings/companysetting">
                <i className="la la-cog" /> <span>Settings</span>
              </a>
            </li>
            {/* <li className="menu-title"> 
               <span>Pages</span>
             </li> */}
            {/* <li className="submenu">
               <a href="#"><i className="la la-user" /> <span> Profile </span> <span className="menu-arrow" /></a>
               <ul style={{display: 'none'}}>
                 <li><a className={pathname.includes('profile/employee-') ?"active" :""} href="/purple/app/profile/employee-profile"> Employee Profile </a></li>
                 <li><a className={pathname.includes('client-') ?"active" :""} href="/purple/app/profile/client-profile"> Client Profile </a></li>
               </ul>
             </li>
             <li className="submenu">
               <a href="#"><i className="la la-key" /> <span> Authentication </span> <span className="menu-arrow" /></a>
               <ul style={{display: 'none'}}>
                 <li><a href="/purple/login"> Login </a></li>
                 <li><a href="/purple/register"> Register </a></li>
                 <li><a href="/purple/forgotpassword"> Forgot Password </a></li>
                 <li><a href="/purple/otp"> OTP </a></li>
                 <li><a href="/purple/lockscreen"> Lock Screen </a></li>
               </ul>
             </li>
             <li className="submenu">
               <a href="#"><i className="la la-exclamation-triangle" /> <span> Error Pages </span> <span className="menu-arrow" /></a>
               <ul style={{display: 'none'}}>
                 <li><a href="/purple/error-404">404 Error </a></li>
                 <li><a href="/purple/error-500">500 Error </a></li>
               </ul>
             </li>
             <li className="submenu">
               <a href="#"><i className="la la-hand-o-up" /> <span> Subscriptions </span> <span className="menu-arrow" /></a>
               <ul style={{display: 'none'}}>
                 <li><a className={pathname.includes('subscriptionadmin') ?"active" :""} href="/purple/app/subscription/subscriptionadmin"> 
                 Subscriptions (Admin) </a></li>
                 <li><a className={pathname.includes('subscriptioncompany') ?"active" :""} href="/purple/app/subscription/subscriptioncompany">
                    Subscriptions (Company) </a></li>
                 <li><a className={pathname.includes('subscribedcompanies') ?"active" :""} href="/purple/app/subscription/subscribedcompanies">
                    Subscribed Companies</a></li>
               </ul>
             </li>
             <li className="submenu">
               <a href="#"><i className="la la-columns" /> <span> Pages </span> <span className="menu-arrow" /></a>
               <ul style={{display: 'none'}}>
                 <li><a className={pathname.includes('pages/search') ?"active" :""} href="/purple/app/pages/search"> Search </a></li>
                 <li><a className={pathname.includes('pages/faq') ?"active" :""} href="/purple/app/pages/faq"> FAQ </a></li>
                 <li><a className={pathname.includes('pages/terms') ?"active" :""} href="/purple/app/pages/terms"> Terms </a></li>
                 <li><a className={pathname.includes('privacypolicy') ?"active" :""} href="/purple/app/pages/privacypolicy"> Privacy Policy </a></li>
                 <li><a className={pathname.includes('pages/blank') ?"active" :""} href="/purple/app/pages/blank"> Blank Page </a></li>
               </ul>
             </li>
             <li className="menu-title"> 
               <span>UI Interface</span>
             </li>
             <li> 
               <a href="/purple/ui-components"><i className="la la-puzzle-piece" /> <span>Components</span></a>
             </li>
             <li className="submenu">
               <a href="#"><i className="la la-object-group" /> <span> Forms </span> <span className="menu-arrow" /></a>
               <ul style={{display: 'none'}}>
                 <li><a className={pathname.includes('basicinputs') ?"active" :""}
                     href="/purple/app/ui-interface/forms/basicinputs">Basic Inputs </a></li>
                 <li><a className={pathname.includes('inputgroups') ?"active" :""} 
                     href="/purple/app/ui-interface/forms/inputgroups">Input Groups </a></li>
                 <li><a className={pathname.includes('horizontalform') ?"active" :""}
                    href="/purple/app/ui-interface/forms/horizontalform">Horizontal Form </a></li>
                 <li><a className={pathname.includes('verticalform') ?"active" :""} 
                   href="/purple/app/ui-interface/forms/verticalform"> Vertical Form </a></li>
                 <li><a className={pathname.includes('formmask') ?"active" :""}
                     href="/purple/app/ui-interface/forms/formmask"> Form Mask </a></li>
                 <li><a className={pathname.includes('formvalidation') ?"active" :""}
                     href="/purple/app/ui-interface/forms/formvalidation"> Form Validation </a></li>
               </ul>
             </li>
             <li className="submenu">
               <a href="/purple/app/ui-interface/tables/basic"><i className="la la-table" /> <span> Tables </span> <span className="menu-arrow" /></a>
               <ul style={{display: 'none'}}>
                 <li><a className={pathname.includes('tables/basic') ?"active" :""} href="/purple/app/ui-interface/tables/basic">Basic Tables </a></li>
                 <li><a className={pathname.includes('tables/data-table') ?"active" :""} href="/purple/app/ui-interface/tables/data-table">Data Table </a></li>
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


export default withRouter(CeoSidebar);
