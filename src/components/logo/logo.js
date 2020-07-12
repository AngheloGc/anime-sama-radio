import React from 'react'
import logo from './logo192.png'

const Logo = () => {

    const appName = "Anime Sama Radio"

    return (
        <div className="as-component-logo">

            <img src={ logo } alt={ appName }/>
            <h1>{ appName }</h1>
        
        </div>
    );
}

export default Logo;