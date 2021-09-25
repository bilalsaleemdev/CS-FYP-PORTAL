/**
 * App Routes
 */
<<<<<<< HEAD
import React, { Component, useEffect } from "react";
import { Route, withRouter } from "react-router-dom";

// router service
import routerService from "../../router_service";

import Header from "./header.jsx";

import ManagerSidebar from "./All Sidebar/Managersidebar";
import EmployeeSidebar from "./All Sidebar/Employeesidebar";
import CeoSidebar from "./All Sidebar/Ceosidebar";

const DefaultLayout = (props) => {
  let EmployeeType = localStorage.getItem("EmployeeType");

  
useEffect(() => {
   EmployeeType = localStorage.getItem("EmployeeType");
   
}, [EmployeeType]);

  const { match } = props;
    return (
      <div className="main-wrapper">
        <Header />
        <div>
          {routerService &&
            routerService.map((route, key) => (
              <Route
                key={key}
                path={`${match.url}/${route.path}`}
                component={route.component}
              />
            ))}
        </div>
        {EmployeeType === "manager" && <ManagerSidebar />}
        {EmployeeType === "employee" && <EmployeeSidebar />}
        {EmployeeType === "ceo" && <CeoSidebar />}
      </div>
    );
    
  
=======
import React, { Component, useEffect, useState } from 'react';
import { Route, withRouter } from 'react-router-dom';
// router service
import routerService from "../../router_service";
import Header from './header.jsx';
import SidebarCeo from './sidebarCeo';
import SidebarManager from './sidebarManager';
import SidebarEmployee from './sidebarEmployee';

const DefaultLayout = (props) => {
// class DefaultLayout extends Component {
	// render() {
	const [employeeType, setEmployeeType] = useState();	
	useEffect(()=>{setEmployeeType(localStorage.getItem('EmployeeType'))},[])

		return (
			<div className="main-wrapper">
				<Header/>
				<div>					
					{routerService && routerService.map((route,key)=>
					// <Route key={key} path={`${match.url}/${route.path}`} component={route.component} />
						<Route key={key} path={`${props.match.url}/${route.path}`} component={route.component} />
					)}
				</div>		
				{
					employeeType == 'ceo' &&
					<SidebarCeo/>
				}
				{
					employeeType == 'manager' &&
					<SidebarManager/>
				}	
				{
					employeeType == 'employee' &&
					<SidebarEmployee/>
				}		
				
			</div>
		);
	// }
>>>>>>> awais/first-task
}
export default withRouter(DefaultLayout);

// export default withRouter(connect(null)(DefaultLayout));
