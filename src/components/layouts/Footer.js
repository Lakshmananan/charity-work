import React from 'react';
import { Link } from 'react-router-dom';
import datalchemyLogo from '../../data/img/footer/datalchemyLogo.png';
// Need to added correct .svg file
// Add sticky footer
// Add IG and Contribute button

const Footer = () => {
  return (
    <div>
      <footer className='page-footer teal'>
        <div className='container center'>
          <div className='row'>
            <div className='col l6 s12'>
              <img
                src='https://my-tifc.org/imgs/logo.png'
                alt='logo'
                width='150px'
              ></img>
              <h5 className='white-text'>THE ILLAHI FOUDNATION OF CANADA</h5>
              <p className='grey-text text-lighten-4'>
                You can use rows and columns here to organize your footer
                content.
              </p>
            </div>
            <div className='col l4 offset-l2 s12'>
              <br />
              <h5 className='white-text'>Links</h5>
              <ul>
                <li>
                  <Link className='grey-text text-lighten-3' to='#!'>
                    About
                  </Link>
                </li>
                <li>
                  <Link className='grey-text text-lighten-3' to='#!'>
                    Message
                  </Link>
                </li>
                <li>
                  <Link className='grey-text text-lighten-3 large-text' to='#!'>
                    Education
                  </Link>
                </li>
                <li>
                  <Link className='grey-text text-lighten-3' to='#!'>
                    Woman Empowerment
                  </Link>
                </li>
                <li>
                  <Link className='grey-text text-lighten-3' to='#!'>
                    Social Welfare
                  </Link>
                </li>
                <li>
                  <Link className='grey-text text-lighten-3' to='#!'>
                    Food
                  </Link>
                </li>
                <li>
                  <Link className='grey-text text-lighten-3' to='#!'>
                    Qurbani
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className='footer-copyright black'>
          <div className='container'>
            <div className='row'>
              <div className='col s6'>
                <br />© 2020 The Illahi Foundation of Canada Inc. All rights
                reserved.
              </div>
              <div className='col s6'>
                <br />
                <img
                  className='right'
                  src={datalchemyLogo}
                  alt=''
                  width='50px'
                  height='50px'
                ></img>
                <br />
                <a
                  className='green-text  right'
                  href='http://www.datalchemy.ai/'
                >
                  Powered by datalchemy.ai
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
