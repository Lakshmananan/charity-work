import React from 'react';
import CardBlockItem from './CardBlockItem.js';

import Logo from '../../data/img/footer/datalchemyLogo.png';

const CardBlock = () => {
  return (
    <div className='container'>
      <h1 className='center'>What We Do</h1>
      <div className='row'>
        <CardBlockItem
          card='card purple'
          title='Zakat'
          image={Logo}
          html=''
          content='The Ilahi Foundation has partnered with ISHRAQ Schooling System (ISS) to ensure children from poor backgrounds are receiving proper education in a safe environment. ISS is a non-profit and non-commercial institution which focuses on educating children with less privileges in a competitive standard to make them excel in knowledge, character, and positive action.'
        />
        <CardBlockItem
          card='card purple'
          title='Orphans'
          image={Logo}
          html=''
          content='TIFC is committed to help those in need of food. Our goal is to provide food and supplies to less-fortunate families across the globe. We aim to collect and provide at least $50 a month to ensure the needs of poor families.'
        />
        <CardBlockItem
          card='card purple'
          title='Water'
          image={Logo}
          html=''
          content='Our recent and ongoing projects include building wells and providing clean drinking water in poor communities across the globe. TIFC has initiated a water supply system, Sabeel-e-Rehmat (SER), to ensure that clean drinking water is being provided to poor communities around the world'
        />
      </div>
      <div className='row'>
        <CardBlockItem
          card='card black'
          title='Food'
          image={Logo}
          html=''
          content=''
        />
        <CardBlockItem
          card='card black'
          title='Development'
          image={Logo}
          html=''
          content=''
        />
        <CardBlockItem
          card='card black'
          title='Ramadan'
          image={Logo}
          html=''
          content=''
        />
      </div>
    </div>
  );
};

export default CardBlock;
