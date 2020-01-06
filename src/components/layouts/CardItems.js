import React from 'react';

const CardItems = props => {
  const mystyleImg = {
    height: '150px',
    width: '150px',
    display: 'block'
  };

  return (
    <div className='col s12 m4'>
      <div className='card'>
        <span className='card-title'> {props.title}</span>
        <div className='card-image'>
          <img src={props.img} alt='' style={mystyleImg} />
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
