import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { signInWithGoogle, signInWithEmailAndPassword } from '../../lib/firebase'

const Login = (props) => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    let history = useHistory();

    const handleLogIn = async (event) => {
        event.preventDefault()
        try {
            const user = await signInWithEmailAndPassword(email, password)
            console.log(user);
            setEmail('')
            setPassword('')
        } catch (err) {
            return alert(err.message)
        }
    }

    const handleLogInGoogle = async (event) => {
        event.preventDefault()
        try {
            await signInWithGoogle()
        } catch (err) {
            return alert(err.message)
        }
    }

    const redirect = () => {
        history.push('/signup')
    }


    return (
        <div className="d-flex flex-column justify-content-center">
            <h2>Craftify </h2>
            <form onSubmit={(event) => handleLogIn(event)} action="">
                <div>
                    <div className="emailInput">
                        <label >Email : </label>
                        <input
                            required
                            type="email"
                            placeholder="Enter your email"
                            onChange={(event) => setEmail(event.target.value)} />
                    </div>
                    <div className="passwordInput">
                        <label >Password : </label>
                        <input
                            required
                            type="password"
                            placeholder="Enter your password"
                            onChange={(event) => setPassword(event.target.value)} />
                    </div>
                    <div className="LoginButton">
                        <button type="submit">Log In</button>
                    </div>
                </div>
            </form>
            <div className="googleLogIn">
                <button onClick={(event) => handleLogInGoogle(event)} className="GoogleButton">Log In With Google</button>
            </div>
            <div>
                <p>Dont have an account yet?</p>
                <button onClick={redirect}>SignUp</button>
            </div>
        </div>
    )

}

export default Login