import React from 'react'

import { Query } from 'react-apollo';

import Anime from '../anime/anime';

import { useDispatch } from 'react-redux';
import { showModal } from '../../actions/modal';

import CreateSongForm from '../create-song/createSongForm';
import { schema } from './schema';


const AnimeList = ({searchKey}) => {

  const dispatch = useDispatch();

  const handleModal = (component) => dispatch(showModal(component,true));

  return (
      
      <Query
        query={schema.query}
        variables={schema.setVariables(searchKey,1,10)}
      >

      {({ loading, error, data }) => {

          if (loading) return <div>Loading...</div>
          if (error) return <div>Error</div>
          if (!data.Page.media.length) return <div className="div-flex-centered"><p style={{fontSize: 12,opacity: 0.7}}>No se encontraron animes.</p></div>

          return (
          
            <div className="div-grid-gap-5">
            {
              data.Page.media.map(anime => {

                const name = anime.title.romaji;
                const image = anime.coverImage.medium;

                const animeComponent = <Anime               
                  animeName={name}
                  animeCoverURL={image}
                />     

                const form = <CreateSongForm animeComponent={animeComponent}/>

                return (
                  <li style={{cursor:'pointer'}} key={name} onClick={()=>handleModal(form)}>
                    {animeComponent}             
                  </li>
                )
              })
            }
            </div>
          )
      }}

      </Query>
  )
}

export default AnimeList