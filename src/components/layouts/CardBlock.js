import React from 'react';
import CardBlockItem from './CardBlockItem.js';

import Logo from '../../data/img/footer/datalchemyLogo.png';
import SocialWelfare from '../../data/img/whatwedo/socialWelfare.jpg';
import School from '../../data/img/whatwedo/school.jpg';
import Food from '../../data/img/whatwedo/food.jpg';
import Water from '../../data/img/whatwedo/water.jpg';
import Qurbani from '../../data/img/whatwedo/qurbani.jpg';

const CardBlock = () => {
  return (
    <div className='container'>
      <h1 className='center'>What We Do</h1>
      <br />
      <div className='row'>
        <CardBlockItem
          card='card medium teal'
          title='Education'
          image={School}
          html=''
          content='The Ilahi Foundation has partnered with ISHRAQ Schooling System (ISS) to ensure children from poor backgrounds are receiving proper education in a safe environment. ISS is a non-profit and non-commercial institution which focuses on educating children with less privileges in a competitive standard to make them excel in knowledge, character, and positive action.'
        />
        <CardBlockItem
          card='card medium teal'
          title='Food Bank'
          image={Food}
          html=''
          content='TIFC is committed to help those in need of food. Our goal is to provide food and supplies to less-fortunate families across the globe. We aim to collect and provide at least $50 a month to ensure the needs of poor families.'
        />
        <CardBlockItem
          card='card medium teal'
          title='Social Welfare'
          image={SocialWelfare}
          html=''
          content='Our recent and ongoing projects include building wells and providing clean drinking water in poor communities across the globe. TIFC has initiated a water supply system, Sabeel-e-Rehmat (SER), to ensure that clean drinking water is being provided to poor communities around the world'
        />
      </div>
      <div className='row'>
        <CardBlockItem
          card='card medium teal'
          title='Water'
          image={Water}
          html=''
          content=''
        />
        <CardBlockItem
          card='card medium teal'
          title='Woman Empowerment'
          image={Logo}
          html=''
          content=''
        />
        <CardBlockItem
          card='card medium teal'
          title='Qurbani'
          image={Qurbani}
          html=''
          content=''
        />
      </div>
    </div>
  );
};

export default CardBlock;
