import MovieTrailer from "../components/Trailer/MovieTrailer"
import Navbar from "../components/navbar/Navbar"
import MovieCategory from "../components/MovieCategory/MovieCategory"

const Home = () => {
  return (
    <div>
      <Navbar />
      <MovieTrailer />
      <MovieCategory />
    </div>
  )
}

export default Home