import React from 'react'

import { Query } from 'react-apollo';
import { gql } from 'apollo-boost';

import Anime from '../anime/anime';

const AnimeList = () => {

    return (
        <Query query={gql`
        query ($id: Int, $page: Int, $perPage: Int, $search: String) {
            Page (page: $page, perPage: $perPage) {
              pageInfo {
                total
                currentPage
                lastPage
                hasNextPage
                perPage
              }
              media (id: $id, search: $search) {
                id
                coverImage {
                  medium
                }
                bannerImage
                title {
                  romaji
                }
              }
            }
          }
        `}
        variables={
          {
            "search": "Fate",
            "page": 1,
            "perPage": 10
        }
        }
        >
        {({ loading, error, data }) => {
            if (loading) return <div>Loading...</div>
            if (error) return <div>Error</div>
            
            if (data.Page.media.length === 0) return <div className="div-flex-centered"><p style={{fontSize: 12,opacity: 0.7}}>No se encontraron animes.</p></div>

            return <div className="div-grid-gap-5">{
              data.Page.media.map(anime => {
                return (
                  <a href="/">
                    <li>
                      <Anime
                        key={anime.title.romaji}
                        animeName={anime.title.romaji}
                        animeCoverURL={anime.coverImage.medium}
                      />
                    </li>
                  </a>
                )
              })
              }</div>
        }}

        </Query>
    )
    
}

export default AnimeList