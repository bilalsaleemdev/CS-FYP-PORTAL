/**
 * Crm Routes
 */
/* eslint-disable */
import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import ManagerDashboard from './Manager/managerdashboard';
import Workshope from './ManagerWorkshop/workshope';
import EmployeeDashboard from './Employee/employeedashboard';
import CeoDashboard from './Ceo/ceodashboard';
import ApproveRequest from './Ceo/approverequest';


import { Divider } from 'material-ui';
import Projects from './Project/projects';
import Tasks from './tasks/tasks';
import Feedback from './tasks/Feedback';
import CompletedTask from './tasks/taskboard';
import ProjectList from './Project/projectlist';
import EmployeeWorkshop from './Employee/EmployeeWorkshop';
import EmployeeTasks from './Employee/Tasks/employeeTasks'
import allProject from './Employee/Projects/allProject';
import badges from './Employee/Badges/topEmployees';
import myProject from './Employee/Projects/myProject';
import CompletedTasks from './Employee/Tasks/completedTask';
import SubmitTask from './Employee/submitTask/submitTask';
import Employee from './Ceo/allemployees'
import Employees from './Manager/allemployees';
import FeedCompletedTasks from './Employee/feedback/feedcompletedTask';

// const userType = localStorasssge.getItem('u')


const DashboardRoute = ({ match }) => (
      // console.log('awais testing', `${match.url}/dashboard`);
      <Switch>
    
      <Route  path={`${match.url}/dashboard/manager`} component={ManagerDashboard} />
      <Route  path={`${match.url}/ceo/allemployee`} component={Employee} />
      <Route  path={`${match.url}/manager/workshope`} component={Workshope} />
      <Route  path={`${match.url}/dashboard/employee`} component={EmployeeDashboard} />
      <Route  path={`${match.url}/dashboard/ceo`} component={CeoDashboard} />
      <Route  path={`${match.url}/approve-request`} component={ApproveRequest} />
      <Route  path={`${match.url}/projects`} component={Projects} />
      <Route  path={`${match.url}/tasks`} component={Tasks} />
      <Route  path={`${match.url}/completedTask`} component={CompletedTask} />
      <Route  path={`${match.url}/projectlist`} component={ProjectList} />
      <Route  path={`${match.url}/employeeworkshop`} component={EmployeeWorkshop} />
      <Route  path={`${match.url}/employeetasks`} component={EmployeeTasks} />

      <Route  path={`${match.url}/company_projects`} component={allProject} />
      <Route  path={`${match.url}/top-employees`} component={badges} />
      <Route  path={`${match.url}/employeemyprojects`} component={myProject} />

      <Route  path={`${match.url}/feedbacks`} component={Feedback} />

      <Route  path={`${match.url}/completedTaskEmployee`} component={CompletedTasks} />
      <Route  path={`${match.url}/submit-task`} component={SubmitTask} />

      <Route  path={`${match.url}/manager/allemployee`} component={Employees} />
      <Route  path={`${match.url}/feedback_completed_task`} component={FeedCompletedTasks} />



       
   </Switch>


)




   
  


export default DashboardRoute;
