import React from 'react';
import ReactDOM from 'react-dom';
import AsRadioApp from './as-radio-app';

import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';

import './styles/styles.scss';


const client = new ApolloClient({
    uri: 'https://graphql.anilist.co'
})

ReactDOM.render( 
    <ApolloProvider client={client}>
        <AsRadioApp />
    </ApolloProvider>,
    document.querySelector('#root')
);