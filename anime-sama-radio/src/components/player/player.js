import React from 'react'

const Player = ({title,description,cover,banner}) => {

    return (

        <div className="as-component-player">
            <div className="as-component-player-content">
                <div className="blured-box" style={{backgroundImage: `url(${banner})`}}></div>
                <img src={ cover } />
                <div className="as-component-player-content-detail">
                    <h2>{ title }</h2>
                    <p>{ description }</p>   
                </div>
            </div>
        </div>

    );

}

export default Player;