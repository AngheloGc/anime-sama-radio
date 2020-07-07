import React from 'react'
import Song from '../../components/song/song'
import { useSelector } from 'react-redux';

const SongListContainer = () => {

    const {newSong, songList} = useSelector(state => state.songList);

    return (
        <div className="as-container-songList">
            {songList.map(({name,image,detail,uid})=>{

                return <Song key={uid} uid={uid} name={name} image={image} detail={detail} />

            })}
        </div>
    );

}

export default SongListContainer;