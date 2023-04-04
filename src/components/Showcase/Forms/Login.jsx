import { useState } from "react";

// use context and hooks
import { useFormContext } from '../../../hooks/useFormContext'
import { useLogin } from '../../../hooks/useLogin'

function Login() {
    // state of inputs
    const [email, setEmail] = useState('email');
    const [password, setPassword] = useState('password');
    
    // hooks
    const { dispatch: formDispatch } = useFormContext()
    const { login, isLoading, error } = useLogin()

    // login function
    const handleLogin = async(event) => {
        // default action of event is refresh the page
        event.preventDefault();
        return login(email, password)
    }

    return (
        // Showcase log form
        <div className="showcase-form showcase-login-form card">
            <h2>Login</h2>
            <form onSubmit={handleLogin}>
                <div className="form-control">
                    <input 
                        onChange={e => setEmail(e.target.value)} 
                        id="loginInputEmail" 
                        type="email" 
                        name="email" 
                        placeholder="Email" 
                        required 
                    />
                </div>
                <div className="form-control">
                    <input 
                        onChange={e => setPassword(e.target.value)} 
                        id="loginInputPassword" 
                        type="password" 
                        name="password" 
                        placeholder="Password" 
                        required 
                    />
                </div>
                <div className="form-btn">
                    <button
                        id="login_submit_btn" 
                        type="submit" 
                        className="btn">Log in</button>

                    <input
                        className="btn signup" 
                        type="button" value="Sign up" 
                        onClick={() => formDispatch({ type: 'CHANGE', payload: 'Register' })}
                    />
                </div>
            </form>
        </div>
    );
}

export default Login;