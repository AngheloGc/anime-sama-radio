import React, { useEffect, useState } from 'react'
import Song from '../../components/song/song'
import { useDispatch, useSelector } from 'react-redux';
import { loadQueue } from '../../firebase/helpers/loadQueue';
import { setSongs } from '../../actions/songList';

const SongListContainer = () => {

    const dispatch = useDispatch();
    
    const { newSong, songList } = useSelector(state => state.songList)
    

    useEffect( () => {

        async function getSongs() {

            const songs = await loadQueue();
            
            dispatch( setSongs(songs) )

        }

        getSongs();


    }, []);


    return (
        <div className="as-container-songList">

            <header>
                <p>En cola</p>
            </header>
            
            <div className="as-container-songList-items">
                {songList.map(({name,image,detail,uid})=>{
                    return <Song key={uid} uid={uid} name={name} image={image} detail={detail} />
                })}
            </div>

        </div>
    );

}


export default SongListContainer;