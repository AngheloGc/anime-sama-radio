import React, { useState } from 'react'
import AnimeList from './animeList'

const Searcher = () => {

    const [visible, setVisible] = useState(false);

    const handleVisible = () => setVisible(true);

    const handleNotVisible = () => setVisible(false);

    return (
        <form className="as-component-searcher">

            <input type="text" onFocus={handleVisible} onBlur={handleNotVisible} />
            <button type="submit">Buscar</button>
            { visible && 
                <div className="as-component-searcher-animeList" >
                    <AnimeList />
                </div>
            }
        </form>
    );
}

export default Searcher;