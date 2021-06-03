import axios from 'axios';
export const getCraftResults = async (photoUrl) => {
	console.log(photoUrl);
	const results = await axios.get(
		`http://ec2-18-193-76-251.eu-central-1.compute.amazonaws.com:8080/image?url=${photoUrl}`
	);
	return results;
};
