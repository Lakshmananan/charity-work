import React from 'react';

const CardBlockItem = props => {
  return (
    <div className='col s4 m4'>
      <div className={props.card}>
        <div className='card-image waves-effect waves-block waves-light'>
          <img className='activator' src={props.image} alt='' />
        </div>
        <div className='card-content'>
          <span className='card-title activator grey-text text-darken-4'>
            {props.title}
            <i className='material-icons right'>more_vert</i>
          </span>
          <p>
            <a href={props.html}>This is a link</a>
          </p>
        </div>
        <div className='card-reveal'>
          <span className='card-title grey-text text-darken-4'>
            {props.title}
            <i className='material-icons right'>close</i>
          </span>
          <p>{props.content}</p>
        </div>
      </div>
    </div>
  );
};

export default CardBlockItem;
