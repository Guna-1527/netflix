import "./MovieCategory.css";
import requests from "../../api/requests";
import RowProduct from "../RowProduct/RowProducts"


const MovieCategory = () => {
  return (
    <div className="MovieCategoryContainer">
      <RowProduct title="Popular Now" fetchUrl={requests.fetchTopRated}/>
      <RowProduct title="Action Movies" fetchUrl={requests.fetchActionMovies}/>
      <RowProduct title="Horror Movies" fetchUrl = {requests.fetchHorrorMovies}/>
      <RowProduct title="Romantic Movies" fetchUrl={requests.fetchRomanceMovies}/>
      <RowProduct title="Comedy Movies" fetchUrl={requests.fetchComedyMovies}/>
      <RowProduct title="Documentaries" fetchUrl={requests.fetchDocumentaries}/>
    </div>
  )
}

export default MovieCategory