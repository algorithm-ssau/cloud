import React from 'react';
import {useSelector} from "react-redux";
import File from "./file/File";
import ('./fileList.scss')

const FileList = () => {

	const files = useSelector(state => state.files.files).map(file => <File key={file._id} file={file}/>)

	return (
		<div className='fileList'>
			<div className="fileList_header">
				<div className="fileList_name">Name</div>
				<div className="fileList_date">Date</div>
				<div className="fileList_size">Size</div>
			</div>
			{files}
		</div>
	);
};

export default FileList;