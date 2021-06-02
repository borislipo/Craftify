import { useContext, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { signInWithGoogle, signInWithEmailAndPassword } from '../../lib/firebase';
import { UserContext } from '../UserProvider/UserProvider';
import './Login.css'

const Login = (props) => {
	const [ email, setEmail ] = useState('');
	const [ password, setPassword ] = useState('');
	let history = useHistory();
	const currentUser = useContext(UserContext);
	console.log(currentUser);
	const handleLogIn = async (event) => {
		event.preventDefault();
		try {
			await signInWithEmailAndPassword(email, password);
			setEmail('');
			setPassword('');
		} catch (err) {
			return alert(err.message);
		}
	};

	const handleLogInGoogle = async (event) => {
		event.preventDefault();
		try {
			await signInWithGoogle();
		} catch (err) {
			return alert(err.message);
		}
	};

	const redirect = () => {
		history.push('/signup');
	};

	return (
		<div className="container d-flex flex-column mt-5">
            <img src="https://res.cloudinary.com/drcoopxns/image/upload/v1622640448/workigy_logo_ymiodi.jpg" alt="" />
			<form onSubmit={(event) => handleLogIn(event)} action="">
				<div className=" d-flex flex-column ">
					<div className="emailInput  container d-flex mt-3 align-items-center">
                        <label for="signIn" className="form-label">Email </label>
						<input
                            id="signIn"
                            className="inputEmail form-control"
							required
							type="email"
							placeholder="Enter your email"
							onChange={(event) => setEmail(event.target.value)}
						/>
					</div>
                    <div className="passwordInput container d-flex  mt-4  align-items-center">
                        <label className="form-label">Password </label>
						<input
                            className="inputPass form-control"
							required
							type="password"
							placeholder="Enter your password"
							onChange={(event) => setPassword(event.target.value)}
						/>
					</div>
					<div className="LoginButton container d-flex justify-content-center mt-4">
                        <button type="submit"
                            className="btn btn-primary w-100">Log In </button>
					</div>
				</div>
			</form>
			<div className="googleLogIn container">
				<button onClick={(event) => handleLogInGoogle(event)}
                    className="GoogleButton btn mt-3 p-2 justify-content-center align-items-center space-between w-100 d-flex flex-row">
                    <div>Log In With Google</div>&nbsp;
                    <img src={"https://pics.freeicons.io/uploads/icons/png/2659939281579738432-512.png"}
                        width="20px" height="20px"
                        alt="google icon" 
                        />
				</button>
			</div>
			<div className="container d-flex flex-row mt-3">
                <div>Dont have an account yet?</div> &nbsp;&nbsp;
               <div><a onClick={redirect} href="" >SignUp</a></div> 
			</div>
		</div>
	);
};

export default Login;
