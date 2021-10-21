import style from '../styles/Row.module.scss' 
import {useState, useEffect} from 'react'
import Image from 'next/image' 
import axios from './axios'


const Row = ({title, fetchUrl, isLarge}) => {
   const [movies, setMovies] = useState([])
   
   useEffect(() => {
         async function fetchData() {
               const res = await axios.get(fetchUrl)
               setMovies(res.data.results) 
               return res
         } 
         fetchData()
}, [fetchUrl])
      
 const imgBaseUrl = "https://image.tmdb.org/t/p/original/"
 
  return(
    <div className={style.row}>
      <h2>{title}</h2>
        <div className={style.movies}>
            {movies.map(movie => (
            <div className={style.movie}>
                 <img className={`${isLarge && style.large}`} src={`${imgBaseUrl}${movie.poster_path}`} alt="movie poster" />
            </div>
            ))} 
       </div>
    </div>
    )
}

export default Row 