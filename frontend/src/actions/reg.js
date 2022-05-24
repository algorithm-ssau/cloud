import axios from 'axios'
import {setUser} from "../reducers/userReducer";
import {hideLoader, showLoader} from "../reducers/loaderReducer";

export const registration = (email, password) => {
	return async dispatch => {
		try {
			dispatch(showLoader())
			const response = await axios.post('http://localhost:8080/api/auth/registration', {
				email,
				password
			})
			alert(response.data.message)
		} catch (e) {
			alert(e.response.data)
		} finally {
			dispatch(hideLoader())
		}
	}
}

export const login = (email, password) => {
	return async dispatch => {
		try {
			dispatch(showLoader())
			const response = await axios.post('http://localhost:8080/api/auth/login', {
				email,
				password
			})
			localStorage.setItem('token', response.data.token)
			dispatch(setUser(response.data.user))
		} catch (e) {
			alert(e.response.data.message)
		} finally {
			dispatch(hideLoader())
		}
	}
}

export const auth = () => {
	return async dispatch => {
		try {
			const response = await axios.get('http://localhost:8080/api/auth/auth',
				{headers: {Authorization: `Bearer ${localStorage.getItem('token')}`}})
			localStorage.setItem('token', response.data.token)
			dispatch(setUser(response.data.user))
		} catch (e) {
			localStorage.removeItem('token')
		}
	}
}