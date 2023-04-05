import { createContext, useReducer, useEffect } from 'react'

// initiate form context
export const FormContext = createContext();

// form reducer function
export const formReducer = (state, action) => {
    switch(action.type) {
        case 'CHANGE':
            return {
                form: action.payload
            }
        default: state;
    }
}

// custom context provider function
export const FormContextProvider = ({ children }) => {
    const [ state, dispatch ] = useReducer(formReducer, {
        form: null
    })
    // get the logged user when the webpage loads
    useEffect(() => {
        const user = JSON.parse(localStorage.getItem('user')) // user from the local storage
        if(user) {
            dispatch({ type: 'CHANGE', payload: 'Profile'})
            getOnlineUser() // run if user we have in local storage
        }

        // fetching the online user from the API
        async function getOnlineUser() {
            const response = await fetch(`https://samim-server.onrender.com/api/user/online`, {
                headers: {
                    'authorization': `Bearer ${user.accessToken}` // sending the auth token
                }
            })            
            const json = await response.json() // storing the response as json object
            
            // error checkes
            if(response.status == 401) {
                localStorage.removeItem('user')
                return formDispatch({ type: 'CHANGE', payload: 'Register' })
            }
            if(!response.ok) return console.log(json.error)
        }
    }, [ dispatch ])  // useEffect needs dispatches in dependency! cause it's used in it.

    return (
        <FormContext.Provider value={{...state, dispatch}}>
            { children }
        </FormContext.Provider>
    )
}