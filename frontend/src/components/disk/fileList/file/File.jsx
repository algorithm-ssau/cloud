import React from 'react';
import dirLogo from '../../../../assets/img/directory.svg'
import fileLogo from '../../../../assets/img/file.svg'
import {useDispatch, useSelector} from "react-redux";
import {pushToStack, setCurrentDir} from "../../../../reducers/fileReducer";
import {downloadFile} from "../../../../actions/file";

import ('./file.scss')

const File = ({file}) => {
	const dispatch = useDispatch()
	const currentDir = useSelector(state => state.files.currentDir)

	function openDirHandler() {
		if (file.type === 'dir') {
			dispatch(pushToStack(currentDir))
			dispatch(setCurrentDir(file._id))
		}
	}

	function downloadClickHandler(event) {
		event.stopPropagation()
		downloadFile(file)
	}

	return (
		<div className='file' onClick={() => openDirHandler()}>
			{file.type === 'dir' ? <i className="fa-solid fa-folder file_img"/> : <i className="fa-solid fa-file file_img"/>}
			<div className="file_name">{file.name}</div>
			<div className="file_date">{file.date.slice(0, 10)}</div>
			<div className="file_size">{file.type === 'dir' ? '' : file.size}</div>
			{file.type !== 'dir' ? <button onClick = { (event) => downloadClickHandler(event)} className="file_download"><i className="fa-solid fa-arrow-down"/></button> : null}
			<button className="file_delete"><i className="fa-solid fa-trash"/></button>
		</div>
	);
};

export default File;