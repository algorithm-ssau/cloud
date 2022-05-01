import React, {useState} from 'react';
import './authorization.scss'
import logo from '../../assets/img/Vector.svg'
import Input from "../../utils/input/Input";
import Button from "../../utils/button/Button";
import {registration} from "../../actions/reg";
import {NavLink} from "react-router-dom";

const Registration = () => {
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const [name, setName] = useState('')
	const [surname, setSurname] = useState('')

	return (
		<div className='auth-form'>
			<img src={logo} alt='' className='logo' width='43px' height='27px'/>
			<span className="title">Create an account</span>
			<form>
				<div className='input_container'>
					<Input value={name}
					       setValue={setName}
					       type='text' placeholder='Name'/>
					<Input value={surname}
					       setValue={setSurname}
					       type='text' placeholder='Surname'/>
					<Input value={email}
					       setValue={setEmail}
					       type='text'
					       placeholder='Email'/>
					<Input value={password}
					       setValue={setPassword}
					       type='password'
					       placeholder='Password'/>
				</div>
				<span className="redirect_button" ><NavLink to={'/login'}>Already have an account?</NavLink></span>
			</form>
			<span onClick={() => registration(email,password)}>
				<Button>Registration</Button>
			</span>
		</div>
	);
};

export default Registration;