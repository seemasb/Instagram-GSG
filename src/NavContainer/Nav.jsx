import NavSearch from './NavSearch';
import './Nav.css';
import { ImCamera } from 'react-icons/im';
import profileimg from './PROFILE.jpg';

// ImCamera
export default function Nav(props) {
  return (
    <div id="nav_container">
      <ImCamera size={34} color="#f73e60" className="camera" />
      <NavSearch />
      <div className="profile">
        <img className="profile_img" src={profileimg} alt="profile"></img>
        <div className="spanComtainer">
          <span className="pink_span">Emma Watson</span>
          <span className="light_span">Actress,Model </span>
          <span className="light_span"> Paris,France</span>
        </div>
      </div>
    </div>
  );
}
