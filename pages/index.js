import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css'
import AnimeList from './Components/AnimeList'


export default function Home() {
   const animes =[
    {
      episodes :  101,
      rating : 5,
  
     },
     {
      episodes :  101,
      rating : 5,
  
     }
   ] 
  return (
    <div>
      <AnimeList animes={animes} />
    </div>
      )
}
