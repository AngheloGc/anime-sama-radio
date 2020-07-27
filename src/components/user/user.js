import React from 'react'

const User = ({uid, photo, name}) => {

    return (
        <div id={uid} className="as-component-user">

            <span>Bienvenido, <strong> { name } </strong></span>
            <img src={ photo } alt={ name }/>
        
        </div>
    );
}

export default User;