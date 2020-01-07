import React from 'react';
import logo from '../../data/img/footer/datalchemyLogo.png';

const Footer = () => {
  const mystyle = {
    paddingLeft: '100px',
    paddingRight: '100px'
  };
  return (
    <div>
      <footer className='page-footer' style={mystyle}>
        <div className='container'>
          <div className='row'>
            <div className='col l6 s12'>
              <h5 className='white-text'>THE ILLAHI FOUDNATION OF CANADA</h5>
              <p className='grey-text text-lighten-4'>
                You can use rows and columns here to organize your footer
                content.
              </p>
            </div>
            <div className='col l4 offset-l2 s12'>
              <h5 className='white-text'>Links</h5>
              <ul>
                <li>
                  <i class='material-icons small'>payment</i>
                  <a className='grey-text text-lighten-3' href='#!'>
                    Link 1
                  </a>
                </li>
                <li>
                  <i class='material-icons small'>payment</i>
                  <a className='grey-text text-lighten-3' href='#!'>
                    Link 2
                  </a>
                </li>
                <li>
                  <i class='material-icons small'>payment</i>
                  <a className='grey-text text-lighten-3 large-text' href='#!'>
                    Link 3
                  </a>
                </li>
                <li>
                  <i class='material-icons small'>payment</i>
                  <a className='grey-text text-lighten-3' href='#!'>
                    Link 4
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className='footer-copyright black'>
          <div className='container'>
            © 2020 The Illahi Foundation of Canada Inc. All rights reserved.
            <i className='right' src={logo}></i>
            <a className='green-text  right' href='http://www.datalchemy.ai/'>
              Powered by datalchemy.ai
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
