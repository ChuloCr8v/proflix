import style from '../styles/Row.module.scss'
import { useState, useEffect } from 'react'
import axios from './axios'
import Link from 'next/link'
//import Toast from '../pages/Toast'


const Row = ({ title, fetchUrl, isLarge }) => {
  const [movies, setMovies] = useState([])


  useEffect(() => {
    async function fetchData() {
      const res = await axios.get(fetchUrl)
      setMovies(res.data.results)
      console.log(res.data.results)
      return res
    }
    fetchData()
  }, [fetchUrl])



  const imgBaseUrl = "https://image.tmdb.org/t/p/original/"

  return (
    <div className={style.row}>
      <h2 className={style.section_title}>{title}</h2>
      <div className={style.movies}>
        {movies.map((movie) => (
          <div key={movie.id} >
            <div className={style.movie}>
              <img className={`${isLarge && style.large}`} src={`${imgBaseUrl}${movie.poster_path}`} alt={movie.title || movie.name || movie.original_name} />
              <div className={style.show__details} >
                <h3> {movie.name || movie.title || movie.original_name} </h3>
                <Link
                  href={{
                    pathname: "/[id]",
                    query: {
                      id: movie.id,
                      name: movie.name,
                      title: movie.title,
                      originalName: movie.originalName,
                      date: movie.first_air_date,
                      overview: movie.overview,
                      vote: movie.vote_average,
                      votes: movie.vote_count,
                      popularity: movie.popularity,
                      imgOne: movie.backdrop_path,
                      imgTwo: movie.backdrop_path

                    }
                  }}
                >
                  Details
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Row