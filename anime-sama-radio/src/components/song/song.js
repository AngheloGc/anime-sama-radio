import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { removeSong } from '../../actions/songList';

const Song = ({uid,name,image,detail}) => {

    const dispatch = useDispatch();

    const {songList} = useSelector(state => state.songList);

    const [hover, setHover] = useState(false);

    const handleRemove = (e,uid) => {

        e.preventDefault();

        const removedSong = songList.find( song => song.uid == uid );

        const list = songList.filter( song => song !== removedSong );

        dispatch( removeSong([...list], removedSong) );

    }

    return (

        <div
            id={ uid }
            className="as-component-song"
            onMouseEnter={e=>setHover(true)}
            onMouseLeave={e=>setHover(false)}
        >
            <img src={ image } alt={ name } />
            <div className="as-component-song-body">
                <h3 className="as-component-song-body-title"> { name } </h3>
                <p className="as-component-song-body-detail"> { detail } </p>
            </div>
            {hover && <button
                className="as-component-song-removeButton"
                onClick={e=>handleRemove(e,uid)}
            >x
            </button>}
        </div>

    );

}

export default Song;