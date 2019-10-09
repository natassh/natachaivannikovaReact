import React from 'react';
import LogoTitle from '../../Atoms/LogoTitle/LogoTitle';
import LogoSubtitle from '../../Atoms/LogoSubtitle/LogoSubtitle';
import './Main-header.css';

const MainHeader = () => {
  return (
    <header className="main-header">
      <LogoTitle />
      <LogoSubtitle />
    </header>
  );
};

export default MainHeader;
