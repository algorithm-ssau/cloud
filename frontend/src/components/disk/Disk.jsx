import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {createDir, getFiles} from "../../actions/file";
import './disk.scss'
import FileList from "./fileList/FileList";
import Popup from "./popup/Popup";
import {setCurrentDir, setPopupDisplay} from "../../reducers/fileReducer";

const Disk = () => {
	const dispatch = useDispatch()
	const currentDir = useSelector(state => state.files.currentDir)
	const dirStack = useSelector(state => state.files.dirStack)

	useEffect(()=>{
		dispatch(getFiles(currentDir))
	},[currentDir])

	function showPopupHandler() {
		dispatch(setPopupDisplay('flex'))
	}

	function clickBackHandler() {
		const backDirId = dirStack.pop()
		dispatch(setCurrentDir(backDirId))
	}

	return (
		<div className='disk'>
			<div className="disk_btns">
				<button className='disk_create' onClick={() => showPopupHandler()}>Create</button>
				<button className='disk_back' onClick={()=>clickBackHandler()}>Back</button>
			</div>
			<FileList/>
			<Popup/>
		</div>
	);
};

export default Disk;