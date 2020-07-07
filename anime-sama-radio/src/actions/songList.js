import { types } from "../types/types"


export const addSong = (list,newSong) => ({

    type: types.addSong,
    payload: {
        list,
        newSong
    }

})
