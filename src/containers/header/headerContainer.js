import React from 'react';
import Logo from '../../components/logo/logo'
import Searcher from '../../components/searcher/searcher'
import User from '../../components/user/user'
import LoginButton from '../../components/login/loginButton';

const HeaderContainer = () => {

    const isLogin = false;
    let login;

    if(isLogin) {
        login = <User/>
    }else{
        login = <LoginButton/>
    }

    return (
        
        <header className="as-header">
            <Logo />
            <Searcher />
            {login}
        </header>

    )
}

export default HeaderContainer;