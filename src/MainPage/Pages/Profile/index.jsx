/**
 * Tables Routes
 */
import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

import EmployeeProfile from "./employeeprofile"
import ManagerProfile from './managerprofile';
import CeoProfile from './ceoprofile';



const subscriptionroute = ({ match }) => (
    <Switch>
    {console.log(match.url, 'awais url')}
        <Redirect exact from={`${match.url}/`} to={`${match.url}/employee-profile`} />
        <Route path={`${match.url}/employee-profile`} component={EmployeeProfile} />
        <Route path={`${match.url}/manager-profile`} component={ManagerProfile} />
        <Route path={`${match.url}/ceo-profile`} component={CeoProfile} />
    </Switch>
);

export default subscriptionroute;
