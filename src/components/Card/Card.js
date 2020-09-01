import React from 'react';
import './Card.css';
const Card = (props) => {
  return <div className='card-container'>
    <img src={`https://robohash.org/${props.monster}?set=set2`} />
    <h2>{props.monster.name}</h2>
    <p>{props.monster.email}</p>
    
    </div>;
};

export default Card;
