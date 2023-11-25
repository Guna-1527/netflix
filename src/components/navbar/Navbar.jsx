import { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRightFromBracket } from '@fortawesome/free-solid-svg-icons'
import "./navbar.css"


const Navbar = () => {

  const [colorChange, setColorchange] = useState(false);

  const changeNavbarColor = () => {
    if (window.scrollY >= 80) {
        setColorchange(true);
    }
    else {
        setColorchange(false);
    }
};
window.addEventListener('scroll', changeNavbarColor);

  const [name, setName] = useState('');

  const handleLogout = () => {
    localStorage.clear();
    window.location.reload();
  }
  useEffect(() => {
    setName(localStorage.getItem("displayName"));
  },[]);

  return (
    <div className={colorChange ? 'navContainer colorChange' : 'navContainer'}>
      <div className="max-width">
      <div className="LogoAndLinks">
      <a href="/">
      <img src="https://assets.nflxext.com/en_us/layout/ecweb/common/logo-shadow2x.png" alt="" />
      </a>
      <ul>
        <li><a className='Links ' href="#/">Home</a></li>
        <li><a className='Links ' href="#/">TV shows</a></li>
        <li><a className='Links ' href="#/">Movies</a></li>
        <li><a className='Links ' href="#/">New & Popular</a></li>
        <li><a className='Links ' href="#/">My List</a></li>
        <li><a className='Links ' href="#/">Browse by languages</a></li>
      </ul>
      </div>
      <div className="NavLinks">
      <button className='LogoutBtn' onClick={handleLogout}><FontAwesomeIcon className='Icons' icon={faRightFromBracket} />{name}</button>
      </div>
      </div>
    </div>
  )
}

export default Navbar