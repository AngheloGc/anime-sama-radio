import { types } from '../types/types'

export const songListReducer = (state = {songList: []}, action) => {

    switch (action.type) {
        
        case types.addSong:

            return {

                songList: [...action.payload.list,action.payload.newSong], 
                newSong: action.payload.newSong
                
            }
        
        case types.removeSong:

            return { 
                songList: [], 
            }
    
        default:
            
            return state
    }
}