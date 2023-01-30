import React from 'react'
import AnimeCard from './AnimeCard'

export default function AnimeList({animes}) {
  return (
    <div>
        <h1> Anime List</h1>
        <div>
            {animes.map(anime=>
                <AnimeCard anime={anime} />)}
            
        </div>

    </div>
  )
}

