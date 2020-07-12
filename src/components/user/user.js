import React from 'react'
import logo from './logo192.png'

const User = () => {

    const userName = "Anghelo"

    return (
        <div className="as-component-user">

            <span>Bienvenido, <strong> { userName } </strong>!</span>
            <img src={ logo } alt={ userName }/>
        
        </div>
    );
}

export default User;