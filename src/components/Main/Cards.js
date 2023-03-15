import React from 'react'
import './cards.css';

const Card = (props) => {
  return (
    <div className='card'>
          <img src={props.img} alt='img' />
          <div className='card-content'>
            <h3>{props.title}</h3>
            <p>{props.p}</p>
          </div>
    </div>
  )
}

export default Card