import React from 'react';
import './StoryContainer.css';
import Story from './Story';
import img1 from './pp1.jpg';
import img4 from './p6.jpg';
import img6 from './p2.jpg';
import img2 from './ii1.jpg';
import img3 from './ii2.jpg';
import { BsPlusSquare } from 'react-icons/bs';
// FaRegPlusSquare

export default function StoryContainer() {
  return (
    <div className="StoryContainer">
      <div className="columflex">
        <div className="sotycircle">
          <BsPlusSquare color="white" className="add" />
        </div>
        <span className="addstory">Add Story</span>
      </div>
      <Story span1="#Technology" span2="#Android" img1={img1} img2={img2} />
      <Story span1="#Technology" span2="#Android" img1={img6} img2={img3} />
      <Story span1="#Technology" span2="#Android" img1={img1} img2={img2} />
      <Story span1="#Technology" span2="#Android" img1={img4} img2={img3} />
    </div>
  );
}
