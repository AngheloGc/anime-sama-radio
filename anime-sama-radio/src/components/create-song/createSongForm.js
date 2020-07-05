import React from 'react'

const CreateSongForm = ({animeComponent}) => {

    return (
        <form id="as-create-song-form" className="as-component-createSongForm">

            {animeComponent}
            <input type="text" placeholder="Especifica si es OP/ED - Ej: Ending 1"/>
        
        </form>
    );

}

export default CreateSongForm;