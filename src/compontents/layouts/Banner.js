import React from 'react';
import backgroundImg from '../../img/banner/backgroundImg.png';
import backgroundImg2 from '../../img/banner/backgroundImg2.png';
import backgroundImg3 from '../../img/banner/backgroundImg3.png';

const Banner = () => {
  return (
    <div>
      <div className='slider'>
        <ul className='slides'>
          <li>
            <img src={backgroundImg} alt='' />
            <div className='caption center-align'>
              <h3>This is our big Tagline!</h3>
              <h5 className='light grey-text text-lighten-3'>
                Here's our small slogan.
              </h5>
            </div>
          </li>
          <li>
            <img src={backgroundImg2} alt='' />
            <div className='caption left-align'>
              <h3>Left Aligned Caption</h3>
              <h5 className='light grey-text text-lighten-3'>
                Here's our small slogan.
              </h5>
            </div>
          </li>
          <li>
            <img src={backgroundImg3} alt='' />
            <div className='caption right-align'>
              <h3>Right Aligned Caption</h3>
              <h5 className='light grey-text text-lighten-3'>
                Here's our small slogan.
              </h5>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Banner;
