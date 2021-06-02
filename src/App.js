import './App.css';
import Application from './components/Application/Application';
import UserProvider from './components/UserProvider/UserProvider';

function App() {
	return (
		<div className="App">
			<UserProvider>
				<Application />
			</UserProvider>
		</div>
	);
}

export default App;
