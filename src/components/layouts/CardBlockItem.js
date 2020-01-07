import React from 'react';

const CardBlockItem = props => {
  return (
    <div className='col s4 m4'>
      <div className={props.card}>
        <div className='card-image waves-effect waves-block waves-light'>
          <img className='activator' src={props.image} alt='' />
        </div>
        <div className='card-content'>
          <span className='card-title activator white-text'>
            {props.title}
            <i className='material-icons right'>more_vert</i>
          </span>
          <p>
            <a href={props.html}>This is a link</a>
          </p>
        </div>
        <div className='card-reveal'>
          <span className='card-title white-text'>
            {props.title}
            <i className='material-icons right grey'>close</i>
          </span>
          <p className='text-justify'>{props.content}</p>
        </div>
      </div>
    </div>
  );
};

export default CardBlockItem;
