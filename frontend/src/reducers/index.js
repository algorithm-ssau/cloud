import {combineReducers, createStore} from "redux";
import {userReducer} from "./userReducer";
import {fileReducer} from "./fileReducer";

const rootReducer = combineReducers({
	user: userReducer,
	files: fileReducer
})

export const store = createStore(rootReducer)