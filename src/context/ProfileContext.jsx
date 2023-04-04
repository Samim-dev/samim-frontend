import { createContext, useReducer, useEffect } from 'react'

// initiate auth context
export const ProfileContext = createContext();

// auth reducer function
export const profileReducer = (state, action) => {
    switch(action.type) {
        case 'PROFILE': return { name: action.payload }
        default: state;
    }
}

// custom context provider function
export const ProfileContextProvider = ({ children }) => {
    const [ state, dispatch ] = useReducer(profileReducer, {
        name: null
    })

    useEffect(() => {
        const user = JSON.parse(localStorage.getItem('user'))
        if(user) return dispatch({ type: 'PROFILE', payload: user.name })
    }, [dispatch])

    return (
        <ProfileContext.Provider value={{...state, dispatch}}>
            { children }
        </ProfileContext.Provider>
    )
}