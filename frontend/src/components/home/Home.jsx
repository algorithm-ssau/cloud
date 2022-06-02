import React from 'react';
import './home.scss'
//import MyButton from "../../utils/button/MyButton";
import diskLogo from '../../assets/img/disk.svg'
import {NavLink} from "react-router-dom";

const Home = () => {
	return (
		<div className='home_container'>
			<div className="offer_container">
				<div className="offer_title">Modern, simple and secure
					storage for your files </div>
				<NavLink to={'/registration'}><button className='button'>Try it for free!</button></NavLink>
			</div>
			<img src={diskLogo} alt='' className='diskLogo'/>
		</div>
	);
};

export default Home;