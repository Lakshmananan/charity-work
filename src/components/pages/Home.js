import React from 'react';

import Banner from '../layouts/Banner';
import CardBlock from '../layouts/CardBlock';
import AidTracker from '../layouts/AidTracker';
import Quote from '../layouts/Quote';

const Home = () => {
  return (
    <div>
      <Banner />
      <AidTracker />
      <CardBlock />
      <Quote />
    </div>
  );
};

export default Home;
