import React from 'react'

const Anime = ({animeName, animeCoverURL}) => {

    return (

        <div className="as-component-anime">

            <img src={ animeCoverURL } alt={ animeName } />
            <span> { animeName } </span>
            
        </div>

    );
}

export default Anime;