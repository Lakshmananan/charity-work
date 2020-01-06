import React, { Fragment, useEffect } from 'react';
import Navbar from './compontents/layouts/Navbar';
import Banner from './compontents/layouts/Banner';

import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css/dist/js/materialize.min.js';
import './App.css';

const App = () => {
  useEffect(() => {
    M.AutoInit();
  });

  return (
    <Fragment>
      <Navbar />
      <Banner />
    </Fragment>
  );
};

export default App;
