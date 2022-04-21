import React from 'react';
import logo from '../../assets/img/Vector.svg'
import './header.scss'
import {NavLink} from "react-router-dom";

const Header = () => {
	return (
		<div className='header'>
			<div className="header_logo">
				<img src={logo} alt='' className='header_logo_icon'/>
				<span className="header_logo_title">.cloud</span>
			</div>
			<div className="navbar">
				<span className="Home">Home</span>
				<span className="Storage"><NavLink to='/registration'>Storage</NavLink></span>
			</div>
		</div>
	);
};

export default Header;