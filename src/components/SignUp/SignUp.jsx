import { useState } from 'react';
import { signUpWithEmailAndPassword} from '../../lib/firebase'

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
        try{
            await signUpWithEmailAndPassword(user)
        }catch(err){
            console.log(err)
            return console.log(err)
        }

    }

    return (
        <div>
            <div>
                <h3>Sign Up</h3>
            </div>
            <div>
                <form onSubmit={(event) => handleSignUp(event)}>
                    <div className="nameInput">
                        <label>Enter Full Name :</label>
                        <input 
                        type="text"
                        onChange={(event) => SetName(event.target.value)}/>
                    </div>
                    <div className="emailInput">
                        <label>Enter Email :</label>
                        <input
                            type="email"
                            onChange={(event) => setEmail(event.target.value)} />
                    </div>
                    <div className="passwordInput">
                        <label>Enter Password :</label>
                        <input
                            type="password"
                            onChange={(event) => setPassword(event.target.value)} />
                    </div>
                    <button type="submit">Create Account</button>
                </form>
            </div>
        </div>

    )


}

export default SignUp