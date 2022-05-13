import React, {useEffect} from "react";
import Header from "../header/Header";
import './app.scss'
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Registration from "../authorization/Registration";
import Home from "../home/Home";
import Login from "../authorization/Login";
import {useDispatch, useSelector} from "react-redux";
import {auth} from "../../actions/reg";

function App() {
	const isAuth = useSelector(state => state.user.isAuth)
	const dispatch = useDispatch()

	useEffect(()=>{
		dispatch(auth())
	},[])
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