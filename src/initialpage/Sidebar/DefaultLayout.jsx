/**
 * App Routes
 */
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
				{
					console.log('miral testing',routerService.map((route,key)=>
					 console.log(key, 'key')
					//  onsole.log(key, 'key')
					// <Route key={key} path={`${match.url}/${route.path}`} component={route.component} />
						// <Route key={key} path={`${props.match.url}/${route.path}`} component={route.component} />
					))
				}					
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
}
export default withRouter(DefaultLayout);

// export default withRouter(connect(null)(DefaultLayout));
