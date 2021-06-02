import React from "react";
import { Row, Col, Container, Button, Image } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import "./Home.css";


function Home(props) {
	const history = useHistory();
	const { userName } = props;

	const handleClick = () => {
		history.push('/');
	}


	return (
		<>
		
		<Row className="HeaderContainer" >
		<Col>
		<Image placeholder="Logo" />
		</Col>
		<Col>
		<h1>Some User</h1>
		</Col>
		</Row>

		<Container fluid className="HomeContainer">
		<Row className="mb-5 mt-5 d-flex HomeButton">
		<Col><Button  variant="primary" onClick={handleClick}>Upload Images</Button></Col>
		<Col><Button  variant="primary">Craftify!</Button></Col>
		<Col><Button variant="primary">Other Feature</Button></Col>
		</Row>
		
		<Row className="mb-5 mt-5 d-flex HomeButton">
		<Col><Button variant="primary">Other Feature</Button></Col>
		<Col></Col>
		<Col><Button variant="primary">Other Feature</Button></Col>
		</Row>
		
		<Row className="mb-5 mt-5 d-flex HomeButton">
		<Col><Button variant="primary">Other Feature</Button></Col>
		<Col><Button variant="primary">Other Feature</Button></Col>
		<Col><Button variant="primary">Other Feature</Button></Col>
		</Row>
		</Container>
		</>
	);
}

export default Home;
