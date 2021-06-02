import { useState } from 'react';
import { signInWithGoogle, signUpWithEmailAndPassword, signInWithEmailAndPassword } from '../../lib/firebase'

const Login = (props) => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogIn = async (event) => {
        event.preventDefault()
        try {
            await signInWithEmailAndPassword(email, password)
        } catch (err) {
            console.log(err)
            return alert('password and email  dont match')
        }
    }

    const handleLogInGoogle = async (event) => {
        event.preventDefault()
        try {
            await signInWithGoogle()
        } catch (err) {
            console.log(err)
            return alert("something went wrong")
        }
    }

    const handleSignUp = async (event) => {

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
                <button>SignUp</button>
            </div>
        </div>
    )

}

export default Login