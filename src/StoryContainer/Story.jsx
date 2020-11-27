import React from 'react';
import './Story.css';
// import p1 from './p1.jpg';
// import image from './image.jpg';

export default function Story(props) {
  return (
    <div className="story_item">
      <div className="flex1">
        <img className="img1" src={props.img1}></img>
        <img className="img2" src={props.img2}></img>
      </div>
      <div className="flex2">
        <span className="span1">{props.span1}</span>
        <span className="span2">{props.span2}</span>
      </div>
    </div>
  );
}
