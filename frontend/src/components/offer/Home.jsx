import React from 'react';
import './home.scss'
import Button from "../../utils/button/Button";
import diskLogo from '../../assets/img/disk.png'

const Home = () => {
	return (
		<div className='home_container'>
			<div className="offer_container">
				<div className="offer_title">Modern, simple and secure
					storage for your files </div>
				<Button>Try it for free!</Button>
			</div>
			<img src={diskLogo} alt='' className='diskLogo'/>
		</div>
	);
};

export default Home;