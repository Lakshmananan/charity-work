import React from 'react';

import Banner from '../layouts/Banner';
import CardBlock from '../layouts/CardBlock';
import AidTracker from '../layouts/AidTracker';
import Block from '../layouts/Block';

const Home = () => {
  return (
    <div>
      <Banner />
      <AidTracker />
      <CardBlock />
      <Block />
    </div>
  );
};

export default Home;
