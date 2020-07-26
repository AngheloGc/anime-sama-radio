import React from 'react'
import googleIcon from '../../assets/img/googleIcon.png';

const LoginButton = () => {

    return (
        <div className="as-component-loginButton">

            <img src={ googleIcon } alt="Iniciar sesión con Google" />
            <span>Iniciar sesión con Google</span>
        
        </div>
    );
}

export default LoginButton;