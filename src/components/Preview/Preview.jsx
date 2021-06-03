import './Preview.css';

function Preview(props) {
	const { photosArray, onUpload } = props;
	return (
		<div className="Preview">
			<div className="PreviewImageWrapper">
				{photosArray.map((image) => {
					return <img className="PreviewImage" src={URL.createObjectURL(image)} alt="photo" />;
				})}
			</div>
			<div className="uploadIconWrapper">
				<img className="UploadIcon" src="/upload.png" alt="upload" onClick={onUpload} />
			</div>
		</div>
	);
}
export default Preview;
