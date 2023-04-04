import { useContext } from 'react'
import { AuthContext } from '../context/AuthContext'

// custom auth hook function
export const useAuthContext = () => {
    const context = useContext(AuthContext)

        if(!context) {
            return console.log('useAuthContext can only be used inside AuthContextProvider')
        }

    return context;
}