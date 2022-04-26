import React from "react";
import Header from "../header/Header";
import './app.scss'
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Registration from "../registration/Registration";
import Home from "../offer/Home";
import Login from "../login/Login";

function App() {
	return (
		<div className="app">
			<BrowserRouter>
				<Header/>
				<Home/>
				<Switch>
					<Route path='/registration' component={Registration}/>
					<Route path='/login' component={Login}/>
				</Switch>
			</BrowserRouter>
		</div>
	);
}

export default App;