import React from 'react';
import CardItems from './CardItems.js';

import education from '../../data/img/whatwedo/education.png';
import foodBank from '../../data/img/whatwedo/foodBank.jpg';
import socialWelfare from '../../data/img/whatwedo/socialWelfare.jpg';

const Cards = () => {
  const mystyle = {
    paddingLeft: '150px',
    paddingRight: '150px'
  };
  return (
    <div>
      <div className='row' style={mystyle}>
        <CardItems
          title='Education'
          img={education}
          msg='The Ilahi Foundation has partnered with ISHRAQ Schooling System (ISS) to ensure children from poor backgrounds are receiving proper education in a safe environment. ISS is a non-profit and non-commercial institution which focuses on educating children with less privileges in a competitive standard to make them excel in knowledge, character, and positive action.'
        />
        <CardItems
          title='Food Bank'
          img={foodBank}
          msg='TIFC is committed to help those in need of food. Our goal is to provide food and supplies to less-fortunate families across the globe. We aim to collect and provide at least $50 a month to ensure the needs of poor families.'
        />
        <CardItems
          title='Social Welfare'
          img={socialWelfare}
          msg='Our recent and ongoing projects include building wells and providing clean drinking water in poor communities across the globe. TIFC has initiated a water supply system, Sabeel-e-Rehmat (SER), to ensure that clean drinking water is being provided to poor communities around the world.'
        />
      </div>
      <br />
      <br />
    </div>
  );
};

export default Cards;
