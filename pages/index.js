import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css'
import AnimeList from './Components/AnimeList'
import { useEffect, useState } from 'react'


export default function Home() {
   const [animes,setAnimes] = useState([])

   async function fetchAnime () {
      const data=await fetch("https://api.jikan.moe/v4/anime");
      const animeData=await data.json();
      console.log(animeData)
      setAnimes(animeData.data)
   }
   useEffect(()=> {
    fetchAnime()
   },[])
  return (
    <div>
      { animes && animes.length ? <AnimeList animes={animes} /> : 'no data'}

      {/* {'totalAnimes :' + animes.length} */}
      {/* <AnimeList animes={animes} /> */}
    </div>
      )
}
