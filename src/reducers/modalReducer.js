import { types } from '../types/types'

export const modalReducer = (state = {isActive:false}, action) => {

    switch (action.type) {
        
        case types.showModal:

            return {
                isActive: true,
                component: action.payload.component,
            }
        
        case types.closeModal:

            return { 
                isActive: false
            }
    
        default:
            
            return state
    }
}