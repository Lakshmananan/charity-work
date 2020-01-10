import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div>
      <div className='navbar-fixed '>
        <nav>
          <div className='nav-wrapper teal'>
            <Link to='/' className='brand-logo '>
              THE ILAHI FOUNDATION
            </Link>
            <Link to='/' data-target='mobile-demo' className='sidenav-trigger'>
              <i className='material-icons'>menu</i>
            </Link>
            <ul id='nav-mobile' className='right hide-on-med-and-down'>
              <li>
                <Link to='/about'>About</Link>
              </li>
              <li>
                <Link to='/message'>Message</Link>
              </li>
              <li>
                <Link to='/education'>Education</Link>
              </li>
              <li>
                <Link to='/foodbank'>Food Bank</Link>
              </li>
              <li>
                <Link to='/socialwelfare'>Social Welfare</Link>
              </li>
              <li>
                <Link to='/water'>Water</Link>
              </li>
              <li>
                <Link to='/womanempowerment'>Woman Empowerment</Link>
              </li>
              <li>
                <Link to='qurbani'>Qurbani</Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
      <ul className='sidenav ' id='mobile-demo'>
        <li>
          <Link to='/about'>About</Link>
        </li>
        <li>
          <Link to='/message'>Message</Link>
        </li>
        <li>
          <Link to='#!'>Education</Link>
        </li>
        <li>
          <Link to='#!'>Food Bank</Link>
        </li>
        <li>
          <Link to='#!'>Social Welfare</Link>
        </li>
        <li>
          <Link to='#!'>Water</Link>
        </li>
        <li>
          <Link to='#!'>Woman Empowerment</Link>
        </li>
        <li>
          <Link to='#!'>Qurbani</Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
