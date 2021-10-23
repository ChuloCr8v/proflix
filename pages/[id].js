import style from "../styles/Toast.module.scss";
import YouTube from "react-youtube";
import { useState, useEffect } from "react";
import movieTrailer from "movie-trailer";
import NoTrailer from "../components/NoTrailer";
import Link from "next/link";

const Toast = (props) => {
  const [trailerUrl, setTrailerUrl] = useState("");

  useEffect(() => {
    movieTrailer(props.title || props.name || props.original_name || "")
      .then((url) => {
        const urlParams = new URLSearchParams(new URL(url).search);
        setTrailerUrl(urlParams.get("v"));
      })
      .catch((error) => console.log(error));
  }, []);

  const opts = {
    height: "300",
    width: "100%",
    playerVars: {
      // 'https://developers.google.com/youtube/player_parameters'
      autoplay: 1,
    },
  };

  return (
    <div className={style.toast}>
      <h1>{props.title || props.name || props.original_name}</h1>
      <div className={style.youtube}>
        {trailerUrl ? (
          <YouTube videoId={trailerUrl} opts={opts} />
        ) : (
          <NoTrailer movie={props.imgOne} />
        )}
      </div>
      <div className={style.movie__desc}>
        <p>
          <span>Plot: </span>
          {props.overview}
        </p>
        <p>
          <span>Release Date:</span> {props.date || "Not available"}
        </p>
        <p>
          <span>Popularity:</span> {props.popularity}
        </p>
        <p>
          <span>Average Rating:</span> {props.vote} from {props.votes} votes
        </p>
      </div>
      <Link href="/"> Go Back</Link>
    </div>
  );
};

export async function getServerSideProps(context) {
  console.log(context.query);
  return {
    props: {
      imgOne: context.query.imgOne,
      imgTwo: context.query.imgTwo,
      name: context.query.name,
      title: context.query.title,
      originalName: context.query.originalName,
      date: context.query.date,
      vote: context.query.vote,
      votes: context.query.votes,
      popularity: context.query.popularity,
      overview: context.query.overview,
    },
  };
}

export default Toast;

// <div className={style.container}>
//           <button onClick={() => setMovieToast(false)}> Close </button>
//           <h1>{props.title || props.name || props.original_name}</h1>
//           {/* YouTube Preview */}
//           <div className={style.youtube}>
//             {trailerUrl ? (
//               <YouTube videoId={trailerUrl} opts={opts} />
//             ) : (
//               <NoTrailer movie={props.movie} />
//             )}
//           </div>

//           <div className={style.movie__desc}>
//             <p>
//               <span>Plot: </span>
//               {props.overview}
//             </p>
//             <p>
//               <span>Release Date:</span> {props.date || "Not available"}
//             </p>
//             <p>
//               <span>Average Rating:</span> {props.vote} from {props.votes} votes
//             </p>
//             <p>
//               <span>Popularity:</span> {props.popularity}
//             </p>
//           </div>
//
//         </div>
