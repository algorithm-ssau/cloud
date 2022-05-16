import React, {useState} from 'react';
import './authorization.scss'
import logo from '../../assets/img/Vector.svg'
import Input from "../../utils/input/Input";
import MyButton from "../../utils/button/MyButton";
import {login, registration} from "../../actions/reg";
import {NavLink} from "react-router-dom";
import {useDispatch} from "react-redux";

const Login = () => {
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const dispatch = useDispatch()

	return (
		<div className='auth-form'>
			<img src={logo} alt='' className='logo' width='43px' height='27px'/>
			<span className="title">Log into account</span>
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
				<span className="redirect_button"><NavLink to={'/registration'}>Register</NavLink></span>
			</form>
			<span onClick={() => dispatch(login(email,password))}>
				<MyButton>Log in</MyButton>
			</span>
		</div>

	);
};

export default Login;