import React from 'react';
import './Items.css';
import { ImHome2 } from 'react-icons/im';
import { BiMessage } from 'react-icons/bi';
import { MdNotifications } from 'react-icons/md';
import { MdSettings } from 'react-icons/md';
import { FaPowerOff } from 'react-icons/fa';
import { GiAerialSignal } from 'react-icons/gi';

// GiAerialSignal
export default function Items(props) {
  return (
    <div id="items_container">
      <div className=" Item_div">
        <ImHome2 size={28} color="#9a9999" />
        <span>Home</span>
      </div>

      <div className="Item_div">
        <GiAerialSignal size={28} color="#9a9999" />
        <span>Live</span>
      </div>

      <div className="Item_div">
        <BiMessage size={28} color="#9a9999" />
        <span>Message</span>
      </div>

      <div className="Item_div">
        <MdNotifications size={28} color="#9a9999" />
        <span>Notifications</span>
      </div>

      <div className="Item_div">
        <MdSettings size={28} color="#9a9999" />
        <span>Settings</span>
      </div>

      <div className="Item_div">
        <FaPowerOff size={28} color="#9a9999" />
        <span>Logout</span>
      </div>

      <div className="ItemHome_div">
        <div className="pinkhomeitem"></div>
      </div>
    </div>
  );
}
