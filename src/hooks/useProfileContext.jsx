import { useContext } from 'react'
import { ProfileContext } from '../context/ProfileContext'

// custom profile hook function
export const useProfileContext = () => {
    const context = useContext(ProfileContext)

        if(!context) {
            return console.log('useProfileContext can only be used inside ProfileContextProvider')
        }

    return context;
}