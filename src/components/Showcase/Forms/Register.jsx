import { useState } from "react";

// use context and hooks
import { useFormContext } from '../../../hooks/useFormContext'
import { useRegister } from '../../../hooks/useRegister'

function Register() {
    // state of inputs
    const [ name, setName ] = useState('');
    const [ email, setEmail ] = useState('');
    const [ password, setPassword ] = useState('');

    // hooks
    const { dispatch: formDispatch } = useFormContext()
    const { register, isLoading, error } = useRegister()

    // register function
    const handleRegister = async(event) => {
        // default action of event is refresh the page
        event.preventDefault();
        return register(name, email, password)
    }

    return (
        // Showcase register form
        <div className="showcase-form showcase-signup-form card">
            <h2>Register</h2>
            <form onSubmit={handleRegister}>
                <div className="form-control">
                    <input 
                        onChange={e => setName(e.target.value)} 
                        id="signupInputName" 
                        type="text" 
                        name="name" 
                        placeholder="Name" 
                    />
                </div>
                <div className="form-control">
                    <input 
                        onChange={e => setEmail(e.target.value)} 
                        id="signupInputEmail" 
                        type="email" 
                        name="email" 
                        placeholder="Email" 
                    />
                </div>
                <div className="form-control">
                    <input
                        onChange={e => setPassword(e.target.value)}
                        id="signupInputPassword"
                        type="password"
                        name="password"
                        placeholder="Password"
                    />
                </div>
                <div className="form-btn">
                    <button
                        id="signup_submit_btn" 
                        type="submit" 
                        className="btn">Sign up</button>
                        
                    <input 
                        className="btn login" 
                        type="button" value="Log in" 
                        onClick={() => formDispatch({ type: 'CHANGE', payload: 'Login' })} 
                    />
                </div>
            </form>
        </div>
        
    );
}

export default Register;