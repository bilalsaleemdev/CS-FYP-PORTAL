/**
 * Crm Routes
 */
/* eslint-disable */
import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import ManagerDashboard from './Manager/managerdashboard';
import EmployeeDashboard from './Employee/employeedashboard';
import CeoDashboard from './Ceo/ceodashboard';
import ApproveRequest from '../../HR/Sales/approverequest';
import ApproveRequest1 from '../../HR/Sales/approverequest1';
// const userType = localStorage.getItem('u')


const DashboardRoute = ({ match }) => (
   <Switch>
    
      <Route path={`${match.url}/dashboard/manager`} component={ManagerDashboard} />
      <Route path={`${match.url}/dashboard/employee`} component={EmployeeDashboard} />
      <Route path={`${match.url}/dashboard/ceo`} component={CeoDashboard} />
      <Route path={`${match.url}/approve-request`} component={ApproveRequest} />      
   </Switch>
  
);

export default DashboardRoute;
