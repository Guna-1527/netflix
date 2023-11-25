import "./movietrailer.css";
import Trailer from "../../assets/videos/NewReleaseTrailer.mp4"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay, faCircleInfo } from '@fortawesome/free-solid-svg-icons'

const MovieTrailer = () => {
  return (
    <div className='TrailerContainer'>
      <div className="Trailer">
        <video src={Trailer} autoPlay loop muted />
      </div>
      <div className="TrailerDetails">
        <h1 className="Trailer__Title">IRON MAN 1</h1>
        <p className="Trailer__Desc">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magnam exercitationem ut delectus. Inventore tempora at mollitia harum perferendis officiis </p>
        <div className="TrailerButton">
          <button className="PlayButton Trailerbtn"><FontAwesomeIcon className="fcIcon" icon={faPlay} />Play</button>
          <button className="InfoButton Trailerbtn"><FontAwesomeIcon className="fcIcon" icon={faCircleInfo} />Info</button>
        </div>
      </div>
    </div>
  )
}

export default MovieTrailer