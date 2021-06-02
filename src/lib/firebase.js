import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/storage';
//import { v4 as uuid } from 'uuid';

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

const generateUserDocument = async (user, additionalData) => {
	if (!user) return;
	const { name } = additionalData;
	const userRef = db.collection('users').doc(`${user.uid}`);
	const snapshot = await userRef.get();
	if (!snapshot.exists) {
		const { email } = user;
		try {
			await userRef.set({
				email,
				name
			});
		} catch (error) {
			console.error(error);
		}
	}
};

export const signInWithGoogle = async () => {
	const authResponse = await auth.signInWithPopup(provider);
	const { user } = authResponse;
	generateUserDocument(user, { name: user.displayName });
};
