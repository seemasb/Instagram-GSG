import React from 'react';
import './Card.css';
// import p1 from './p1.jpg';
// import image from './image.jpg';
import tag from './tag.png';
import { AiFillHeart } from 'react-icons/ai';
import { BiComment } from 'react-icons/bi';
import { RiSendPlaneLine } from 'react-icons/ri';
import { HiDotsVertical } from 'react-icons/hi';

export default function Card(props) {
  return (
    <div className="one_card">
      <div className="top">
        <div className="profile_card">
          <img className="profile_img_card" src={props.p1} alt="profile"></img>
          <div className="spanComtainer_card">
            <span className="pink_span_card">Emma Watson</span>
            <span className="light_span_card"> Paris,France</span>
          </div>
          <HiDotsVertical color="#f73e60" size={40} className="dots" />
        </div>
      </div>

      <div className="middle">
        <img src={props.image} className="insta_image"></img>
      </div>
      <div className="bottom">
        <AiFillHeart color="#f73e60" size={22} />
        <BiComment color="#c0bebe" size={20} />
        <RiSendPlaneLine color="#c0bebe" size={20} />
        <img src={tag} className="tag"></img>
      </div>
    </div>
  );
}
