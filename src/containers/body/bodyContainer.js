import React from 'react';
import PlayerContainer from '../player/playerContainer'
import SongListContainer from '../song-list/songListContainer'
import OrdersContainer from '../orders/ordersContainer'

const BodyContainer = () => {

    return (
        
        <section className="as-section">
            <PlayerContainer />
            <SongListContainer />
            <OrdersContainer />
        </section>

    )
}

export default BodyContainer;