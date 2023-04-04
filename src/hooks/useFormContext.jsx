import { useContext } from 'react'
import { FormContext } from '../context/FormContext'

// custom form hook function
export const useFormContext = () => {
    const context = useContext(FormContext)

        if(!context) {
            return console.log('useFormContext can only be used inside FormContextProvider')
        }

    return context;
}