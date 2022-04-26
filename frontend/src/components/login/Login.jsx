import React, {useState} from 'react';
import './login.scss'
import logo from '../../assets/img/Vector.svg'
import Input from "../../utils/input/Input";
import Button from "../../utils/button/Button";
import {registration} from "../../actions/reg";

const Login = () => {
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')

	return (
		<div className='login-form'>
			<img src={logo} alt='' className='logo' width='43px' height='27px'/>
			<span className="title">Create an account</span>
			<form>
				<div className='input_container'>
					<Input value={email}
					       setValue={setEmail}
					       type='text'
					       placeholder='Email'/>
					<Input value={password}
					       setValue={setPassword}
					       type='password'
					       placeholder='Password'/>
				</div>
				<div className="login_button">Register</div>
			</form>
			<span onClick={() => registration(email,password)}>
				<Button>Log in</Button>
			</span>
		</div>
	);
};

export default Login;