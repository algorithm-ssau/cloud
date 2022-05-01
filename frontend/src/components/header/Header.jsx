import React from 'react';
import logo from '../../assets/img/Vector.svg'
import './header.scss'
import {NavLink} from "react-router-dom";
import {useSelector} from "react-redux";

const Header = () => {
	const isAuth = useSelector(state => state.user.isAuth)

	return (
		<div className='header'>
			<div className="header_logo">
				<NavLink to={'/home'}>
					<img src={logo} alt='' className='header_logo_icon'/>
					<span className="header_logo_title">.cloud</span>
				</NavLink>
			</div>
			<div className="navbar">
				{!isAuth && <span className="Home"><NavLink to={'/home'}>Home</NavLink></span>}
				{!isAuth && <span className="Storage"><NavLink to='/login'>Storage</NavLink></span>}
				{isAuth && <span className="Home">Log out</span>}
			</div>
		</div>
	);
};

export default Header;