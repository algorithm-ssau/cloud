import React from 'react';
import dirLogo from '../../../../assets/img/directory.svg'
import fileLogo from '../../../../assets/img/file.svg'
import {useDispatch, useSelector} from "react-redux";
import {pushToStack, setCurrentDir} from "../../../../reducers/fileReducer";

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

	return (
		<div className='file' onClick={() => openDirHandler()}>
			<img width='40px' src={file.type === 'dir' ? dirLogo : fileLogo} className="file_img"/>
			<div className="file_name">{file.name}</div>
			<div className="file_date">{file.date.slice(0, 10)}</div>
			<div className="file_size">{file.type === 'dir' ? '' : file.size}</div>
		</div>
	);
};

export default File;