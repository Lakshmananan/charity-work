import React from 'react';

import Banner from '../layouts/Banner';
import CardBlock from '../layouts/CardBlock';
import AidTrackerNew from '../layouts/AidTrackerNew';
import Block from '../layouts/Block';

const Home = () => {
  return (
    <div>
      <Banner />
      <AidTrackerNew />
      <CardBlock />
      <Block />
    </div>
  );
};

export default Home;
