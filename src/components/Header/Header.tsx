'use client';
import React, { useRef } from 'react';

const Header = () => {
  const navRef = useRef(null);
  const handleToggle = () => {
    navRef?.current?.classList.toggle('collapsible--expanded');
  };
  return (
    <nav className='nav collapsible' ref={navRef}>
      <a className='nav__brand' href='/'>
        <img src='images/logo.png' alt='' />
      </a>
      <svg className='icon icon--white nav__toggler' onClick={handleToggle}>
        <use xlinkHref='images/sprite.svg#menu'></use>
      </svg>
      <ul className='list nav__list collapsible__content'>
        <li className='nav__item'>
          <a href='#'>Home</a>
        </li>
        <li className='nav__item'>
          <a href='#'>About Us</a>
        </li>
        <li className='nav__item'>
          <a href='#'>Services</a>
        </li>
        <li className='nav__item'>
          <a href='#'>Consultancy</a>
        </li>
        <li className='nav__item'>
          <a href='#'>Gau Sewa</a>
        </li>
        <li className='nav__item'>
          <a href='#'>Payments</a>
        </li>
        <li className='nav__item'>
          <a href='#'>Contact Us</a>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
