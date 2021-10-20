import style from '../styles/Row.module.scss' 
import React, {useState, useEffect} from 'react'
import Image from 'next/image' 
import axios from './axios'
const Row = ({title, fetchUrl}) => {
   const [movies, setMovies] = useState([])
    
   useEffect = (() => {
         async function fetchData() {
               const req = await axios.get(fetchUrl)
               setMovies(req.data.results)
               return req
         } 
         fetchData()
 }, [fetchUrl])
      
    const imgBaseUrl = "https://image.tmdb.org/t/p/original/" 
  return(
    <div className={style.row}>
      <h2>{title}</h2>
      {movies.map(movie => (
        <>
        <Image src={`${imgBaseUrl}${movie.poster_path}`} alt="movie poster" />
        <h1> {movie.title} </h1>
       </>
      ))} 
    </div>
    )
}

export default Row 