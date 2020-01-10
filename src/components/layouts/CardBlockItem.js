import React from 'react';

const CardBlockItem = props => {
  return (
    <div className='col s12 m4'>
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
            <a className={props.button} href={props.html}>
              Learn More
            </a>
          </p>
        </div>
        <div className='card-reveal'>
          <span className='card-title white-text'>
            {props.title}
            <i className='material-icons right grey'>close</i>
          </span>
          <p>{props.content}</p>
        </div>
      </div>
    </div>
  );
};

export default CardBlockItem;
