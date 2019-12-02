import React from 'react';
import './styles/navbar.css';

const NavBar: React.FunctionComponent = () => {
  return (
    <div className='nav-bar'>
      <a href='/'>
        <img
          style={{ width: '50%' }}
          src={require('../../images/sustainable-house.svg')}
        />
      </a>
    </div>
  );
};

export default NavBar;
