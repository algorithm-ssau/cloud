import React from 'react';
import {useSelector} from "react-redux";
import File from "./file/File";
import {CSSTransition, TransitionGroup} from "react-transition-group";

import ('./fileList.scss')

const FileList = () => {

	const files = useSelector(state => state.files.files)

	return (
		<div className='fileList'>
			<div className="fileList_header">
				<div className="fileList_name">Name</div>
				<div className="fileList_date">Date</div>
				<div className="fileList_size">Size</div>
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
};

export default FileList;