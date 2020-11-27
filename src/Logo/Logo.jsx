import React from 'react';
import './Logo.css';
import LogoInsta from './instagram.png';
import Insta from './instagram-logo.png';

export default function Logo(props) {
  return (
    <div className="logo_container">
      <img src={LogoInsta} alt="instagram logo" id="insta"></img>
      <img src={Insta} alt="instagram logo" id="instaword"></img>
    </div>
  );
}
