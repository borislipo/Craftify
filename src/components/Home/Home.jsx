import React, { useState, useRef } from 'react';
import { Row, Col, Container, Button, Image, Modal } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import Camera from '../Camera/Camera';
import Preview from '../Preview/Preview';
import Upload from '../Upload/Upload';
import './Home.css';

function Home(props) {
	const history = useHistory();
	const { userName } = props;
	const [ photosArray, setPhotosArray ] = useState([]);
	const [ uploadShow, setUploadShow ] = useState(false);

	const handlePhoto = (e) => {
		if (e.target.files[0]) setPhotosArray((prev) => [ ...prev, e.target.files[0] ]);
	};

	const handleUpload = () => {
		setUploadShow(true);
	};
	const handleClose = () => {
		setUploadShow(false);
	};
	return (
		<React.Fragment>
			<div className="d-flex flex-column HomeWrapper">
				<div className="Logo">CRAFTIFY</div>
				<div className="Feed">
					<div>You don't have any crafts yet</div>
					<img className="SadIcon" src="/sad.png" alt="sad" />
				</div>
				<Preview photosArray={photosArray} />
				<div className="CameraWrapper">
					<Camera handlePhoto={handlePhoto} />
				</div>
			</div>
		</React.Fragment>
	);
}

export default Home;
