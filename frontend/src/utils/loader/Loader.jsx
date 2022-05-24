import React from 'react';
import './loader.scss'

const Loader = () => {
	return (
		<div className='loader'>
			<div className="lds-heart">
				<div></div>
			</div>
		</div>
	);
};

export default Loader;