import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addSong } from './../../actions/songList';
import { database } from 'firebase/app';
import { closeModal } from '../../actions/modal';

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

        database().ref('queue/' + newSong.uid).set({...newSong,date:Date.now()});

        dispatch( closeModal({},false));

    }

    return (
        <form id="as-create-song-form" className="as-component-createSongForm">

            {animeComponent}
            <input type="text" onInput={e=>setDetail(e.target.value)} placeholder="Especifica si es OP/ED - Ej: Ending 1"/>
            <div className="as-component-createSongForm-buttons">
                <button onClick={e=>createSong(e)}>Agregar a Cola</button>
                {/* <button  onClick={e=>e.preventDefault()}>Hacer pedido</button> */}
            </div>
        
        </form>
    );

}

export default CreateSongForm;