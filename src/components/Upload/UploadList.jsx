import React from 'react';

const UploadList = (props) => {
	const { images } = props;
	return (
		<div className="uploadList">
			{images.map((image) => {
				return (
					<div key={image.name} className="PreviewImage">
						<img src={URL.createObjectURL(image)} alt="preview" />
					</div>
				);
			})}
		</div>
	);
};

export default UploadList;
