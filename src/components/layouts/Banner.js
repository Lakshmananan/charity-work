import React from 'react';
import backgroundImg from '../../data/img/banner/backgroundImg.png';
import backgroundImg2 from '../../data/img/banner/backgroundImg2.png';
import backgroundImg3 from '../../data/img/banner/backgroundImg3.png';

const Banner = () => {
  return (
    <div>
      <div className='slider'>
        <ul className='slides'>
          <li>
            <img src={backgroundImg} alt='' />
            <div className='caption center-align'>
              <h3 className='pink-text text-lighten-2'>
                This is our big Tagline!
              </h3>
              <h5 className='pink-text text-lighten-2'>
                Here's our small slogan.
              </h5>
            </div>
          </li>
          <li>
            <img src={backgroundImg2} alt='' />
            <div className='caption left-align'>
              <h3 className='pink-text text-lighten-2'>Left Aligned Caption</h3>
              <h5 className='pink-text text-lighten-2'>
                Here's our small slogan.
              </h5>
            </div>
          </li>
          <li>
            <img src={backgroundImg3} alt='' />
            <div className='caption right-align'>
              <h3 className='pink-text text-lighten-2'>
                Right Aligned Caption
              </h3>
              <h5 className='pink-text text-lighten-2'>
                Here's our small slogan.
              </h5>
            </div>
          </li>
        </ul>
      </div>
      <br />
    </div>
  );
};

export default Banner;
