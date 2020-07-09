import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addSong } from './../../actions/songList';

const CreateSongForm = ({animeComponent}) => {


    const dispatch = useDispatch();

    const [detail, setDetail] = useState('');

    const state = useSelector(state => state.songList)


    const createSong = (e) => {

        e.preventDefault();

        const name = animeComponent.props.animeName;
        const image = animeComponent.props.animeCoverLarge;
        const banner = animeComponent.props.animeBanner;

        const newSong = {

            uid: name.substring(0,3) + Date.now(),
            name: name,
            image: image,
            detail: detail,
            banner: banner,
        }

        dispatch( addSong([...state.songList], newSong) );

    }

    return (
        <form id="as-create-song-form" className="as-component-createSongForm">

            {animeComponent}
            <input type="text" onInput={e=>setDetail(e.target.value)} placeholder="Especifica si es OP/ED - Ej: Ending 1"/>
            <button onClick={e=>createSong(e)}>Agregar a Cola</button>
            <button>Hacer pedido</button>
        
        </form>
    );

}

export default CreateSongForm;