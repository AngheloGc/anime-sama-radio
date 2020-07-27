import React from 'react'
import Player from '../../components/player/player'
import { useSelector } from 'react-redux'

const PlayerContainer = () => {

    const { songList } = useSelector(state => state.songList)

    let song;
    
    if(songList.length > 0) { song = songList[0] }
    else { song = { name:'',detail:'',image:'',banner:''} }

    return (

        <div className="as-container-player">

            <Player
                title={song.name}
                description={song.detail}
                cover={song.image}
                banner={song.banner}
            />
            
        </div>
    )

}

export default PlayerContainer;