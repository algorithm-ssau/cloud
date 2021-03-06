import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {pushToStack, pushToStackName, setCurrentDir, setCurrentDirName} from "../../../../reducers/fileReducer";
import {deleteFile, downloadFile} from "../../../../actions/file";
import sizeFormat from "../../../../utils/sizeFormat";

import ('./file.scss')

const File = ({file}) => {
	const dispatch = useDispatch()
	const currentDir = useSelector(state => state.files.currentDir)
	const currentDirName = useSelector(state => state.files.currentDirName)
	const view = useSelector(state => state.files.view)

	function openDirHandler() {
		if (file.type === 'dir') {
			dispatch(pushToStack(currentDir))
			dispatch(pushToStackName(currentDirName))
			dispatch(setCurrentDir(file._id))
			dispatch(setCurrentDirName(file.name))
		}
	}

	function downloadClickHandler(event) {
		event.stopPropagation()
		downloadFile(file)
	}

	function deleteClickHandler(event) {
		event.stopPropagation()
		dispatch(deleteFile(file))
	}

	if (view === 'plate') {
		return (
			<div className='file-plate'
			     style={file.type === 'dir' ? {cursor: 'pointer'} : null}
			     onClick={() => openDirHandler()}
			>
				{file.type === 'dir'
					? <i className="fa-solid fa-folder file-plate_img"/>
					: <i className="fa-solid fa-file file-plate_img"/>
				}
				<div className="file-plate_name">{file.name}</div>
				<div className="file-plate_btns">
					{file.type !== 'dir'
						? <button onClick={(event) => downloadClickHandler(event)} className="file-plate_download"><i
							className="fa-solid fa-arrow-down"/></button> : null}
					<button onClick={(event) => deleteClickHandler(event)} className="file-plate_delete"><i
						className="fa-solid fa-trash"/></button>
				</div>
			</div>
		);
	}

	if (view === 'list') {
		return (
			<div className='file' style={file.type === 'dir' ? {cursor: 'pointer'} : null}
			     onClick={() => openDirHandler()}>
				{file.type === 'dir' ? <i className="fa-solid fa-folder file_img"/> :
					<i className="fa-solid fa-file file_img"/>}
				<div className="file_name">{file.name}</div>
				<div className="file_date">{file.date.slice(0, 10)}</div>
				<div className="file_size">{file.type === 'dir' ? '' : sizeFormat(file.size)}</div>
				{file.type !== 'dir' ?
					<button onClick={(event) => downloadClickHandler(event)} className="file_download"><i
						className="fa-solid fa-arrow-down"/></button> : null}
				<button onClick={(event) => deleteClickHandler(event)} className="file_delete"><i
					className="fa-solid fa-trash"/></button>
			</div>
		);
	}
};

export default File;