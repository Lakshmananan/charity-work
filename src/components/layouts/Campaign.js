import React from 'react';
import { Link } from 'react-router-dom';

const Campaign = () => {
  const myStyle = {
    height: '300px'
  };
  return (
    <div className='container teal pulse center white-text' style={myStyle}>
      <h1>Campaign</h1>
      <h3>Lahore Winter Aid</h3>
      <p>
        Lahore is facing its coldest winter in 30 years! TIFC will be providing
        warm sweaters, shawls, and blankets to those in need. Let's help keep
        the needy people of Lahore warm!
      </p>
      <Link className='waves-effect waves-light btn-large' to='/#'>
        <i className='material-icons right'>mood</i>button
      </Link>
    </div>
  );
};

export default Campaign;
