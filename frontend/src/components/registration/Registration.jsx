import React from 'react';
import './registration.scss'
import logo from '../../assets/img/Vector.svg'
import Input from "../../utils/input/Input";
import Button from "../../utils/button/Button";

const Registration = () => {
	return (
		<div className='registration-form'>
			<img src={logo} alt='' className='logo' width='43px' height='27px'/>
			<span className="title">Create an account</span>

			<div className='input_container'>
				<Input type='text' placeholder='Name'/>
				<Input type='text' placeholder='Surname'/>
				<Input type='text' placeholder='Email'/>
				<Input type='password' placeholder='Password'/>
			</div>

			<div className="login_button">Already have an account?</div>
			<Button>Registration</Button>
		</div>
	);
};

export default Registration;