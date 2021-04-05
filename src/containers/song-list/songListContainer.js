import React from 'react'
import Song from '../../components/song/song'
import { useDispatch, useSelector } from 'react-redux';
import { setSongs } from '../../actions/songList';
import { database } from 'firebase';


const SongListContainer = () => {

    const dispatch = useDispatch();
    
    const { songList } = useSelector(state => state.songList)
    

    database().ref('queue').orderByChild('date').once('value', (snap) => {

        const songs = [];

        snap.forEach((child) => {
            let song = child.val();

            songs.push(song);
        })

        dispatch( setSongs(songs) );

    })


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