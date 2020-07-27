import { types } from "../types/types"


export const showModal = (component, isActive) => ({

    type: types.showModal,
    payload: {
        component,
        isActive
    }

})

export const closeModal = (component, isActive) => ({

    type: types.closeModal,
    payload: {
        component,
        isActive
    }

})

