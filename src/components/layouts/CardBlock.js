import React from 'react';
import CardBlockItem from './CardBlockItem.js';
import Logo from '../../data/img/footer/datalchemyLogo.png';

const CardBlock = () => {
  const mystyle = {
    paddingLeft: '150px',
    paddingRight: '150px'
  };
  return (
    <div style={mystyle}>
      <h1 className='center'>What We Do</h1>
      <div className='row'>
        <CardBlockItem
          card='card purple'
          title='Zakat'
          image={Logo}
          html=''
          content=''
        />
        <CardBlockItem
          card='card purple'
          title='Orphans'
          image={Logo}
          html=''
          content=''
        />
        <CardBlockItem
          card='card purple'
          title='Water'
          image={Logo}
          html=''
          content=''
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
      <div className='row'>
        <CardBlockItem
          card='card blue'
          title=''
          image={Logo}
          html=''
          content=''
        />
        <CardBlockItem
          card='card blue'
          title=''
          image={Logo}
          html=''
          content=''
        />
        <CardBlockItem
          card='card blue'
          title=''
          image={Logo}
          html=''
          content=''
        />
      </div>
    </div>
  );
};

export default CardBlock;
