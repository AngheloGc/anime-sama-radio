import React from 'react'

const Anime = ({animeName, animeCoverURL, bannerImage, animeCoverLarge}) => {

    return (

        <div className="as-component-anime" data-banner={ bannerImage } data-imageLarge={animeCoverLarge}>

            <img src={ animeCoverURL } alt={ animeName } />
            <span> { animeName } </span>
            
        </div>

    );
}

export default Anime;