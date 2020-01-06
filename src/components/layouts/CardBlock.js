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
      <div className='row'>
        <CardBlockItem
          card='card blue'
          title=''
          image={Logo}
          html=''
          content=''
        />
        <CardBlockItem
          card='card purple'
          title=''
          image={Logo}
          html=''
          content=''
        />
        <CardBlockItem
          card='card yellow'
          title=''
          image={Logo}
          html=''
          content=''
        />
      </div>
      <div className='row'>
        <CardBlockItem
          card='card red'
          title=''
          image={Logo}
          html=''
          content=''
        />
        <CardBlockItem
          card='card black'
          title=''
          image={Logo}
          html=''
          content=''
        />
        <CardBlockItem
          card='card pink'
          title=''
          image={Logo}
          html=''
          content=''
        />
      </div>
      <div className='row'>
        <CardBlockItem
          card='card yellow'
          title=''
          image={Logo}
          html=''
          content=''
        />
        <CardBlockItem
          card='card purple'
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
