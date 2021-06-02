import React, { useState, useRef } from 'react';
import { Row, Col, Container, Button, Image, Modal } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import Upload from '../Upload/Upload';
import './Home.css';

function Home(props) {
	const history = useHistory();
	const { userName } = props;
	const [ photosArray, setPhotosArray ] = useState([]);
	const [ uploadShow, setUploadShow ] = useState(false);
	const photoInputRef = useRef(null);

	const handlePhoto = (e) => {
		if (e.target.files[0]) setPhotosArray((prev) => [ ...prev, e.target.files[0] ]);
	};
	const handleCamera = () => {
		photoInputRef.current.click();
	};
	const handleUpload = () => {
		setUploadShow(true);
	};
	const handleClose = () => {
		setUploadShow(false);
	};
	return (
		<React.Fragment>
			<Modal
				show={uploadShow}
				onHide={handleClose}
				animation={false}
				aria-labelledby="contained-modal-title-vcenter"
				centered
			>
				<Modal.Header closeButton>
					<Modal.Title>Upload Your Photos</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<Upload images={photosArray} />
				</Modal.Body>
			</Modal>
			<div className="d-flex flex-column">
				<Image
					className="Logo"
					src="https://res.cloudinary.com/drcoopxns/image/upload/v1622640448/workigy_logo_ymiodi.jpg"
				/>
				<Container fluid className="HomeContainer">
					<Row className="mb-5 mt-5 d-flex HomeButton">
						<Col>
							<Button  className="squareButton" variant="primary" onClick={handleUpload}>
								Upload Images
							</Button>
						</Col>
						<Col>
							<Button className="squareButton" variant="primary" onClick={handleCamera}>
								Craftify!
							</Button>{' '}
							<input
								type="file"
								accept="image/*"
								capture="environment"
								ref={photoInputRef}
								style={{ display: 'none' }}
								onChange={handlePhoto}
							/>
						</Col>
						<Col>
							<Button  className="squareButton" variant="primary">Other Feature</Button>
						</Col>
					</Row>

					<Row className="mb-5 mt-5 d-flex HomeButton">
						<Col>
							<Button  className="squareButton" variant="primary">Other Feature</Button>
						</Col>
						<Col />
						<Col>
							<Button  className="squareButton" variant="primary">Other Feature</Button>
						</Col>
					</Row>

					<Row className="mb-5 mt-5 d-flex HomeButton">
						<Col>
							<Button className="squareButton" variant="primary">Other Feature</Button>
						</Col>
						<Col>
							<Button className="squareButton" variant="primary">Other Feature</Button>
						</Col>
						<Col>
							<Button className="squareButton" variant="primary">Other Feature</Button>
						</Col>
					</Row>
				</Container>
			</div>
		</React.Fragment>
	);
}

export default Home;
