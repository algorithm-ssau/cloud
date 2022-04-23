import React from "react";
import Header from "../header/Header";
import './app.scss'
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Registration from "../registration/Registration";
import Home from "../offer/Home";

function App() {
	return (
		<div className="app">
			<BrowserRouter>
				<Header/>
				<Home/>
				<Switch>
					<Route path='/registration' component={Registration}/>
				</Switch>
			</BrowserRouter>
		</div>
	);
}

export default App;