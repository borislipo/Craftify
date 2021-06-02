import { useState } from 'react';

const Login = (props) => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return(
        <div>
            <h2>`Craftify :)`</h2>
            <form action="">
                <div>
                    <div className="emailInput">
                        <label htmlFor="">Email : </label>
                        <input 
                        required
                        type="email"
                        placeholder="Enter your email"
                        onChange={(event) => setEmail(event.target.value)}/>
                    </div>
                    <div className="passwordInput">
                        <label htmlFor="">Password : </label>
                        <input
                            required
                            type="password"
                            placeholder="Enter your password"
                            onChange={(event) => setPassword(event.target.value)} />
                    </div>
                </div>
                <div className="googleLogIn">
                    <button onClick={props.signin}className="GoogleButton">Log In With Google</button>
                </div>
            </form>
        </div>
    )

    export default Login

}