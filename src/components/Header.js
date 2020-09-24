import React from 'react';

import config from '../../config';
import logo from '../assets/img/logoSombra.png';

export default function Footer() {
  const logoStyle = {
    width: '20vh',
    height: 'auto',
    opacity: '0.7',
  };

  return (
    <header id="header">
      <img src={logo} alt="Sunroots Logo" style={logoStyle} />
      <p>{config.subHeading}</p>
    </header>
  );
}
