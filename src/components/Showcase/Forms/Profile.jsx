import { useContext } from "react";

// contexts
import { useAuthContext } from '../../../hooks/useAuthContext'
import { useProfileContext } from '../../../hooks/useProfileContext'
import { useFormContext } from '../../../hooks/useFormContext'

// user profile pic
import profileIcon from './ProfileIcon/user.png'

function Profile() {
    // state changers
    const { dispatch: authDispatch } = useAuthContext()
    const { dispatch: formDispatch } = useFormContext()
    const { name, dispatch: profileDispatch } = useProfileContext()
    
    // logout main function
    const handleLogout = (event) => {        
        event.preventDefault(); // default action of event is refresh the page

        // dispatching states and updating local storage
        authDispatch({ type: 'LOGOUT' })
        profileDispatch({ type: 'PROFILE', payload: null })

        localStorage.removeItem('user')
        return formDispatch({ type: 'CHANGE', payload: 'Register' })
    }

    return (
        // logged profile
        <div id="profile-info-area" className="showcase-form profile-card card text-center">
            <img
             className="profile-icon-size" 
             src={profileIcon} 
             alt="profile" 
            />

            <h2 id="profile-name"><b>{name}</b></h2>
            <p className="profile-text">
                You are ready to deploy. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis commodo condimentum eros.
            </p>

            <button
             onClick={e => handleLogout(e)} 
             id="logout-button" 
             className="btn profile-text-margin">Log Out</button>
        </div>
    );
}

export default Profile;