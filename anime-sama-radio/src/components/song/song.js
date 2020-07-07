import React from 'react'

const Song = ({uid,name,image,detail}) => {

    return (

        <div id={ uid } className="as-component-song">
            <img src={ image } alt={ name } />
            <div className="as-component-song-body">
                <h3 className="as-component-song-body-title"> { name } </h3>
                <p className="as-component-song-body-detail"> { detail } </p>
            </div>
        </div>

    );

}

export default Song;