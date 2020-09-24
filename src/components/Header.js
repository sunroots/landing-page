import React from 'react';

import config from '../../config';
import logo from '../assets/img/logoSombra.png';

export default function Footer() {
  const logoStyle = {
    width: '20vh',
    height: 'auto',
  };

  return (
    <header id="header">
      <img src={logo} alt="Sunroots Logo" style={logoStyle} />
      <p>{config.subHeading}</p>
    </header>
  );
}
