import React from 'react';

const Header = () => {
  return (
    <nav id='pr-nav' className='nav-bar'>
      <div className='logo'>
        <a href='#'>
          <img src='/images/logo.png' alt='logo' />
        </a>
      </div>
      <div className='menu-items'>
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Services</li>
          <li>Consultancy Fees</li>
          <li>Gau Sewa</li>
          <li>Payments</li>
          <li>Contact Us</li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
