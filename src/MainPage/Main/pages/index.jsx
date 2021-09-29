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
import ApproveRequest from '../../HR/Sales/approverequest';
// import ApproveRequest1 from '../../HR/Sales/approverequest1';

import { Divider } from 'material-ui';
import Projects from './Project/projects';


// const userType = localStorasssge.getItem('u')


const DashboardRoute = ({ match }) => (
      // console.log('awais testing', `${match.url}/dashboard`);
      <Switch>
    
      <Route  path={`${match.url}/dashboard/manager`} component={ManagerDashboard} />
      <Route  path={`${match.url}/manager/workshope`} component={Workshope} />
      <Route  path={`${match.url}/dashboard/employee`} component={EmployeeDashboard} />
      <Route  path={`${match.url}/dashboard/ceo`} component={CeoDashboard} />
      <Route  path={`${match.url}/approve-request`} component={ApproveRequest} />
      <Route  path={`${match.url}/projects`} component={Projects} />
          
       
   </Switch>


)




   
  


export default DashboardRoute;
