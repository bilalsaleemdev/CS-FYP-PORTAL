/**
 * Crm Routes
 */
/* eslint-disable */
import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import Conference from './Conference';
// import EmployeeDashboard from './Employee/employeedashboard';
// import CeoDashboard from './Ceo/ceodashboard';
// import ApproveRequest from '../../HR/Sales/approverequest';
// import ApproveRequest1 from '../../HR/Sales/approverequest1';
// const userType = localStorage.getItem('u')


const ConferenceRoute = ({ match }) => {

   console.log(match.url);

   <Switch>
     
      <Route path={`${match.url}/dashboard/manager/conference`} component={Conference} />
         
   </Switch>
  
}
   

export default ConferenceRoute;
