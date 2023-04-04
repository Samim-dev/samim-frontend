import { useState } from 'react'
import { useAuthContext } from './useAuthContext'
import { useFormContext } from './useFormContext'
import { useProfileContext } from './useProfileContext'

export const useRegister = () => {
    const [ isLoading, setIsLoading ] = useState(null)
    const [ error, setError ] = useState(null);

    // contexts
    const { dispatch } = useAuthContext();
    const { dispatch: formDispatch } = useFormContext();
    const { dispatch: profileDispatch } = useProfileContext();
    
    // main register function
    const register = async (name, email, password) => {
        setIsLoading(true)
        setError(null)

        // fetching API
        const response = await fetch(`http://localhost:4000/api/user/register`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ name, email, password })
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
    
    // returning the things that register form needs
    return { register, isLoading, error };
}