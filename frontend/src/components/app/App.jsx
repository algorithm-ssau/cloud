import React, {useEffect} from "react";
import Header from "../header/Header";
import './app.scss'
import {BrowserRouter, Redirect, Route, Switch} from "react-router-dom";
import Registration from "../authorization/Registration";
import Home from "../home/Home";
import Login from "../authorization/Login";
import {useDispatch, useSelector} from "react-redux";
import {auth} from "../../actions/reg";
import Disk from "../disk/Disk";
import Profile from "../profile/Profile";

function App() {
	const isAuth = useSelector(state => state.user.isAuth)
	const dispatch = useDispatch()

	useEffect(() => {
		dispatch(auth())
	}, [])

	return (

		<BrowserRouter>
			<div className="app">
				<Header/>
				<div className="wrap">
					{!isAuth ?
						<Switch>
							{/*<Route path='/home' component={Home}/>*/}
							<Route path='/registration' component={Registration}/>
							<Route path='/login' component={Login}/>
							<Redirect to='/login'/>
						</Switch>
						:
						<Switch>
							{/*<Route path='/home' component={Home}/>*/}
							<Route exact path='/' component={Disk}/>
							<Route exact path='/profile' component={Profile}/>
							<Redirect to='/'/>
						</Switch>

					}
				</div>
			</div>
		</BrowserRouter>

	);
}

export default App;