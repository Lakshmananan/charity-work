import React from 'react';

const Navbar = () => {
  return (
    <div className='navbar-fixed'>
      <nav className='nav-extended'>
        <div className='nav-wrapper'>
          <a href='#!' className='brand-logo '>
            THE ILAHI FOUNDATION
          </a>
          <a href='#!' data-target='mobile-demo' className='sidenav-trigger'>
            <i className='material-icons'>menu</i>
          </a>
          <ul id='nav-mobile' className='right hide-on-med-and-down'>
            <li>
              <a href='#!'>About</a>
            </li>
            <li>
              <a href='#!'>Education</a>
            </li>
            <li>
              <a href='#!'>Woman Empowerment</a>
            </li>
            <li>
              <a href='#!'>Social Welfare</a>
            </li>
            <li>
              <a href='#!'>Food</a>
            </li>
            <li>
              <a href='#!'>Qurbani</a>
            </li>
          </ul>
        </div>
      </nav>

      <ul className='sidenav' id='mobile-demo'>
        <li>
          <a href='#!'>About</a>
        </li>
        <li>
          <a href='#!'>Education</a>
        </li>
        <li>
          <a href='#!'>Woman Empowerment</a>
        </li>
        <li>
          <a href='#!'>Social Welfare</a>
        </li>
        <li>
          <a href='#!'>Food</a>
        </li>
        <li>
          <a href='#!'>Qurbani</a>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
