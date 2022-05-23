import React from 'react';
import './uploader.scss'
import UploadFile from "./UploadFile";
import {useDispatch, useSelector} from "react-redux";
import {hideUploader} from "../../../reducers/uploadReducer";

const Uploader = () => {
	const files = useSelector(state => state.upload.files)
	const isVisible = useSelector(state => state.upload.isVisible)
	const dispatch = useDispatch()

	return (isVisible &&
		<div className='uploader'>
			<div className="uploader_header">
				<div className="uploader_title">Downloads</div>
				<button className="uploader_close" onClick={()=>dispatch(hideUploader())}>Close</button>
			</div>
			{files.map(file =>
				<UploadFile key={file.id} file={file}/>
			)}
		</div>
	);
};

export default Uploader;