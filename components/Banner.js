import style from '../styles/Banner.module.scss' 
import requests from './requests'
import {useState, useEffect} from 'react'
import axios from './axios'


const Banner = ({fetchUrl}) => {
   
   const [movies, setMovies] = useState([])
   
   useEffect(() => {
         async function fetchData() {
            const req = await axios.get(fetchUrl)
            setMovies(req.data.results[
                  Math.floor(Math.random() * req.data.results.length - 1)
                  ]) 
            return req
         }
         fetchData()
   }, [fetchUrl])
   
  const imgBaseUrl = "https://image.tmdb.org/t/p/original/"
  
  return(
    <div className={style.banner}>
        <div className={style.movie}>
          <img src={`${imgBaseUrl}${movies.poster_path}`} alt="movie poster" />
        </div>
    </div>
    )
}

export default Banner