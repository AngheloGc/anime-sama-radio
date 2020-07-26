import React from 'react'

const Player = ({title,description,cover,banner}) => {

    return (

        <div className="as-component-player">
            
            {cover!=='' && 
            <div className="as-component-player-content">
                <div className="blured-box" style={{backgroundImage: `url(${banner})`}}></div>
                <header>
                    <p>
                        <span className="pointIcon">.</span>
                        <span>Está sonando ahora</span>
                    </p>
                    <span>Cambiar</span>
                </header>
                <div className="div-flex-centered">
                    <img className="as-component-player-content-cover" src={ cover } alt="cover"/>
                    <div className="as-component-player-content-detail">
                        <h2>{ title }</h2>
                        <p>{ description }</p>   
                    </div>
                </div>
            </div>
            }
        </div>

    );

}

export default Player;