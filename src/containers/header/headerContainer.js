import React from 'react';
import Logo from '../../components/logo/logo'
import Searcher from '../../components/searcher/searcher'
import User from '../../components/user/user'
import LoginButton from '../../components/login/loginButton';
import { useSelector } from 'react-redux';

const HeaderContainer = () => {

    const state = useSelector(state => state.auth)

    return (
        
        <header className="as-header">
            <Logo />
            <Searcher />
            {state?.uid && <User uid={state.uid} photo={state.photo} name={state.name}/> || <LoginButton/>}
        </header>

    )
}

export default HeaderContainer;