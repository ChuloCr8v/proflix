import style from '../styles/NoTrailer.module.scss'

const NoTrailer = ({ movie }) => {

  const imgBaseUrl = "https://image.tmdb.org/t/p/original/"

  return (
    <div className={style.no__trailer}>
      <p>Oops! No trialer for this movie at the moment. But you can enjoy the amazing poster</p>
      <img src={`${imgBaseUrl}` + movie} alt="movie poster" />
    </div>
  )
}

export default NoTrailer