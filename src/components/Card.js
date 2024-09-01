
import React from 'react';
import './Card.css';

const Card = ({ name, image }) => {
  return (
    <div className="card">
      <img src={image} alt={name} />
      <h3>{name}</h3>
    </div>
  );
};

export default Card;
