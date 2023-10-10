import React from 'react';

const Header = () => {
  return (
    <nav
      id='pr-nav'
      className='primary-menu navbar navbar-expand-lg navbar-dark'
    >
      <div className='container-fluid primary-menu-inner px-0'>
        <div className='top-wrap'>
          <a
            href='/'
            className='custom-logo-link'
            rel='home'
          >
            <img
              width='486'
              height='228'
              src='/images/logo.png'
              className='custom-logo style-svg'
              alt='Mysta'
              decoding='async'
            />
          </a>{' '}
          <button
            id='mobile-toggle'
            className='navbar-toggler animate-button collapsed'
            type='button'
            data-toggle='collapse'
            data-target='#navbarColor01'
            aria-controls='navbarColor01'
            aria-expanded='false'
            aria-label='Toggle navigation'
          >
            <span id='m-tgl-icon' className='animated-icon1'>
              <span></span>
              <span></span>
            </span>
          </button>
        </div>
        <div
          className='collapse navbar-collapse justify-content-end'
          id='navbarColor01'
        >
          <ul id='primary-menu' className='navbar-nav pl-3'>
            <li
              id='menu-item-635'
              className='menu-item menu-item-type-custom menu-item-object-custom current-menu-ancestor current-menu-parent menu-item-has-children dropdown active menu-item-635 nav-item'
            >
              <a
                href='#'
                data-toggle='dropdown'
                aria-haspopup='true'
                aria-expanded='false'
                className='dropdown-toggle nav-link'
                id='menu-item-dropdown-635'
              >
                <span>Pages</span>
              </a>
            </li>
            <li
              id='menu-item-1553'
              className='menu-item menu-item-type-post_type menu-item-object-page menu-item-1553 nav-item'
            >
              <a
                href='/about-us/'
                className='nav-link'
              >
                <span>About Us</span>
              </a>
            </li>
            <li
              id='menu-item-1675'
              className='menu-item menu-item-type-post_type menu-item-object-page menu-item-1675 nav-item'
            >
              <a
                href='/our-team/'
                className='nav-link'
              >
                <span>Our Team</span>
              </a>
            </li>
            <li
              id='menu-item-1814'
              className='menu-item menu-item-type-post_type menu-item-object-page menu-item-1814 nav-item'
            >
              <a
                href='/contact-us/'
                className='nav-link'
              >
                <span>Contact Us</span>
              </a>
            </li>
            <li
              id='menu-item-1949'
              className='menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children dropdown menu-item-1949 nav-item'
            >
              <a
                href='#'
                data-toggle='dropdown'
                aria-haspopup='true'
                aria-expanded='false'
                className='dropdown-toggle nav-link'
                id='menu-item-dropdown-1949'
              >
                <span>Online Shop</span>
              </a>
            </li>
            <li
              id='menu-item-1868'
              className='menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children dropdown menu-item-1868 nav-item'
            >
              <a
                href='#'
                data-toggle='dropdown'
                aria-haspopup='true'
                aria-expanded='false'
                className='dropdown-toggle nav-link'
                id='menu-item-dropdown-1868'
              >
                <span>Blog</span>
              </a>
            </li>
          </ul>{' '}
          <div className='header-icons'>
            <div className='header-cart-icon'>
              {' '}
              <a
                className='menu-item cart-contents'
                href='/cart/'
                title='My Basket'
              ></a>
            </div>
          </div>
          <div className='header-cta'>
            <a href='/contact-us' target='_blank'>
              <div className='d-inline-block elementor-button-link elementor-button elementor-size-md'>
                Buy Now
              </div>
            </a>
          </div>{' '}
        </div>
      </div>
    </nav>
  );
};

export default Header;
