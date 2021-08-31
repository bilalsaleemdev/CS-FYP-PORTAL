import 'core-js/stable';
import 'regenerator-runtime/runtime';
// import 'react-hot-loader';
import React from "react";
import ReactDOM from "react-dom";
import Main from "./Entryfile/Main";

ReactDOM.render(<Main/>, document.getElementById('app'));

if (module.hot) { // enables hot module replacement if plugin is installed
 module.hot.accept();
}