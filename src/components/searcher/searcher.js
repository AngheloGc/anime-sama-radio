import React, { useState } from 'react'
import AnimeList from './animeList'

const Searcher = () => {

    const [visible, setVisible] = useState(false);

    const handleVisible = () => setVisible(true);

    const handleNotVisible = () => setTimeout(()=>{setVisible(false)},200);

    const [searchKey, setSearchKey] = useState('0');

    const handleSearchKey = (value) => setSearchKey(value);

    return (
        <form className="as-component-searcher">

            <input type="text" onFocus={handleVisible} onBlur={handleNotVisible} onChange={(e)=>handleSearchKey(e.target.value)} />
            <button type="submit" onClick={(e)=>{e.preventDefault();}}>Buscar</button>
            { visible && 
                <div className="as-component-searcher-animeList" >
                    <AnimeList searchKey={searchKey} />
                </div>
            }
        </form>
    );
}

export default Searcher;