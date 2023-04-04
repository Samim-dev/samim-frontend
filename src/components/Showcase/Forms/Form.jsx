import Register from './Register'
import Login from './Login'
import Profile from './Profile'

// context
import { useFormContext } from '../../../hooks/useFormContext';


function Form() {
    const { form } = useFormContext();

    // returning form depending on the form state
    switch(form) {
        case 'Login': return <Login />
        case 'Profile': return <Profile />
        default: return <Register />;
    }
}

export default Form;