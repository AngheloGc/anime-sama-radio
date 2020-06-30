import React from 'react';
import Logo from '../../components/logo/logo'
import Searcher from '../../components/searcher/searcher'
import User from '../../components/user/user'

const HeaderContainer = () => {

    return (
        
        <header className="as-header">
            <Logo />
            <Searcher />
            <User />
        </header>

    )
}

export default HeaderContainer;