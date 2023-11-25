import { BrowserRouter, Route, Routes } from "react-router-dom"
import Movie from "./components/Movie/Movie"
import "./App.css"
import SignIn from "./Pages/SignIn/SignIn"
import MoviePlayer from "./components/MoviePlayer/MoviePlayer"

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SignIn />} />
        <Route path="/movie/:id" element={<Movie />} />
        <Route path="/:id/:title" element={<MoviePlayer />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App