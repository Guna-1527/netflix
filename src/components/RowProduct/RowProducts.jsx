import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import MoviePoster from "../MoviePoster/MoviePoster";
import "./RowProduct.css";
import { PropTypes  } from "prop-types"

const RowProducts = ({title,fetchUrl}) => {

    const [ apiMovies, setApiMovies ] = useState([])
    useEffect(() => {
      const fetchData = async () => {
        const request = await axios.get(fetchUrl);
        setApiMovies(request.data.results);

      }
      fetchData();
    }, [fetchUrl]);

  return (
    <div className="MainWrapper">
      <h1 className="PCHeader">{title}</h1>
      <div className="ProductMainw">
      {
        apiMovies.map((apiMovie, i) => (
          <div className="MovieContainer" key={i}>
            <MoviePoster movie={apiMovie} />
          </div>
        ))
      }
      </div>
    </div>
  )
}

RowProducts.propTypes = {
  title: PropTypes.string,
  fetchUrl: PropTypes.objectOf(PropTypes.object),
  
};


export default RowProducts