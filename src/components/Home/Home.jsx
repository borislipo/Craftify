import React, { useState, useRef } from 'react';
import { Row, Col, Container, Button, Image } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import './Home.css';

function Home(props) {
	const history = useHistory();
	const { userName } = props;
	const [ photosArray, setPhotosArray ] = useState([]);
	const photoInputRef = useRef(null);
	const handleClick = () => {
		history.push('/');
	};
	const handlePhoto = (e) => {
		if (e.target.files[0]) setPhotosArray((prev) => [ ...prev, e.target.files[0] ]);
	};
	const handleCamera = () => {
		photoInputRef.current.click();
	};
	return (
		<React.Fragment>
			<Row className="HeaderContainer">
				<Col>
					<Image placeholder="Logo" />
				</Col>
				<Col>
					<h1>Some User</h1>
				</Col>
			</Row>

			<Container fluid className="HomeContainer">
				<Row className="mb-5 mt-5 d-flex HomeButton">
					<Col>
						<Button variant="primary" onClick={handleClick}>
							Upload Images
						</Button>
					</Col>
					<Col>
						<Button variant="primary" onClick={handleCamera}>
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
						<Button variant="primary">Other Feature</Button>
					</Col>
				</Row>

				<Row className="mb-5 mt-5 d-flex HomeButton">
					<Col>
						<Button variant="primary">Other Feature</Button>
					</Col>
					<Col />
					<Col>
						<Button variant="primary">Other Feature</Button>
					</Col>
				</Row>

				<Row className="mb-5 mt-5 d-flex HomeButton">
					<Col>
						<Button variant="primary">Other Feature</Button>
					</Col>
					<Col>
						<Button variant="primary">Other Feature</Button>
					</Col>
					<Col>
						<Button variant="primary">Other Feature</Button>
					</Col>
				</Row>
			</Container>
		</React.Fragment>
	);
}

export default Home;
