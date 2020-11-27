import React from 'react';
import './CardsContainer.css';
import Card from './Card';
import p1 from './p1.jpg';
import p4 from './p4.jpg';
import p3 from './p3.jpg';
import image from './image.jpg';
import image2 from './image2.jpg';
import image3 from './image3.jpg';

export default function CardsContainer(props) {
  return (
    <div className="flex_container">
      <Card p1={p1} image={image} />
      <Card p1={p4} image={image2} />
      <Card p1={p3} image={image3} />
      <Card p1={p1} image={image} />
      <Card p1={p4} image={image2} />
      <Card p1={p3} image={image3} />
    </div>
  );
}
