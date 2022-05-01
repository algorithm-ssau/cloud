import React from "react";
import Header from "../header/Header";
import './app.scss'
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Registration from "../authorization/Registration";
import Home from "../home/Home";
import Login from "../authorization/Login";
import {useSelector} from "react-redux";

function App() {
	const isAuth = useSelector(state => state.user.isAuth)

	return (
		<div className="app">
			<BrowserRouter>
				<Header/>
				{/*<Home/>*/}
				{!isAuth &&
				<Switch>
					<Route path='/home' component={Home}/>
					<Route path='/registration' component={Registration}/>
					<Route path='/login' component={Login}/>
				</Switch>
				}
			</BrowserRouter>
		</div>
	);
}

export default App;