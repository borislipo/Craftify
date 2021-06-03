
import './Preview.css';

function Preview(props) {
	const { photosArray } = props;
	return (
		<div className="Preview">
			<div className="PreviewImageWrapper">
				{photosArray.map((image) => {
					return <img className="PreviewImage" src={URL.createObjectURL(image)} alt="photo" />;
				})}
			</div>
			<img className="UploadIcon" src="/upload.png" alt="upload" />
		</div>
	);
}
export default Preview;
