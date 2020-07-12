import React from 'react';
import HeaderContainer from './containers/header/headerContainer'
import BodyContainer from './containers/body/bodyContainer'
import ModalContainer from './containers/modal/modalContainer';
import { useSelector } from 'react-redux';

const AsRadioApp = () => {

    const {component, isActive} = useSelector(state => state.modal);

    return (
        
        <main id="main">
            <ModalContainer component={component} isActive={isActive} />
            <HeaderContainer />
            <BodyContainer />
        </main>

    );
}

export default AsRadioApp;