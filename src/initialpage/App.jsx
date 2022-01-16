import React, { Component } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
// We will create these two pages in a moment
//Authendication
import LoginPage from "./loginpage";
import RegistrationPage from "./RegistrationPage";

import { Dashboard } from "./Dashboard/dashboard";


//Main App
import DefaultLayout from "./Sidebar/DefaultLayout";


//Error Page
import Error404 from "../MainPage/Pages/ErrorPage/error404";
import Error500 from "../MainPage/Pages/ErrorPage/error500";

// import 'Assets/css/font-awesome.min.css';

import $ from "jquery";


export default class App extends Component {
  componentDidMount() {
    if (
      location.pathname.includes("login") ||
      location.pathname.includes("register") ||
      location.pathname.includes("forgotpassword") ||
      location.pathname.includes("otp") ||
      location.pathname.includes("lockscreen")
    ) {
      $("body").addClass("account-page");
    } else if (
      location.pathname.includes("error-404") ||
      location.pathname.includes("error-500")
    ) {
      $("body").addClass("error-page");
    }
  }
  render() {
    const { location, match, user } = this.props;

    // if (location.pathname === '/') {
    // if (user === null) {
    //     return (<Redirect to={'/login'} />);
    // } else {
    //     return (<Redirect to={'/app/main/dashboard'} />);
    // }
    // }
    if (location.pathname === "/") {
      return <Redirect to={"/app/main/dashboard"} />;
    }
    return (
      <Switch>
        {/* <InitialPath
                        path={`${match.url}app`}
                        // authUser={user}
                        component={DefaultLayout}
                    /> */}
        {/* <Redirect exact from={`${match.url}/`} to={`${match.url}/login`} /> */}
        <Route exact path="/app/main/dashboard" component={Dashboard} />
        <Route path="/login" component={LoginPage} />

     
        <Route path="/register" component={RegistrationPage} />
    
        

        <Route path="/app" component={DefaultLayout} />
  

        
        <Route path="/error-404" component={Error404} />
        <Route path="/error-500" component={Error500} />
      </Switch>
    );
  }
}
