import React from 'react';
import LogoTitle from '../../Atoms/LogoTitle/LogoTitle';
import LogoSubtitle from '../../Atoms/LogoSubtitle/LogoSubtitle';
import './MainHeader.css';

const MainHeader = () => {
  return (
    <header className="main-header">
      <LogoTitle href="/" text="Natacha Ivannikova" />
      <LogoSubtitle text="WordPress Developer Freelance" />
    </header>
  );
};

export default MainHeader;
