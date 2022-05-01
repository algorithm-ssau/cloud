const SET_USER = 'SET_USER'

const defaultState = {
	currentUser:{},
	isAuth:false
}

export const userReducer = (state=defaultState, actions) => {
	switch (actions.type){
		case "SET_USER":
			return {
				...state,
				currentUser: actions.payload.user,
				isAuth: true
			}
			break;
		default:
			return state
	}
}

export const setUser = user => ({type: SET_USER, payload: user})