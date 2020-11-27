import React from 'react';
import './NavSearch.css';
import { AiOutlineSearch } from 'react-icons/ai';

export default function NavSearch(props) {
  return (
    <div className="search_container">
      <input type="text" placeholder="Search" className="search_box"></input>
      <AiOutlineSearch size={24} color="#f73e60" className="search_icon" />
    </div>
  );
}
