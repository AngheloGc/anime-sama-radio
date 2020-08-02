import React from 'react'
import googleIcon from '../../assets/img/googleIcon.png';
import { startGoogleLogin } from './../../actions/auth';
import { useDispatch } from 'react-redux';

const LoginButton = () => {

    const dispatch = useDispatch();

    const handleGoogleLogin = () => {
        dispatch( startGoogleLogin() );
    }

    return (
        <div className="as-component-loginButton" onClick={ handleGoogleLogin }>

            <img src={ googleIcon } alt="Google" />
            <span>Iniciar sesión</span>
        
        </div>
    );
}

export default LoginButton;