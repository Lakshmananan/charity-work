import React from 'react';

const CardItems = props => {
  return (
    <div className='col s4'>
      <div className='card'>
      <span className='card-title'> {props.title}</span>
        <div className='card-image'>
          <img src={props.img} alt='' />
        </div>
        <div className='card-content'>
          <p>{props.msg}</p>
        </div>
        <div className='card-action'>
          <a href='#!'>This is a link</a>
        </div>
      </div>
    </div>
  );
};

export default CardItems;
