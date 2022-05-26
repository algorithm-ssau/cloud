import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {createDir, getFiles, uploadFile} from "../../actions/file";
import './disk.scss'
import FileList from "./fileList/FileList";
import Popup from "./popup/Popup";
import {setCurrentDir, setCurrentDirName, setPopupDisplay, setView} from "../../reducers/fileReducer";
import Uploader from "./uploader/Uploader";
import Loader from "../../utils/loader/Loader";

const Disk = () => {
	const dispatch = useDispatch()
	const currentDir = useSelector(state => state.files.currentDir)
	const dirStack = useSelector(state => state.files.dirStack)
	const dirStackName = useSelector(state => state.files.dirStackName)
	const [dragEnter, setDragEnter] = useState(false)
	const currentDirName = useSelector(state => state.files.currentDirName)
	const view = useSelector(state => state.files.view)
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
		const backDirName = dirStackName.pop()
		dispatch(setCurrentDir(backDirId))
		dispatch(setCurrentDirName(backDirName))
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

				<div className="disk_dir_title">{currentDirName}</div>

				<div className="disk_btns">
					{dirStack.length === 0 ? <div/> :
						<button className='disk_back' onClick={() => clickBackHandler()}><i
							className="fa-solid fa-arrow-left"/></button>}
					<div className="disk_btns_container">
						<button className='disk_create' onClick={() => showPopupHandler()}><i
							className="fa-solid fa-folder-plus"/></button>
						<div className="disk_upload">
							<label htmlFor="disk_upload-input" className="disk_upload-label"><i
								className="fa-solid fa-file-arrow-up"/></label>
							<input multiple={true} onChange={(event) => fileUploadHandler(event)} type="file"
							       id="disk_upload-input" className="disk_upload-input"/>
						</div>
					</div>
					<div className="disk_view_container">
						<button className='disk_list' style={view === 'list' ? {color:'#EF476FFF'} : {color:'#fff'}} onClick={()=> dispatch(setView('list'))}><i className="fa-solid fa-bars"/></button>
						<button className='disk_plate' style={view === 'plate' ? {color:'#EF476FFF'} : {color:'#fff'}} onClick={()=> dispatch(setView('plate'))}><i className="fa-solid fa-border-all"/></button>
					</div>
				</div>

				<FileList sort={sort} setSort={setSort}/>
				<Popup/>
				<Uploader/>
			</div>
	);
};

export default Disk;