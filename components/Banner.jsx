import style from "../styles/Banner.module.scss";
import { useState, useEffect } from "react";
import axios from "./axios";
import Link from "next/link";

const Banner = ({ fetchUrl }) => {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const req = await axios.get(fetchUrl);
      setMovie(
        req.data.results[
        Math.floor(Math.random() * req.data.results.length - 1)
        ]
      );

      return req;
    }
    fetchData();
  }, [fetchUrl]);

  const truncate = (str, n) => {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  }

  const imgBaseUrl = `https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`;

  return (
    <div
      style={{
        backgroundImage: `url(${imgBaseUrl})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat"
      }}
      className={style.banner}
    >
      <div className={style.movie}>
        <div className={style.details}>
          <h1 className={style.title}>{movie?.name || movie?.title || movie?.original_name}</h1>
          <p className={style.movie_desc}>
            {truncate(movie.overview, 150)}
          </p>
          <Link href={{
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
          }}>
            Preview
          </Link>
        </div>
      </div>
    </div >
  );
};

export default Banner;
