import React from 'react';

const AidTrackerNew = () => {
  return (
    <div>
      <div className='container center'>
        <h1>What We Did</h1>
        <br />
        <div className='row'>
          <div className='col m3 s12'>
            <div
              className='card blue-grey darken-1 z-depth-4'
              style={{ height: '250px' }}
            >
              <div className='card-content white-text'>
                <br />
                <i className='medium material-icons'>build</i>
                <span className='card-title'>Wells Constructed</span>
                <span className='card-title'>40</span>
              </div>
            </div>{' '}
          </div>
          <div className='col m3 s12'>
            <div
              className='card blue-grey darken-1 z-depth-4'
              style={{ height: '250px' }}
            >
              <div className='card-content white-text'>
                <br />
                <i className='medium material-icons'>school</i>
                <span className='card-title'>Schools Created</span>
                <span className='card-title'>70</span>
              </div>
            </div>
          </div>
          <div className='col m3 s12'>
            <div
              className='card blue-grey darken-1 z-depth-4'
              style={{ height: '250px' }}
            >
              <div className='card-content white-text'>
                <br />
                <i className='medium material-icons'>people</i>
                <span className='card-title'>Students Enrolled</span>
                <span className='card-title'>500</span>
              </div>
            </div>
          </div>
          <div className='col m3 s12'>
            <div
              className='card blue-grey darken-1 z-depth-4'
              style={{ height: '250px' }}
            >
              <div className='card-content white-text'>
                <br />
                <i className='medium material-icons'>fingerprint</i>
                <span className='card-title'>People Helped</span>
                <span className='card-title'>1000</span>
              </div>
            </div>
          </div>
        </div>
        <div className='row'>
          <h6>Updated 10AM Today | Since Aug 2017</h6>
        </div>
      </div>
    </div>
  );
};

export default AidTrackerNew;
