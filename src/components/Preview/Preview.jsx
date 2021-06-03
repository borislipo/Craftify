import UploadList from '../Upload/UploadList';
import './Preview.css';

function Preview(props) {
	const { photosArray } = props;
	return (
		<div className="Preview">
			<div className="PreviewImageWrapper">
				{photosArray[0] && (
					<img className="PreviewImage" src={URL.createObjectURL(photosArray[0])} alt="photo" />
				)}
			</div>
			<div className="PreviewImageWrapper">
				{photosArray[1] && (
					<img className="PreviewImage" src={URL.createObjectURL(photosArray[0])} alt="photo" />
				)}
			</div>
			<div className="PreviewImageWrapper">
				{photosArray[2] && (
					<img className="PreviewImage" src={URL.createObjectURL(photosArray[0])} alt="photo" />
				)}
			</div>
			<div className="PreviewImageWrapper">
				{photosArray[3] && (
					<img className="PreviewImage" src={URL.createObjectURL(photosArray[0])} alt="photo" />
				)}
			</div>
			<div className="PreviewImageWrapper">
				{photosArray[4] && (
					<img className="PreviewImage" src={URL.createObjectURL(photosArray[0])} alt="photo" />
				)}
			</div>
			<img className="UploadIcon" src="/upload.png" alt="upload" />
		</div>
	);
}
export default Preview;
