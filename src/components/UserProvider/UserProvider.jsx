import { useState, useEffect, createContext } from 'react';
import { getUserDocument, onAuthChanged } from '../../lib/firebase';
export const UserContext = createContext(null);
export const SetUserContext = createContext(null);
export const SetIsLoadedContext = createContext(null);

function UserProvider(props) {
	const [ user, setUser ] = useState(null);
	const [ isLoaded, setLoaded ] = useState(false);
	const setCurrentUser = (user) => {
		setUser(user);
		setLoaded(true);
	};
	useEffect(() => {
		let isMounted = true;
		onAuthChanged(async (userAuth) => {
			if (userAuth && isMounted) {
				const document = await getUserDocument(userAuth.uid);
				setUser(document);
				setLoaded(true);
			} else if (isMounted) {
				setUser(null);
				setLoaded(true);
			}
		});
		return () => {
			isMounted = false;
		};
	}, []);
	return (
		<UserContext.Provider value={user}>
			<SetUserContext.Provider value={setCurrentUser}>
				<SetIsLoadedContext.Provider value={isLoaded}>{props.children}</SetIsLoadedContext.Provider>
			</SetUserContext.Provider>
		</UserContext.Provider>
	);
}

export default UserProvider;
