import { types } from "../types/types"


export const addSong = (list,newSong) => ({

    type: types.addSong,
    payload: {
        list,
        newSong
    }

})

export const setSongs = (songs) => ({

    type: types.setSongs,
    payload: songs
})


export const removeSong = (list,removedSong) => ({

    type: types.removeSong,
    payload: {
        list,
        removedSong
    }

})