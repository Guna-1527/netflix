import "./movie.css";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

const baseUrl = "https://image.tmdb.org/t/p/w500";

const Movie = () => {
  const [Movies, SetMovies] = useState({});
  const location = useLocation();

  useEffect(() => {
    SetMovies(location.state.item);
    console.log(location.state.item);
  }, [location.state.item]);

  const navigate = useNavigate();
  const PlayMovie = () => {
    console.log(Movies.original_title);
    navigate(`/${Movies.id}/${Movies.original_title}`);
  };

  return (
    <div className="Main__Movie__Page__Container">
      <div className="Left__Movie__Page">
        <div className="Left__Movie__Page__Image">
          <img src={`${baseUrl}${Movies.poster_path}`} alt="" />
        </div>
      </div>
      <div className="Right__Movie__Page">
        <div className="Left__Movie__Page__Header">
          <div className="Left__Movie__Page__Header__Title Left__Movie__Details">
            <p className="Left__Movie__Page__Header__Title">
              {Movies.original_title}
            </p>
          </div>
          <div className="Left__Movie__Page__Language Left__Movie__Details">
            <p className="Left_Movie__Page__Refer">Language: </p>
            <p className="Left__MOvie__Values">{Movies.original_language}</p>
          </div>
          <div className="Left__Movie__Page__Language Left__Movie__Details">
            <p className="Left_Movie__Page__Refer">Adult: </p>
            <p className="Left__MOvie__Values">
              {Movies.adult ? "+18" : "+13"}
            </p>
          </div>
          <div className="Left__Movie__Page__Language Left__Movie__Details">
            <p className="Left_Movie__Page__Refer">Release Date: </p>
            <p className="Left__MOvie__Values">{Movies.release_date}</p>
          </div>
          <div className="Left__Movie__Page__Language Left__Movie__Details">
            <p className="Left_Movie__Page__Refer">Average Voting: </p>
            <p className="Left__MOvie__Values">{Movies.vote_average}</p>
          </div>
          <div className="Left__Movie__Page__Language Left__Movie__Details">
            <p className="Left_Movie__Page__Refer">Popularity: </p>
            <p className="Left__MOvie__Values">{Movies.popularity}</p>
          </div>
          <div className="Left__Movie__Page__Language Left__Movie__Details">
            <p className="Left_Movie__Page__Refer">Overview: </p>
            <p className="Left__MOvie__Values">{Movies.overview}</p>
          </div>
          <div className="Left__Movie__Page__Button">
            <button onClick={PlayMovie} className="PlayButton Trailerbtn">
              <FontAwesomeIcon className="fcIcon" icon={faPlay} />
              Play
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Movie;
