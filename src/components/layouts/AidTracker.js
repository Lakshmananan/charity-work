import React from 'react';

const AidTracker = () => {
  return (
    <div>
      <div id='first-aid-box'>
        <img src='imgs/first-aid-box.png' alt='' width='150px' />
      </div>
      <div class='container'>
        <div class='row'>
          <div class='col 12 m3'>
            <h2>Aid Tracker: </h2>
          </div>
          <div class='col 12 m3'>
            <span class='big-number' id='valueOne'>
              2
            </span>
            <br />
            <p>Wells Built</p>
          </div>
          <div class='col 12 m3'>
            <span class='big-number' id='valueTwo'>
              3
            </span>
            <br />
            <p>Schools Created</p>
          </div>
          <div class='col 12 m3'>
            <span class='big-number' id='valueThree'>
              35
            </span>
            <br />
            <p>Children Enrolled</p>
          </div>
        </div>
        <div class='row updatedSinceRow'>
          <p>Updated 10AM Today | Since Aug 2017</p>
        </div>
      </div>
    </div>
  );
};

export default AidTracker;
