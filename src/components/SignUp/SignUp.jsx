import { useState } from 'react';
import { signUpWithEmailAndPassword } from '../../lib/firebase'
import './SignUp.css'

const SignUp = () => {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleSignUp = async (event) => {
        event.preventDefault()
        const user = {
            name,
            email,
            password
        }
        try {
            await signUpWithEmailAndPassword(user)
            setName('')
            setEmail('')
            setPassword('')
        } catch (err) {
            console.log(err)
            return console.log(err)
        }
    }

    return (
        <div className="container d-flex flex-column mt-5">
            <img src="https://res.cloudinary.com/drcoopxns/image/upload/v1622640448/workigy_logo_ymiodi.jpg" alt="" />
            <form onSubmit={(event) => handleSignUp(event)}>
                <div className=" d-flex flex-column container">
                    <div className=" d-flex nameInput container mt-3">
                        <label className="form-label">Name</label>
                        <input
                            className="inputName form-control"
                            type="text"
                            placeholder="Enter your full name"
                            onChange={(event) => setName(event.target.value)}
                            value={name} />
                    </div>
                    <div className=" container d-flex emailInput mt-3">
                        <label className="form-label">Email</label>
                        <input
                            className="inputEmail form-control"
                            type="email"
                            placeholder="Enter an email"
                            onChange={(event) => setEmail(event.target.value)}
                            value={email} />
                    </div>
                    <div className="passwordInput container d-flex mt-3">
                        <label className="form-label">Password</label>
                        <input
                            className="inputPass form-control"
                            type="password"
                            placeholder="Choose a password"
                            onChange={(event) => setPassword(event.target.value)} 
                            value={password}/>
                    </div>
                    <button 
                    className="btn btn-primary mt-3"
                    type="submit">Create Account</button>
                </div>
            </form>
            <div className="container d-flex flex-row mt-3">
                <div>You have an account already?</div> &nbsp;
               <div><a href="/login" >LogIn</a></div>
            </div>
        </div>

    )


}

export default SignUp