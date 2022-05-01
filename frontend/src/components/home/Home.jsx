import React from 'react';
import './home.scss'
import Button from "../../utils/button/Button";
import diskLogo from '../../assets/img/disk.png'
import {NavLink} from "react-router-dom";

const Home = () => {
	return (
		<div className='home_container'>
			<div className="offer_container">
				<div className="offer_title">Modern, simple and secure
					storage for your files </div>
				<NavLink to={'/login'}><Button>Try it for free!</Button></NavLink>
			</div>
			<img src={diskLogo} alt='' className='diskLogo'/>
		</div>
	);
};

export default Home;