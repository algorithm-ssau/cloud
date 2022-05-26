const SET_FILES = 'SET_FILES'
const SET_CURRENT_DIR = 'SET_CURRENT_DIR'
const SET_CURRENT_DIR_NAME = 'SET_CURRENT_DIR_NAME'
const CREATE_FILE = 'CREATE_FILE'
const SETUP_POPUP_DISPLAY = 'SETUP_POPUP_DISPLAY'
const PUSH_TO_STACK = 'PUSH_TO_STACK'
const PUSH_TO_STACK_NAME= 'PUSH_TO_STACK_NAME'
const DELETE_FILE = 'DELETE_FILE'
const SET_VIEW = 'SET_VIEW'

const defaultState = {
	files:[],
	currentDir:null,
	currentDirName:' ',
	popupDisplay:'none',
	dirStack:[],
	dirStackName:[],
	view:'list'
}

export const fileReducer = (state=defaultState, action) => {
	switch (action.type){
		case SET_FILES: return {...state, files: action.payload}
		case SET_CURRENT_DIR: return {...state, currentDir: action.payload}
		case SET_CURRENT_DIR_NAME: return {...state, currentDirName: action.payload}
		case CREATE_FILE: return {...state, files: [...state.files,action.payload]}
		case SETUP_POPUP_DISPLAY: return {...state, popupDisplay: action.payload}
		case PUSH_TO_STACK: return {...state, dirStack: [...state.dirStack, action.payload]}
		case PUSH_TO_STACK_NAME: return {...state, dirStackName: [...state.dirStackName, action.payload]}
		case DELETE_FILE: return {...state, files: [...state.files.filter(file => file._id != action.payload)]}
		case SET_VIEW: return {...state, view:action.payload}
		default:
			return state
	}
}

export const setFiles = (files) => ({type:SET_FILES,payload:files})
export const setCurrentDir = (dir) => ({type:SET_CURRENT_DIR,payload:dir})
export const setCurrentDirName = (dirName) => ({type:SET_CURRENT_DIR_NAME,payload:dirName})
export const addFile = (file) => ({type:CREATE_FILE,payload:file})
export const setPopupDisplay = (display) => ({type:SETUP_POPUP_DISPLAY,payload:display})
export const pushToStack = (dir) => ({type:PUSH_TO_STACK,payload:dir})
export const pushToStackName = (dirName) => ({type:PUSH_TO_STACK_NAME,payload:dirName})
export const deleteFileAction = (fileId) => ({type:DELETE_FILE,payload:fileId})
export const setView = (type) => ({type:SET_VIEW,payload:type})