const SET_FILES = 'SET_FILES'
const SET_CURRENT_DIR = 'SET_CURRENT_DIR'
const CREATE_FILE = 'CREATE_FILE'
const SETUP_POPUP_DISPLAY = 'SETUP_POPUP_DISPLAY'

const defaultState = {
	files:[],
	currentDir:null,
	popupDisplay:'none'
}

export const fileReducer = (state=defaultState, action) => {
	switch (action.type){
		case SET_FILES: return {...state, files: action.payload}
		case SET_CURRENT_DIR: return {...state, files: action.payload}
		case CREATE_FILE: return {...state, files: [...state.files,action.payload]}
		case SETUP_POPUP_DISPLAY: return {...state, popupDisplay: action.payload}
		default:
			return state
	}
}

export const setFiles = (files) => ({type:SET_FILES,payload:files})
export const setCurrentDir = (dir) => ({type:SET_CURRENT_DIR,payload:dir})
export const addFile = (file) => ({type:CREATE_FILE,payload:file})
export const setPopupDisplay = (display) => ({type:SETUP_POPUP_DISPLAY,payload:display})