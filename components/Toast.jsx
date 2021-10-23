import style from '../styles/Toast.module.scss'
import YouTube from 'react-youtube'
import { useState, useEffect } from 'react'
import movieTrailer from 'movie-trailer'
import NoTrailer from './NoTrailer'

const Toast = ({ setMovieToast, movieTitle, movieDesc, movie, movieRating, movieRelease, movieVotes }) => {

  const [trailerUrl, setTrailerUrl] = useState("")

  useEffect(() => {
    movieTrailer(movie.title || movie.name || movie.original_name || "")
      .then((url) => {
        const urlParams = new URLSearchParams(new URL(url).search)
        setTrailerUrl(urlParams.get("v"))
      }).catch((error) => console.log(error))
  }, [])

  const opts = {
    height: "300",
    width: "100%",
    playerVars: {
      // 'https://developers.google.com/youtube/player_parameters'
      autoplay: 1
    }
  }


  return (
    <div className={style.toast__container}>
      <div className={style.toast}>
        <div className={style.container} >
          <button onClick={() => setMovieToast(false)}> Close  </button>
          <h1>{movie.title || movie.name || movie.original_name}
          </h1>
          {/*YouTube Preview*/}
          <div className={style.youtube}>
            {trailerUrl ? <YouTube videoId={trailerUrl} opts={opts} /> : <NoTrailer movie={movie} />}
          </div>

          <div className={style.movie__desc} >
            <p><span>Plot: </span>{movie?.overview}</p>
            <p><span>Release Date:</span> {movie.first_air_date || 'Not available'}</p>
            <p><span>Average Rating:</span> {movie?.vote_average} from {movie?.vote_count} votes</p>
            <p><span>Popularity:</span> {movie?.popularity}</p>
          </div>
          <button onClick={() => setMovieToast(false)}> Close  </button>
        </div>
      </div>
    </div>
  )
}

export default Toast