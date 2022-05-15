import React from 'react';
import dirLogo from '../../../../assets/img/directory.svg'
import fileLogo from '../../../../assets/img/file.svg'
import ('./file.scss')

const File = ({file}) => {
	return (
		<div className='file'>
			<img width='40px' src={file.type === 'dir' ? dirLogo : fileLogo} className="file_img"/>
			<div className="file_name">{file.name}</div>
			<div className="file_date">{file.date.slice(0,10)}</div>
			<div className="file_size">{file.size}</div>

		</div>
	);
};

export default File;