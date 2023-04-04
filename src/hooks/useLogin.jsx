import { useState } from 'react'

// contexts
import { useAuthContext } from './useAuthContext'
import { useFormContext } from './useFormContext'
import { useProfileContext } from './useProfileContext'

export const useLogin = () => {
    const [ isLoading, setIsLoading ] = useState(null)
    const [ error, setError ] = useState(null);

    // state changers
    const { dispatch } = useAuthContext();
    const { dispatch: formDispatch } = useFormContext();
    const { dispatch: profileDispatch } = useProfileContext();
    
    // main login function
    const login = async (email, password) => {
        setIsLoading(true)
        setError(null)

        // fetching API
        const response = await fetch(`http://localhost:4000/api/user/login`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email, password })
        })
        
        // storing the response as json object
        const json = await response.json()

        // checking the errors
        if(!response.ok) {
            setError(json.message)
            return setIsLoading(false)
        }
        
        // proccessing the response
        if(response.ok) {
            setError(false)

            // storing the user to local storage
            localStorage.setItem('user', JSON.stringify(json))

            // dispatching the states
            dispatch({ type: 'LOGIN', payload: json })
            profileDispatch({ type: 'PROFILE', payload: json.name })
            return formDispatch({ type: 'CHANGE', payload: 'Profile' })
        }
    }
    
    // returning the things that login form needs
    return { login, isLoading, error };
}