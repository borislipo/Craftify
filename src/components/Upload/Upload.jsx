import React, { useState } from 'react';
import '../../components/Upload/Upload.css';
import { withRouter } from 'react-router-dom';
import UploadList from './UploadList';
import { v4 as uuidv4 } from 'uuid';
const Upload = (props) => {
	const [ imageUploaded, setImageUploaded ] = useState([]);
	const { images } = props;
	const id = uuidv4();
	const uploadTheImage = () => {};

	return (
		<div className="uploadWrapper">
			<div className="UploadText">Upload</div>
			<div className="showUploads">
				<UploadList images={images} />
			</div>
			<div className="btnWrapper">
				<button className="uploadImageBtn" onClick={uploadTheImage}>
					Upload
				</button>
			</div>
		</div>
	);
};

export default Upload;
