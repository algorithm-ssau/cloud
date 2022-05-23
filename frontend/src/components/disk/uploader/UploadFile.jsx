import React from 'react';
import './uploader.scss'
import {useDispatch} from "react-redux";
import {removeUploadFile} from "../../../reducers/uploadReducer";

const UploadFile = ({file}) => {
	const dispatch = useDispatch()
	return (
		<div className='upload-file'>
			<div className="upload-file_header">
				<div className="upload-file_title">{file.name}</div>
				<button className="upload-file_delete" onClick={()=>dispatch(removeUploadFile(file.id))}>x</button>
			</div>

			<div className="upload-file_progress-background progress-moved">
				<div className="upload-file_progress-bar" style={{width:file.progress + '%'}}>
				</div>
			</div>

		</div>
	);
};

export default UploadFile;