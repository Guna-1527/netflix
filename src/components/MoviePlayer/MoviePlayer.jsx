import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom"
const MoviePlayer = () => {

    const [videos, setVideo] = useState(); 
    const location = useLocation()
    const MovieName = String(location.pathname).split('/')[2];
    useEffect(() => {
        setVideo(MovieName);
    },[MovieName])

   

  return (
    <div>
        <h1>{videos}</h1>
    </div>
  )
}

export default MoviePlayer