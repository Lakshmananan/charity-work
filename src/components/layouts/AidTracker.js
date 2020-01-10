import React from 'react';

const AidTracker = () => {
  return (
    <div>
      <div className='row'>
        <img src='imgs/first-aid-box.png' alt='' width='150px' />
      </div>
      <div className='container'>
        <div className='row'>
          <div className='col 12 m3'>
            <h2>Aid Tracker: </h2>
          </div>
          <div className='col 12 m3'>
            <span className='big-number' id='valueOne'>
              2
            </span>
            <br />
            <p>Wells Built</p>
          </div>
          <div className='col 12 m3'>
            <span className='big-number' id='valueTwo'>
              3
            </span>
            <br />
            <p>Schools Created</p>
          </div>
          <div className='col 12 m3'>
            <span className='big-number' id='valueThree'>
              35
            </span>
            <br />
            <p>Children Enrolled</p>
          </div>
        </div>
        <div className='row updatedSinceRow'>
          <p>Updated 10AM Today | Since Aug 2017</p>
        </div>
      </div>
    </div>
  );
};

export default AidTracker;
