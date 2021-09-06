/**
 * Crm Routes
 */
/* eslint-disable */
import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import ManagerDashboard from './Manager/managerdashboard';
import EmployeeDashboard from './Employee/employeedashboard';
import CeoDashboard from './Ceo/ceodashboard';


const DashboardRoute = ({ match }) => (
   <Switch>
      <Redirect exact from={`${match.url}/`} to={`${match.url}/dashboard`} />
      <Route path={`${match.url}/dashboard/manager`} component={ManagerDashboard} />
      <Route path={`${match.url}/dashboard/employee`} component={EmployeeDashboard} />
      <Route path={`${match.url}/dashboard/ceo`} component={CeoDashboard} />
   </Switch>
  
);

export default DashboardRoute;
