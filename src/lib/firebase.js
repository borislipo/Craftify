import axios from 'axios';
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/storage';
import { v4 as uuid } from 'uuid';

const firebaseConfig = {
	apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
	authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
	projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
	storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
	messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_ID,
	appId: process.env.REACT_APP_FIREBASE_APP_ID
};

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const storage = firebase.storage();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export const signUpWithEmailAndPassword = async (user) => {
	const { email, password, name } = user;
	const authUser = await auth.createUserWithEmailAndPassword(email, password);
	await generateUserDocument(authUser.user, { name });
};

export const signInWithEmailAndPassword = async (email, password) => {
	await auth.signInWithEmailAndPassword(email, password);
};

export const getUserDocument = async (uid) => {
	const usersRef = db.collection('users').doc(uid);
	const doc = await usersRef.get();
	return doc.data();
};

const generateUserDocument = async (user, additionalData) => {
	if (!user) return;
	const { name } = additionalData;
	const userRef = db.collection('users').doc(`${user.uid}`);
	const snapshot = await userRef.get();
	if (!snapshot.exists) {
		const { email } = user;
		await userRef.set({
			email,
			name
		});
	}
};

export const signInWithGoogle = async () => {
	const authResponse = await auth.signInWithPopup(provider);
	const { user } = authResponse;
	await generateUserDocument(user, { name: user.displayName });
};

export const onAuthChanged = async (userProviderCallback) => {
	try {
		auth.onAuthStateChanged(async (userAuth) => {
			userProviderCallback(userAuth);
		});
	} catch (err) {
		userProviderCallback(null);
	}
};

//returns the url of the photo
export const uploadPhoto = async (photo) => {
	// const eventRef = storage.ref('photos');
	// const profileRef = eventRef.child(`${'photos'}/${photo.name}`);
	// await profileRef.put(photo);
	// //await savePhotoInDB(photo.name, userId);
	// return await profileRef.getDownloadURL();
	const data = new FormData();
	data.append('file', photo);
	data.append('cloud_name', 'dleoqo9bp');
	data.append('api_key', '652645468693867');
	data.append('public_id', uuid());
	data.append('upload_preset', 'rv798qm9');

	let response = '';
	try {
		response = await axios.post('https://api.cloudinary.com/v1_1/dleoqo9bp/image/upload', data);
	} catch (err) {
		console.log(err.message);
	}

	return response.data.url;
};

const savePhotoInDB = async (photoPath, userId) => {
	const userRef = db.collection('users').doc(`${userId}`).collection('photos');
	await userRef.add({
		photoPath,
		createdDate: new Date()
	});
};
