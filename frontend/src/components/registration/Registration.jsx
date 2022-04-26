import React, {useState} from 'react';
import './registration.scss'
import logo from '../../assets/img/Vector.svg'
import Input from "../../utils/input/Input";
import Button from "../../utils/button/Button";
import {registration} from "../../actions/reg";

const Registration = () => {
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const [name, setName] = useState('')
	const [surname, setSurname] = useState('')

	return (
		<div className='registration-form'>
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
				<div className="login_button">Already have an account?</div>
			</form>
			<span onClick={() => registration(email,password)}>
				<Button>Registration</Button>
			</span>
		</div>
	);
};

export default Registration;