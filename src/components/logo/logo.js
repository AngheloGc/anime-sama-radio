import React from 'react'
import logo from './logosama.png'

const Logo = () => {

    const appName = "Anime Sama Radio"

    return (
        <div className="as-component-logo">

            <img src={ logo } alt={ appName }/>
        
        </div>
    );
}

export default Logo;