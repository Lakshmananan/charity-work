import React from 'react';

import Banner from '../layouts/Banner';
import Cards from '../layouts/Cards';
import CardBlock from '../layouts/CardBlock';
import AidTracker from '../layouts/AidTracker';

const Home = () => {
  return (
    <div>
      <Banner />
      <AidTracker />
      <CardBlock />
    </div>
  );
};

export default Home;
