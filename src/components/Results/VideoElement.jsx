import React from 'react';
import { Card, Container, Row, Col, Image } from 'react-bootstrap';

function VideoElement(props) {
	const { VideoID, VideoTitle } = props;
	const baseURL = `https://www.youtube.com/embed/${VideoID}`;
	return (
		<React.Fragment>
			<Card>
				<Card.Body>
					<Container>
						<iframe title={VideoTitle} width="250" height="250" src={baseURL} />
					</Container>
					<Row>
						<Col>
							<Image
								height="20"
								width="20"
								src="https://res.cloudinary.com/drcoopxns/image/upload/v1622715228/share_lrhigs.png"
							/>
						</Col>
						<Col>
							<Image
								height="20"
								width="20"
								src="https://res.cloudinary.com/drcoopxns/image/upload/v1622715180/mg_oxdvqa.png"
							/>
						</Col>
					</Row>
				</Card.Body>
			</Card>
		</React.Fragment>
	);
}

export default VideoElement;
