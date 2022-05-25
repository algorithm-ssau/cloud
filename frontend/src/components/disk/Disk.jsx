import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {createDir, getFiles, uploadFile} from "../../actions/file";
import './disk.scss'
import FileList from "./fileList/FileList";
import Popup from "./popup/Popup";
import {setCurrentDir, setPopupDisplay} from "../../reducers/fileReducer";
import File from "./fileList/file/File";
import Uploader from "./uploader/Uploader";
import Loader from "../../utils/loader/Loader";

const Disk = () => {
	const dispatch = useDispatch()
	const currentDir = useSelector(state => state.files.currentDir)
	const dirStack = useSelector(state => state.files.dirStack)
	const [dragEnter, setDragEnter] = useState(false)
	const files = useSelector(state => state.files.files).map(file => <File key={file.id} file={file}/>)
	const loader = useSelector(state => state.loader.loader)
	const [sort, setSort] = useState('type')


	useEffect(() => {
		dispatch(getFiles(currentDir, sort))
	}, [currentDir, sort])

	function showPopupHandler() {
		dispatch(setPopupDisplay('flex'))
	}

	function clickBackHandler() {
		const backDirId = dirStack.pop()
		dispatch(setCurrentDir(backDirId))
	}

	function fileUploadHandler(event) {
		const files = [...event.target.files]
		files.forEach(file => dispatch(uploadFile(file, currentDir)))
	}

	function onDragEnterHandler(event) {
		event.preventDefault()
		event.stopPropagation()
		setDragEnter(true)
	}

	function onDragEnterLeave(event) {
		event.preventDefault()
		event.stopPropagation()
		setDragEnter(false)
	}

	function dropHandler(event) {
		event.preventDefault()
		event.stopPropagation()
		let files = [...event.dataTransfer.files]
		files.forEach(file => dispatch(uploadFile(file, currentDir)))
		setDragEnter(false)
	}

	if (loader) {
		return <Loader/>
	}

	return (dragEnter ?
			<div className='dragArea' onDrop={dropHandler} onDragEnter={onDragEnterHandler}
			     onDragLeave={onDragEnterLeave}
			     onDragOver={onDragEnterHandler}>
				Drag your files here
			</div>
			: <div className='disk' onDragEnter={onDragEnterHandler} onDragLeave={onDragEnterLeave}
			       onDragOver={onDragEnterHandler}>
				<div className="disk_btns">
					{dirStack.length === 0 ? <div/> :
						<button className='disk_back' onClick={() => clickBackHandler()}><i
							className="fa-solid fa-arrow-left"></i></button>}
					<div className="disk_btns_container">
						<button className='disk_create' onClick={() => showPopupHandler()}><i
							className="fa-solid fa-folder-plus"></i></button>
						<div className="disk_upload">
							<label htmlFor="disk_upload-input" className="disk_upload-label"><i
								className="fa-solid fa-file-arrow-up"></i></label>
							<input multiple={true} onChange={(event) => fileUploadHandler(event)} type="file"
							       id="disk_upload-input" className="disk_upload-input"/>
						</div>
					</div>
				</div>
				<FileList sort={sort} setSort={setSort}/>
				<Popup/>
				<Uploader/>
			</div>
	);
};

export default Disk;