import React from 'react';

const CampaignModal = () => {
  return (
    <div id='donateprop' className='modal'>
      <div className='modal-content center'>
        <script src='https://donorbox.org/widget.js'></script>
        <iframe
          title='donate'
          display='block'
          allowpaymentrequest=''
          frameBorder='0'
          height='475px'
          name='donorbox'
          scrolling='no'
          seamless='seamless'
          src='https://donorbox.org/embed/tifc-lahore-winter-project?default_interval=o&show_content=true'
          width='100%'
        ></iframe>
      </div>
      <div className='modal-footer'>
        <a href='#!' className='modal-close waves-effect waves-green btn-flat'>
          Close
        </a>
      </div>
    </div>
  );
};

export default CampaignModal;
