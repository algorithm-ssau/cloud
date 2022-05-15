import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {getFiles} from "../../actions/file";
import './disk.scss'
import FileList from "./fileList/FileList";

const Disk = () => {
	const dispatch = useDispatch()
	const currentDir = useSelector(state => state.files.currentDir)

	useEffect(()=>{
		dispatch(getFiles(currentDir))
	},[currentDir])
	return (
		<div className='disk'>
			<div className="disk_btns">
				<button className='disk_create'>Create</button>
				<button className='disk_back'>Back</button>
				<FileList/>
			</div>
		</div>
	);
};

export default Disk;