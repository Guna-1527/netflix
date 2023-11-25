import "./MoviePoster.css";
import { PropTypes  } from "prop-types"
import { useNavigate } from "react-router-dom"

const baseUrl = "https://image.tmdb.org/t/p/w500"

const MoviePoster = ({ movie }) => {
  const navigate = useNavigate();
  const _id = movie.id;
  const HandleMovieData = () => {
    navigate(`/movie/${_id}`, {
      state: {
        item: movie,
      },
    });
  }

  return (
    <div className="MovieCardContainer">
        <div onClick={HandleMovieData} className="MovieCard">
            {movie.poster_path != null && <img src={`${baseUrl}${movie.poster_path}`} alt="" />}
        </div>
    </div>
  )
}

MoviePoster.propTypes = {
    movie: PropTypes.objectOf(PropTypes.object, PropTypes.boolean)
  };

export default MoviePoster