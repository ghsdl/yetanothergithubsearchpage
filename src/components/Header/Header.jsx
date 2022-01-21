import React from 'react';
import logo from '../../assets/images/logo.png';

import './Header.scss';

const Header = () => {
  return (
    <header className='header'>
      <img src={logo} alt='GitHub logo' className='header__logo' />
    </header>
  );
};

export default Header;
