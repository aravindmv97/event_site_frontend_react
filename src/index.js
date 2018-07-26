import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route} from "react-router-dom";
import registerServiceWorker from './registerServiceWorker';
import 'bootstrap/dist/css/bootstrap.css';
import NavbarComponent from './Components/Navbar.js';
import App from './App.js';
import './index.css';

ReactDOM.render(
	 
		<Router>
	  		<Route exact path="/" component={App} />			 
		</Router>
	
	, 
	document.getElementById('root'));
registerServiceWorker();
