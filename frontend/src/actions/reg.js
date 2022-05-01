import axios from 'axios'
import {setUser} from "../reducers/userReducer";

export const registration = async (email, password) => {
	try {
		const response = await axios.post('http://localhost:8080/api/auth/authorization', {
			email,
			password
		})
		alert(response.data.message)
	} catch (e) {
		alert(e)
	}
}

export const login = (email, password) => {
	return async dispatch => {
		try {
			const response = await axios.post('http://localhost:8080/api/auth/login', {
				email,
				password
			})
			dispatch(setUser(response.data.user))
			localStorage.setItem('token',response.data.token)
			console.log(response.data)
		} catch (e) {
			alert(e.response.data.message)
		}
	}
}