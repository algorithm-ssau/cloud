import React from 'react';
import './myButton.scss'

const MyButton = ({children,...props}) => {
	return (
		<button className='myButton'>{children}</button>
	);
};

export default MyButton;