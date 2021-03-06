import React from 'react';
import {useSelector} from "react-redux";
import File from "./file/File";
import {CSSTransition, TransitionGroup} from "react-transition-group";


import ('./fileList.scss')

const FileList = ({sort, setSort}) => {

	const files = useSelector(state => state.files.files)
	const view = useSelector(state => state.files.view)

	if (files.length === 0) {
		return <div className='loader' style={{fontSize: '25px'}}>Files not found.</div>
	}

	if (view === 'plate') {
		return (
			<div className='filePlate'>
				{files.map(file =>
					<File key={file._id} file={file}/>)
				}
			</div>
		);
	}

	if (view === 'list') {
		return (
			<div className='fileList'>
				<div className="fileList_header">
					<div className="fileList_name" onClick={() => setSort('name')}>Name {sort === 'name' ?
						<i className="fa-solid fa-arrow-down"/> : ''}</div>
					<div className="fileList_date" onClick={() => setSort('date')}>Date {sort === 'date' ?
						<i className="fa-solid fa-arrow-down"/> : ''}</div>
					<div className="fileList_size" onClick={() => setSort('size')}>Size {sort === 'size' ?
						<i className="fa-solid fa-arrow-down"/> : ''}</div>
				</div>
				<TransitionGroup>
					{files.map(file =>
						<CSSTransition
							key={file._id}
							timeout={500}
							classNames={'file'}
							exit={false}
						>
							<File file={file}/>
						</CSSTransition>
					)}
				</TransitionGroup>
			</div>
		);
	}
};

export default FileList;