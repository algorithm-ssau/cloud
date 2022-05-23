import React, {useState} from 'react';
import Input from "../../../utils/input/Input";
import {useDispatch, useSelector} from "react-redux";
import {setPopupDisplay} from "../../../reducers/fileReducer";
import {createDir} from "../../../actions/file";

const Popup = () => {
	const [dirName, setDirname] = useState('')
	const popupDisplay = useSelector(state=>state.files.popupDisplay)
	const currentDir = useSelector(state => state.files.currentDir)
	const dispatch = useDispatch()

	function createDirHandler() {
		dispatch(createDir(currentDir,dirName))
		dispatch(setPopupDisplay('none'))
		setDirname('')
	}

	return (
		<div className='popup' onClick={()=> dispatch(setPopupDisplay('none'))} style={{display:popupDisplay}}>
			<div className="popup_content" onClick={event => event.stopPropagation()}>
				<div className="popup_header">
					<div className="popup_title">Create a new directory</div>
					<button className="popup_close" onClick={()=> dispatch(setPopupDisplay('none'))}>Close</button>
				</div>
				<Input placeholder='Directory`s name' type='text' value={dirName} setValue={setDirname}/>
				<button className="popup_create_button" onClick={()=> createDirHandler()}>Create</button>
			</div>
		</div>
	);
};

export default Popup;