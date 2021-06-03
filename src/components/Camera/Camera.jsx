import { useRef } from 'react';
import './Camera.css';

function Camera(props) {
	const { handlePhoto } = props;
	const photoInputRef = useRef(null);
	const handleCamera = () => {
		photoInputRef.current.click();
	};
	return (
		<div className="d-flex justify-content-center">
			<input
				type="file"
				accept="image/*"
				capture="environment"
				ref={photoInputRef}
				style={{ display: 'none' }}
				onChange={handlePhoto}
			/>
			<div className="cameraIcon">
				<img
					src="/camera.png"
					alt="camera-icon"
					height="54px"
					width="54px"
					onClick={handleCamera}
					className="camImg"
				/>
			</div>
		</div>
	);
}
export default Camera;
