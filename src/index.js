import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';

import AsRadioApp from './as-radio-app';

import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';

import './styles/styles.scss';
import { store } from './store/store';


const client = new ApolloClient({
    uri: 'https://graphql.anilist.co'
})

ReactDOM.render( 
    <ApolloProvider client={client}>
        <Provider store={store}>
            <AsRadioApp />
        </Provider>
    </ApolloProvider>,
    document.querySelector('#root')
);