import React, { useState } from 'react';
import './Home.css';
import { useHistory } from 'react-router-dom';
import { getCraftResults } from '../../lib/craftsApi';
import { uploadPhoto } from '../../lib/firebase';
import Camera from '../Camera/Camera';
import Preview from '../Preview/Preview';
import ResultsArray from '../Results/ResultsArray';

function Home(props) {
	const history = useHistory();
	const { userName } = props;
	const [ result, setResult ] = useState('');
	const [ photosArray, setPhotosArray ] = useState([]);

	const handlePhoto = (e) => {
		if (e.target.files[0]) setPhotosArray((prev) => [ ...prev, e.target.files[0] ]);
	};

	const handleUpload = async () => {
		setResult('paper, bottle');
		// for (const photo of photosArray) {
		// 	const url = await uploadPhoto(photo);
		// 	const result = await getCraftResults(url);
		// 	setResult(result.data);

		// }
	};

	return (
		<React.Fragment>
			<div className="d-flex flex-column HomeWrapper">
				<div className="headerWrapper">
					<div className="Logo">
						<span className="span1">C</span>
						<span className="span2">R</span>
						<span className="span3">A</span>
						<span className="span4">F</span>
						<span className="span5">T</span>
						<span className="span6">I</span>
						<span className="span7">F</span>
						<span className="span8">Y</span>
						<img src="/logo.png" className="logoImg" />
					</div>
				</div>
				<div className="Feed">
					{!result && <div>You don't have any crafts yet</div>}
					{result && <ResultsArray labels={result} />}
				</div>
				<div>
					<Preview photosArray={photosArray} onUpload={handleUpload} />
				</div>

				<div className="CameraWrapper">
					<Camera handlePhoto={handlePhoto} />
				</div>
			</div>
		</React.Fragment>
	);
}

export default Home;
